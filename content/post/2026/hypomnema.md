---
title: "Hypomnema : commenter ses lectures dans Obsidian, avec la machine"
slug: hypomnema
date: 2026-11-03
description: De la fermeture d'Omnivore à la publication d'Hypomnema, un plugin Obsidian pour commenter ses lectures en marge, développé avec Claude Code. Récit en « build in public » d'un usage pharmacologique d'un dispositif génératif, et de ses limites.
tags:
- dualite
- ia
- numerique

---

Le 29 octobre 2024, l'équipe d'[Omnivore](https://omnivore.app) annonçait [rejoindre ElevenLabs](https://elevenlabs.io/blog/omnivore-joins-elevenlabs). Pour les utilisateurs, cette nouvelle avait des conséquences moins sympa : il fallait exporter ses données avant la mi-novembre, après quoi le service fermerait ([TechCrunch](https://techcrunch.com/2024/10/29/elevenlabs-has-hired-the-team-behind-omnivore-a-reader-app/)). J'utilisais Omnivore comme application de lecture différée (ce que les anglophones appellent *read-it-later*) : j'y envoyais les articles que je voulais lire au calme, j'y surlignais, j'y revenais. J'adorais tellement l'outil, gratuit et libre, que j'avais écrit un [texte sur le sujet (read & takes note)](https://reflexions.florianernotte.be/post/readandtakesnotes/) en août 2024.

Je voudrais expliquer ici ce qui s'est passé ensuite, jusqu'à la publication, ce 31 octobre 2026, d'un petit plugin pour Obsidian que j'ai appelé [Hypomnema](https://github.com/Floernt/hypomnema). Je le fais en mode « build in public » (construire en public), parce que le parcours me semble aussi intéressant que l'outil (pas super objectif, j'en conviens). Ce "parcours" illustre le sujet sur lequel j'écris et réfléchis depuis plusieurs mois : un usage pharmacologique d'un dispositif génératif. Ce n'est pas parfait mais je trouve qu'il y a suffisamment d'éléments positifs à partager.

J'explique en détail le chemin et d'une certaine manière mets à jour ma note "read & takes note" d'août 2024. 

Pour ceux qui veulent du concret (et du technique) sur [Hypomnema](https://community.obsidian.md/plugins/hypomnema), le [site de documentation](https://hypomnema.tools/) (en français et en anglais) explique l'installation et le fonctionnement du plugin, et le code est disponible sur [GitHub](https://github.com/Floernt/hypomnema). Pour les autres, suivez le guide. 

## 1. Rapatrier la lecture 

Après la fermeture d'Omnivore, j'ai cherché une alternative. Je me suis finalement orienté vers une solution qui reposait sur un outil que j'utilisais déjà pour mes notes : [Obsidian](https://obsidian.md). L'éditeur propose une extension de navigateur, l'[Obsidian Web Clipper](https://obsidian.md/clipper), qui extrait le contenu d'un article web et le transforme en note Markdown dans mon coffre. Le processus est simple, efficace et paramétrable : je capture l'article, je l'ouvre dans Obsidian, je le lis.

L'avantage d'Obsidian (à l'inverse d'Omnivore ou d'autres apps), c'est que l'article devient un fichier texte qui m'appartient, lisible par n'importe quelle application qui gère le format .md, et qui survivra à Obsidian lui-même si l'éditeur venait à disparaître. Je n'ai pas de dépendance logicielle avec Obsidian. C'est un premier avantage.

## 2. Surligner puis extraire

Pour lire, je me suis inspiré de la méthode de la [synthèse progressive](https://fortelabs.com/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/) (*progressive summarization*) de Tiago Forte : on surligne ce qui retient l'attention lors d'une première lecture, puis on met en gras, à l'intérieur de ces surlignages, ce qui en constitue l'essentiel. Chaque couche distille la précédente. 

Au fil des usages, ces surlignages et mises en gras restaient dans le texte. Forte propose de "recopier" ces sélections en tête de document. J'ai finalement paramétré un petit script qui extrait les passages surlignés et mis en gras et les place en tête de l'article. Pour ce script, j'utilise [QuickAdd](https://quickadd.obsidian.guide/). Après avoir lu un texte et si j'ai surligné des passages, je lance la commande et j'obtiens, au début du texte, la liste des surlignages que j'avais retenus, qui me permettait de relire cette sélection.

J'ai utilisé ce système pendant plusieurs mois, de manière sporadique, puis récemment de manière beaucoup plus intensive. 

## 3. Un (nouveau) besoin 

C'est l'usage intensif qui a fait apparaître un (nouveau) besoin que je ne ressentais pas auparavant. Surligner permet de se dire « ceci est important ». Cela ne permet pas de dire pourquoi, ni ce que j'en pense, ni à quoi cela me fait penser. Au 31/10/2026, j'ai "clippé" 319 fichiers. Les plus anciens ont presque deux ans. Autant dire que je ne me rappelle pas nécessairement pourquoi j'ai surligné un passage et ce que j'avais en tête à ce moment dans une note du 17/01/2025. 

Ce "besoin" peut sembler absurde si vous n'avez pas lu mon premier texte sur le sujet : j'y parle de la méthode Zettelkasten. Il s'agit d'une méthode pour gérer de la connaissance qu'on accumule et qui permet de créer un système de prise de notes mais surtout de connexion entre les notes que l'on rédige en appliquant quelques principes et règles. Plus d'infos sur [ce site](https://zettelkasten.de/overview/).

Ce contexte autour du surlignage est important, parfois plus important que le contenu surligné. D'une certaine manière, ces commentaires sont les traces du dialogue entre le texte et ma lecture.

La solution la plus évidente consistait à écrire mes remarques directement dans le texte mais cette manière de procéder a deux défauts. D'une part, elle "pollue" le texte original si l'on ne respecte pas un formalisme différent: au bout de quelques annotations, on ne sait plus très bien ce qui relève de l'auteur et ce qui relève du lecteur. D'autre part, elle oblige à adopter une convention typographique (italique, couleur, crochets) pour distinguer le commentaire de la source, convention qu'il faut respecter avec discipline et qui reste fragile.

Illustrons : je lis un article sur la régulation des plateformes et je veux noter, en regard d'un paragraphe, qu'il contredit un arrêt que je connais. Si j'insère ma remarque dans le paragraphe, je dois la mettre en italique, entre crochets. Ce que je voulais, au fond, c'était le volet des commentaires de Word : le commentaire en marge.

La force d'Obsidian tient à son écosystème de [plugins communautaires](https://obsidian.md/plugins). J'en ai cherché et testé quelques-uns. Aucun ne correspondait à ce que j'avais en tête.

## 4. Construire avec la machine

J'ai donc développé le plugin avec [Claude Code](https://claude.com/claude-code), l'outil de développement d'Anthropic qui fonctionne dans le terminal et dans l'éditeur. Je ne suis pas développeur et j'ai une connaissance et une compréhension limitée sur le sujet. Je sais lire un fichier de configuration, lancer une commande PowerShell, comprendre ce qu'un script est censé faire mais je ne sais pas écrire un plugin TypeScript pour Obsidian. Sauf que je ne suis pas tout seul pour le faire. 

 L'historique du projet est public (et rédigé par la machine au fil des interactions) et il raconte la suite mieux que moi. Le [journal des versions](https://github.com/Floernt/hypomnema/blob/main/CHANGELOG.md) retrace la progression : une version 0.1.0 qui attache un commentaire à un passage et le stocke dans la note elle-même ; une version 0.1.2 qui abandonne les cartes affichées en marge du texte au profit d'un panneau latéral unique ; une version 0.2.0 qui permet de rédiger directement dans ce panneau, de commenter un point précis (au curseur) et non plus seulement un passage, et de classer les commentaires par catégories de couleur reliées à des tags ; une version 0.3.0 qui renomme le plugin ; une version 0.4.0 qui rend l'interface bilingue. L'[historique des commits](https://github.com/Floernt/hypomnema/commits/main) montre que l'essentiel de ce travail a été versionné en une matinée, entre 10 h 42 et 13 h 47. 

Un choix de conception (proposé par la machine) mérite d'être mentionné, parce qu'il rejoint la leçon d'Omnivore. Les commentaires sont stockés en texte brut, dans la note elle-même, sous forme de commentaires Obsidian (`%%…%%`) que le mode lecture masque. Le passage commenté est encadré de deux marqueurs, et le texte des commentaires est regroupé dans un bloc en fin de note. Concrètement, si Hypomnema disparaît demain, mes notes restent lisibles, mes commentaires restent cherchables, et un script de quelques lignes suffit à les récupérer. Le [README](https://github.com/Floernt/hypomnema#storage-format-for-scripts) documente d'ailleurs ce format pour quiconque voudrait l'exploiter sans le plugin. J'ai voulu un outil dont on peut sortir.

## 5. Publier et se faire relire par un robot

J'ai publié le code sur [GitHub](https://github.com/Floernt/hypomnema), sous licence libre, puis j'ai soumis le plugin au [catalogue communautaire d'Obsidian](https://github.com/obsidianmd/obsidian-releases), afin de le partager avec d'autres lecteurs qui auraient le même besoin que moi.

La soumission déclenche une première relecture automatisée. Elle a relevé plusieurs points problématiques au regard des règles applicables aux plugins : des styles appliqués directement aux éléments plutôt que par une feuille de style, un accès à une API interne de l'éditeur, un sélecteur CSS jugé coûteux en performances, une version minimale d'Obsidian mal déclarée, quelques maladresses de typage. Ces remarques ont été traitées, une nouvelle fois, par la machine. La [version 0.4.1](https://github.com/Floernt/hypomnema/blob/main/CHANGELOG.md#041--2026-10-31) en rend compte ; elle ajoute même une attestation de provenance des fichiers publiés, construite par GitHub Actions, qui permet de vérifier qu'ils proviennent bien du dépôt.

## 6. Pourquoi Hypomnema ?

Le choix du nom du plugin n'est pas anodin. Les *hypomnêmata* désignaient, dans l'Antiquité grecque, les carnets où l'on consignait citations, lectures et réflexions pour s'y reporter plus tard. Michel Foucault y a consacré de belles pages dans « L'écriture de soi » (*Corps écrit*, n° 5, 1983). Le terme désignait aussi, plus largement, le commentaire d'un texte. Et c'est le mot que Platon emploie dans le *Phèdre* (274e-275b) lorsque Thamous reproche à l'écriture d'être un remède (*pharmakon*) non pour la mémoire, mais pour le ressouvenir (*hypomnêsis*). Le nom porte en lui la question sur laquelle je réfléchis depuis plusieurs mois.

J'ai déjà écrit, dans ce carnet, sur la [pharmacologie](https://reflexions.florianernotte.be/glossaire/termes/pharmacologie/) en m'appuyant sur les travaux de Bernard Stiegler ou plus récemment de Christian Fauré: toute technique est un [pharmakon](https://reflexions.florianernotte.be/glossaire/termes/pharmakon/), remède et poison à la fois, et l'enjeu n'est pas de choisir entre technophilie et technophobie, mais d'identifier, situation par situation, les conditions dans lesquelles le remède l'emporte sur le poison. Ces conditions ne sont jamais acquises une fois pour toutes.

Ce projet me semble en offrir une illustration concrète, et sur deux plans.

Le premier tient à l'objet lui-même. Hypomnema est un outil qui sert à lire plus lentement, à interrompre la lecture pour y inscrire une réflexion, à garder la trace d'un dialogue avec un texte. Il va, si l'on veut, dans le sens inverse de la consommation rapide de contenus que favorisent la plupart des dispositifs actuels. J'ai utilisé un dispositif génératif pour fabriquer un instrument qui soutient l'effort de lecture plutôt que de le court-circuiter.

Le second tient à la répartition du travail. J'ai délégué ce que je ne savais pas faire et que je n'avais pas l'intention d'apprendre : écrire du TypeScript, maîtriser l'API d'Obsidian, connaître les règles du catalogue. J'ai conservé ce qui relevait de mon usage : l'identification du besoin, né de plusieurs mois de pratique, le refus de mêler le texte source et mes remarques, l'exigence d'un format lisible sans le plugin, les arbitrages sur ce que l'outil devait faire et ne pas faire. Sur la base d'un nombre limité de réflexion, j'en conviens, la machine m'a proposé une série de choses que j'ai validées, amendées ou contestées. C'est ce que j'ai appelé ailleurs une [prolétarisation volontaire](https://reflexions.florianernotte.be/glossaire/termes/proletarisation-volontaire/) : l'externalisation consciente d'un savoir-faire dans un système technique, en gardant la maîtrise des critères, de la structure et du périmètre de la délégation (je l'avais développé dans ma [phénoménologie d'une pratique avec l'IAG](https://reflexions.florianernotte.be/post/phenomenologie2026/)).

## 7. Quelques réserves

Je n'écris pas ici que l'exercice est exemplaire. Plusieurs objections sont présentes.

La première porte sur la recherche. Ai-je suffisamment cherché ? J'avoue que non. Pour écrire ce texte, j'ai refait une petite recherche augmentée et j'ai trouvé "rapidement" deux plugins similaires ([Margin Annotations](https://community.obsidian.md/plugins/margin-annotations) et [Marginalia MD](https://community.obsidian.md/plugins/marginalia-md)). Ce qu'il y a d'étonnant c'est qu'ils ont été créés et proposés dans le courant du mois d'octobre 2026. Pour Margin Annotation, le processus de production semble similaire au mien si l'on examine [le répertoire GitHub](https://github.com/aoldiot/margin-annotations).

Cela veut donc dire que lorsque fabriquer un outil sur mesure ne coûte plus que quelques heures, la tentation est grande de le construire plutôt que de chercher, de comparer, d'apprendre à se servir de ce qui existe. Le coût de la fabrication s'est effondré ; le coût de la recherche, lui, est resté le même. Bien ou mal ? Je ne sais pas. Le calcul a changé, et pas nécessairement dans le bon sens. Le catalogue d'Obsidian compte déjà plusieurs milliers de plugins ; chaque outil construit sur mesure plutôt que mutualisé contribue à le fragmenter un peu plus. 

La deuxième réserve prolonge la première. Le dispositif génératif est-il, dans mon cas, une manière paresseuse de court-circuiter la recherche ? J'avais écrit, à propos de l'[écriture et de l'effort](https://reflexions.florianernotte.be/post/ia-ecriture-effort/), que les dispositifs génératifs court-circuitent l'effort de lecture, de sélection et de formulation qui nourrissait autrefois la culture. Il serait inconséquent de ne pas me poser la même question ici. 

L'effort de chercher un outil, de le tester, de lire sa documentation, de comprendre ses limites, est lui aussi formateur : il apprend ce que d'autres ont pensé du même problème. Ce savoir-là, je ne l'ai pas acquis. Je l'ai appris en "faisant" (ou en faisant faire) un plugin et en réfléchissant à son fonctionnement. Je me suis posé des questions sur l'expérience utilisateur, la personnalisation des tags mais je n'ai pas (encore) lu ce que d'autres avaient déjà partagé. Il y a donc ici une forme d'isolement (relatif) qui me fait penser aux prévisions dystopiques que certains font sur l'IA qui va nous fabriquer des mondes personnalisés et artificiels que nous consommerons individuellement à l'aide de casque de réalité virtuelle ou tout autre artefact de ce type. Je n'ai pas suffisamment de recul sur cette pratique pour la critiquer. Je suis dans une "fougue créatrice" qui peut s'apparenter à une sorte de boulimie et j'avoue que je ne sais pas encore quoi y penser. Une expérience intéressante en tous les cas. 

## 8. La suite

Le premier aspect est d'utiliser ce plugin et voir sur le long terme ce que je peux faire pour continuer à l'améliorer et continuer à penser des fonctionnalités qui permettent une grande possibilité de personnalisation. 

J'ai aussi mis en ligne un [site de documentation](https://hypomnema.tools/), en français et en anglais. Au-delà de l'installation et du fonctionnement du plugin (annotations, extractions, chaînes, groupes, intégrations avec d'autres plugins comme Dataview ou QuickAdd), il contient quelques courtes notes de méthode : la marge, l'objection et la vérification, la relecture périodique, le passage de la lecture à l'écriture. C'est une manière de concrétiser, un peu plus, ce projet qui s'inscrit dans ce que je pense être bénéfique : l'outil ne vaut que par la pratique de lecture qu'il soutient.

Le code est disponible sur [GitHub](https://github.com/Floernt/hypomnema). Les retours, les signalements de problèmes et les traductions sont les bienvenus.
