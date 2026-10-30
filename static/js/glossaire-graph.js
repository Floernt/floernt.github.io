// Graphe du glossaire : données injectées par le shortcode glossaire-graph, rendu d3 (force + zoom).
(function () {
  var box = document.getElementById('glossaire-graph');
  var dataEl = document.getElementById('glossaire-graph-data');
  if (!box || !dataEl || !window.d3) return;

  var nodes = JSON.parse(dataEl.textContent);
  var byId = new Map(nodes.map(function (n) { return [n.id, n]; }));

  // Arêtes non orientées, dédoublonnées
  var seen = new Set(), links = [];
  nodes.forEach(function (n) {
    (n.links || []).forEach(function (t) {
      var key = [n.id, t].sort().join('|');
      if (byId.has(t) && !seen.has(key)) { seen.add(key); links.push({ source: n.id, target: t }); }
    });
  });
  var deg = {};
  links.forEach(function (l) { deg[l.source] = (deg[l.source] || 0) + 1; deg[l.target] = (deg[l.target] || 0) + 1; });
  nodes.forEach(function (n) { n.deg = deg[n.id] || 0; });
  // Au repos, seules les étiquettes des ~5 termes les plus reliés restent visibles
  var labelMin = nodes.map(function (n) { return n.deg; }).sort(function (a, b) { return b - a; })[Math.min(4, nodes.length - 1)] || 0;
  var adj = new Map(nodes.map(function (n) { return [n.id, new Set([n.id])]; }));
  links.forEach(function (l) { adj.get(l.source).add(l.target); adj.get(l.target).add(l.source); });

  // Le thème active/désactive une feuille dark.css : on lit les couleurs réelles de la page
  var accentEl = box.querySelector('.gg-accent');
  function syncColors() {
    box.style.setProperty('--gg-accent', getComputedStyle(accentEl).color);
    box.style.setProperty('--gg-bg', getComputedStyle(document.body).backgroundColor);
  }
  syncColors();
  var toggle = document.getElementById('dark-mode-toggle');
  if (toggle) toggle.addEventListener('click', function () { setTimeout(syncColors, 0); });

  var r = function (n) { return 4 + Math.sqrt(n.deg) * 2.6; };
  var svg = d3.select(box).select('svg');
  var root = svg.append('g');
  var k = 1, selected = null, hovered = null;
  var q = document.getElementById('gg-q');
  var panel = box.querySelector('.gg-panel');

  var sim = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(function (d) { return d.id; }).distance(90).strength(.3))
    .force('charge', d3.forceManyBody().strength(-380))
    .force('collide', d3.forceCollide(function (n) { return r(n) + 10; }))
    .force('x', d3.forceX().strength(.05))
    .force('y', d3.forceY().strength(.07))
    .stop();
  // Pré-calcul : le graphe s'affiche déjà stabilisé
  for (var i = 0; i < 300; i++) sim.tick();

  var link = root.append('g').selectAll('line').data(links).join('line').attr('class', 'link');
  var node = root.append('g').selectAll('g').data(nodes).join('g').attr('class', 'node').style('cursor', 'pointer');
  node.append('circle').attr('r', r);
  node.append('text').attr('text-anchor', 'middle').attr('dy', function (d) { return -r(d) - 5; }).text(function (d) { return d.label; });

  function draw() {
    link.attr('x1', function (l) { return l.source.x; }).attr('y1', function (l) { return l.source.y; })
        .attr('x2', function (l) { return l.target.x; }).attr('y2', function (l) { return l.target.y; });
    node.attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; });
  }
  sim.on('tick', draw);
  draw();

  // La molette seule fait défiler la page ; Ctrl/⌘ + molette zoome le graphe
  var zoom = d3.zoom().scaleExtent([.3, 4])
    .filter(function (e) { return e.type === 'wheel' ? (e.ctrlKey || e.metaKey) : !e.button; })
    .on('zoom', function (e) { k = e.transform.k; root.attr('transform', e.transform); labels(); });
  svg.call(zoom).on('dblclick.zoom', null);
  svg.on('click', function (e) { if (e.target === svg.node()) select(null); });

  // Cadre le graphe entier dans le bloc (marge haute pour la barre d'outils)
  function fit(animate) {
    var rect = box.getBoundingClientRect();
    if (!rect.width) return;
    var pad = 28, top = 50;
    var xs = nodes.map(function (n) { return n.x; }), ys = nodes.map(function (n) { return n.y; });
    var x0 = Math.min.apply(null, xs) - pad, x1 = Math.max.apply(null, xs) + pad;
    var y0 = Math.min.apply(null, ys) - pad, y1 = Math.max.apply(null, ys) + pad;
    var s = Math.min(1.4, rect.width / (x1 - x0), (rect.height - top) / (y1 - y0));
    var t = d3.zoomIdentity.translate(rect.width / 2 - s * (x0 + x1) / 2, top + (rect.height - top) / 2 - s * (y0 + y1) / 2).scale(s);
    (animate ? svg.transition().duration(500) : svg).call(zoom.transform, t);
  }

  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function labels() {
    var focus = hovered || selected, near = focus && adj.get(focus.id), term = norm(q.value.trim());
    node.select('text').attr('opacity', function (d) {
      if (near) return near.has(d.id) ? 1 : 0;
      if (term && norm(d.label).indexOf(term) > -1) return 1;
      return (k > 1.6 || d.deg >= labelMin) ? 1 : 0;
    });
  }

  function paint() {
    var focus = hovered || selected, near = focus && adj.get(focus.id), term = norm(q.value.trim());
    var match = function (d) { return term && norm(d.label).indexOf(term) > -1; };
    node.classed('dim', function (d) { return near ? !near.has(d.id) : (term ? !match(d) : false); })
        .classed('hi', function (d) { return focus ? d.id === focus.id : !!match(d); });
    var touches = function (l) { return focus && (l.source.id === focus.id || l.target.id === focus.id); };
    link.classed('dim', function (l) { return near ? !touches(l) : !!term; })
        .classed('hi', touches);
    labels();
  }

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function select(d) {
    selected = d;
    if (!d) { panel.hidden = true; paint(); return; }
    var nb = Array.from(adj.get(d.id)).filter(function (id) { return id !== d.id; })
      .map(function (id) { return byId.get(id); })
      .sort(function (a, b) { return a.label.localeCompare(b.label); });
    panel.innerHTML = '<button type="button" class="gg-close" aria-label="' + esc(box.dataset.close) + '">×</button>' +
      '<strong>' + esc(d.label) + '</strong>' +
      (nb.length ? '<div class="gg-k">' + esc(box.dataset.related) + ' · ' + nb.length + '</div><ul>' +
        nb.map(function (n) { return '<li><a href="' + esc(n.url) + '">' + esc(n.label) + '</a></li>'; }).join('') + '</ul>' : '') +
      '<a class="gg-open" href="' + esc(d.url) + '">' + esc(box.dataset.open) + ' →</a>';
    panel.querySelector('.gg-close').onclick = function () { select(null); };
    panel.hidden = false;
    paint();
  }

  node.on('mouseenter', function (e, d) { hovered = d; paint(); })
      .on('mouseleave', function () { hovered = null; paint(); })
      .on('click', function (e, d) { e.stopPropagation(); select(selected === d ? null : d); })
      .call(d3.drag()
        .on('start', function (e, d) { if (!e.active) sim.alphaTarget(.25).restart(); d.fx = d.x; d.fy = d.y; })
        .on('drag', function (e, d) { d.fx = e.x; d.fy = e.y; })
        .on('end', function (e, d) { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

  q.addEventListener('input', paint);
  document.getElementById('gg-fit').addEventListener('click', function () { fit(true); });
  document.getElementById('gg-in').addEventListener('click', function () { svg.transition().duration(250).call(zoom.scaleBy, 1.3); });
  document.getElementById('gg-out').addEventListener('click', function () { svg.transition().duration(250).call(zoom.scaleBy, 1 / 1.3); });
  if (window.ResizeObserver) new ResizeObserver(function () { fit(false); }).observe(box);

  fit(false);
  paint();
})();
