---
title: Human in the loop qu'y fait-on, au juste, dans cette boucle
date: 2026-06-05
description: Une formule qui circule, chargéé en apparence mais qui ne veut pas vraiement dire quelque chose de concrèt.
tags:
- dualite
- therapeutique
- essai
- ia

---

Depuis quelque temps, de plus en plus de spécialistes de l'IA générative proposent de garder l'humain dans la boucle (_Human in the loop_ (HITL)). Cette formule se retrouve aussi dans la réglementation européenne sous le vocable de "contrôle humain" ou supervision humaine. Ce concept a été popularisé notamment par Ethan Mollick dans _Co-Intelligence_ comme l'un des 4 principes préconisés par le professeur américain aux côtés de 3 autres principes ((i) Faites toujours participer l'IA. (ii) Traitez l'IA comme une personne. (iii) Partez du principe qu'il s'agit de la pire IA que vous ayez jamais utilisée.)

Depuis, on découvre cette notion dans les chartes d'entreprise, dans les présentations commerciales, dans les notes de conformité ou dans certains cénacles sans avoir d'explication très claire sur comment mettre en pratique cette supervision. Le contrôle humain traverse les registres mais ne dit rien de précis et chacun y projette ce qu'il a besoin d'y voir. Le régulateur y voit une garantie, l'éditeur y voit un argument de vente, l'utilisateur y voit une manière "éthique" d'utiliser la machine.

Cette formule doit être questionnée et pensée, non pas pour la disqualifier, car elle est importante si pas fondamentale, mais pour examiner ce qu'elle doit recouvrir plus concrètement. Je voudrais proposer ce qu'il faudrait, à mon sens, pour qu'elle commence à dire (vraiment) quelque chose.

### L'absence de standard

Le _human in the loop_ c'est le contrôle humain au sens de l'article 14 du Règlement sur l'IA (RIA). C'est une obligation pour les systèmes à haut risque. Cette obligation réglementaire, propre au système à haut risque, a muté : elle devient maintenant une règle éthique pour tous les usages qu'on pourrait avoir des systèmes d'IA, même avec risque minime. On oscille entre ce qu'_on doit faire_ et ce qu'_on devrait faire_.

Avec cette mutation de l'obligation légale spécifique vers l'éthique, on laisse aux utilisateurs le soin de définir ce contrôle au regard des objectifs généraux du texte (ou de tout autre critère choisi par l'utilisateur). Et parce que cette pratique est devenue éthique, chacun est libre de définir comment il entend mettre en œuvre l'humain dans la boucle.

Mais les acteurs n'ont pas vraiment d'intérêt à définir spécifiquement cette pratique. Plus la formule reste indéterminée, plus elle est facile à invoquer dans une déclaration de conformité. Elle coche une case sans contraindre efficacement et/ou réellement un usage des systèmes d'IA. C'est ce que j'exposais déjà en novembre 2025 ([voir mon article sur le sujet de l'éthique et de la conformité](https://reflexions.florianernotte.be/post/ethique-conformit%C3%A9/)). La norme de conformité est tombée dans le champ de l'éthique mais sans standard ou référence concrète et/ou dédiée.

Lorsqu'un règlement européen, une institution, ou un cabinet de conseil affirme que _l'humain doit rester dans la boucle_, on ne se pose pas vraiment la question de ce que cela contraint dans la pratique. La formule fonctionne un peu comme une assurance morale. Ça sonne bien dans un discours, c'est chargé d'un point de vue éthique et ça donne l'illusion d'une exigence opérationnelle et sérieuse. Si l'on approfondit un minimum, ou qu'on cherche à comprendre ce que recouvre ce mot d'ordre, on constate rapidement qu'on ne précise pas toujours _qui_ est l'humain en question, _quand_ il doit intervenir et sur la base de _quels critères_ il intervient, ni même _avec quel pouvoir dans le processus_.

Je ne pense pas exagérer en pointant cela. C'est un constat banal pour quiconque a essayé de mettre en place une politique d'usage de l'IA dans une organisation. On continue à invoquer le _human in the loop_ comme si l'incantation suffisait. Or, je crois qu'elle ne suffit pas, et qu'elle est même devenue, à force de circuler sans contenu, l'un des vecteurs de normalisation qu'elle voudrait cependant encadrer.

### Une validation déguisée

Il y a, dans la formule, un présupposé temporel qu'il faut d'emblée examiner. _Dans la boucle_, ne précise pas où. Dans la pratique, la notion de contrôle a pour incidence que ce contrôle se place _après_. L'humain est invité à contrôler une sortie, alors qu'il pourrait tout autant être invité à structurer une entrée. L'humain semble convoqué quand le résultat est déjà là, pour le lire, le corriger, l'approuver. C'est une position de relecteur, pas de producteur.

Or la validation _a posteriori_ d'un résultat produit par une machine est un exercice assez différent de la production _a priori_ de ce résultat.

Cette validation _a posteriori_ va mobiliser des capacités moins profondes et moins liées à l'expertise de l'utilisateur. Le professionnel qui se contente de valider exerce une compétence d'évaluation. Mais cette évaluation est appauvrie parce que l'utilisateur n'a pas parcouru le chemin qui mène au résultat. Il lit la surface et il ne peut pas interroger concrètement les fondations du résultat. Ça semble plausible et c'est l'une des raisons pour laquelle l'attention baisse et que les erreurs peuvent arriver.

En plus de cet appauvrissement de l'évaluation, il y a le [biais d'automatisation](/glossaire/termes/biais-automatisation/) : la tendance à accorder une confiance excessive aux productions de la machine. La validation devient encore plus superficielle dans ce cadre. On relit en diagonale, on fait confiance et les imprécisions sont acceptées, faute de mieux ou par paresse.

Le coup de massue est finalement porté par la cadence imposée par la machine. Marion Carré, dans _Le paradoxe du tapis roulant_, constate que nos cadences de productivité s'ajustent à celles de l'IA. La validation se cale aussi sur ce nouveau tempo, et cela signifie qu'elle s'accélère et donc qu'elle se réduit à proportion. La _boucle_ devient un cycle court, de plus en plus court et parfois bien trop court pour une validation sérieuse. Parce que le contrôle humain est flou, vague et indéfini, l'_humain dans la boucle_ finit par devenir un simple rappel de relecture avant de signer ou d'envoyer le contenu généré.

C'est en cela que la validation est déguisée : elle est falsifiée et travestie par son manque de précision, de rigueur, par son biais d'automatisation et par la cadence de la machine. La relecture n'est pas un contrôle ou une supervision et inversement. Il y a quelque chose de fondamentalement différent dans la notion de supervision humaine qu'on retrouve peu dans la pratique.

### Deux propositions de protocoles

Le constat posé n'est pas universel mais pour ceux qui retrouvent tout ou partie des éléments évoqués, je voudrais proposer ce qui pourrait remplacer la formule creuse par quelque chose qui contraindrait réellement nos pratiques. Je crois que la réponse passe par une bascule du _mot d'ordre_ à un _protocole_. L'idée n'est pas non plus de proposer un protocole universel qui s'appliquerait à toute situation. Je ne crois pas au prompt magique. L'objectif est de proposer une méthode, une structure de protocole concrète, qui devra être formalisée par chaque organisation et à chaque type d'usage qui devront être construits par l'utilisateur.

Je vois deux familles de protocoles, qui s'articulent pour **produire** et **vérifier** le travail de la machine.

#### Protocole de production

J'ai déjà abordé les principes qui sous-tendent ce type de protocole : je vise ici la [_grammatisation_](/glossaire/termes/grammatisation/) : voir notamment [[Grammatiser et observer. deux nouvelles pratiques thérapeutiques à l'intelligence artificielle générative]]*.

En synthèse, cette grammatisation réalisée au travers d'un protocole de production est un _« travail de configuration »_ pour adapter un système générique à une tâche spécifique. Ce travail de configuration nécessite de discrétiser son activité, c'est-à-dire de la décomposer en unités traitables par le système ([H. Guillaud- La productivité de l'IA au travail est toujours incertaine](https://danslesalgorithmes.net/stream/la-productivite-de-lia-au-travail-est-toujours-incertaine/)).

C'est une méthodologie, en apparence, assez simple qui vise à découper ses processus de travail par **séquence atomique** (je développe cette notion plus bas dans le texte) dans une mesure où l'on puisse décrire à la machine ce qu'il faut faire pour une exécution future. C'est l'équivalent de la ligne de production industrielle pour les prestations "mentales". La grammatisation ou le protocole de production c'est aussi, d'une certaine manière, un algorithme de travail (plus ou moins simple selon les cas).

Là où ça peut se compliquer, c'est sur la décomposition des processus. Pour construire une maison, il y a un ordre "logique" qui permet d'enchainer les processus et les étapes dans une chronologie généralement identique (fondations, gros œuvre, toiture, châssis, ...). Vous ne commencez pas le parachèvement sans avoir fait l'électricité et le chauffage par exemple. Pour les prestations mentales, l'ordre est parfois plus nébuleux parce que plus instinctif. Selon les cas, nous avons des automatismes qui font que nous n'avons, parfois, plus conscience d'exécuter un processus. Ce sont les mêmes questions posées, la même transposition théorique vers la pratique et le travail s'enchaine quasi naturellement pour certains.

La valorisation des actions d'une entreprise par un Réviseur suit une ou plusieurs méthodologies qui impliquent, au préalable, de traiter de certains postes du bilan et du compte de résultat pour "normaliser" la situation de l'entreprise. Je pense notamment à certaines dépenses faites en raison de choix du dirigeant qui sont neutralisées et permettent de normaliser, par exemple, l'EBITDA. Pour l'avocat que je suis, l'analyse de certains types de problématiques passe par une collecte d'informations préalable qui permet ensuite de répondre à des questions que je me pose. Ces démarches ou ces séquences peuvent donc être transcrites dans un protocole de production, fourni à la machine, pour exécution future. Alors, l'idée ici n'est pas de viser les "fameuses" _tâches répétitives à faible valeur ajoutée_ qu'on peut automatiser grâce à la machine même si celles-ci peuvent faire l'objet d'un protocole de production, je pense plutôt à des tâches plus complexes.

##### Du prompt au protocole

Depuis l'arrivée de l'IA générative en novembre 2022, ces "protocoles" étaient transmis au travers de _prompts_, instructions plus ou moins longues et complexes fournies à la machine dans le cadre d'un échange simulant la conversation. Avec l'évolution des interfaces et des machines, ces instructions ont pu être encodées de manière plus ou moins persistantes pour réutilisation future. Les développeurs d'IA générative avaient bien compris que la réutilisation d'instruction par le biais d'un _copier-coller_ était une bizarrerie lorsqu'on utilise une machine capable de générer des milliers de mots sur simples instructions.

En outre, cet échange sous la forme d'une conversation limite, par la spontanéité de la réponse-machine, la capacité de l'utilisateur à agrémenter ses instructions. La conversation prend vite le dessus et l'utilisateur se contente alors de la diriger avec plus ou moins d'attention (voyez à ce sujet _L'Intelligence Artificielle pour les juristes_ (par [Alain Strowel & François Wery (Larcier, 2025)](https://www.larcier-intersentia.com/fr/ia-generatives-9782807947320.html) et plus particulièrement le modèle 9C™ pour converser avec l'IA.)

Avec l'arrivée des [Skills](https://support.claude.com/fr/articles/12512176-qu-est-ce-que-les-skills) proposées par Anthropic dans Claude, ces protocoles de production sont devenus bien plus simples et faciles à mettre en place. On constate même des protocoles de production pour créer des bonnes skills, soit [une skill pour faire des skills](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md). En plus, ces skills sont partageables ce qui permet une diffusion au sein de son organisation par exemple en standardisant une manière de travailler avec la machine, selon la méthodologie décidée.

Pratique mais il y a cependant certains écueils qui commencent à apparaitre et qui démontrent, malheureusement, la fragilité de notre supervision humaine. Des places de marchés proposent maintenant de télécharger des _skills_ mises à disposition par des tiers. Bien que l'idée soit intéressante, elle contrevient, à mon estime, à l'essence même de la grammatisation qui est de discrétiser **sa propre pratique**. Ici, les places de marchés permettent d'utiliser la méthodologie d'un autre. En termes de supervision et de contrôle, cela nécessite d'avoir une grande maitrise sur le sujet et de veiller à l'absence d'éléments malveillants qui seraient "cachés" dans les skills téléchargées. Or, cette situation concernant des données malveillantes injectées a été notamment documentée dans un pré-print de février 2026 : [When Skills Lie: Hidden-Comment Injection in LLM Agents](https://arxiv.org/abs/2602.10498)

Pour conclure sur ce point, si le protocole est réalisé consciencieusement, il permet un contrôle en aval bien plus précis et strict du résultat par l'utilisateur notamment en raison des contraintes qui y ont été placées en amont. Cela permet également de lutter contre le phénomène de [prolétarisation](/glossaire/termes/proletarisation/) ([voir ma note](https://reflexions.florianernotte.be/post/proletarisation-droit/)) et de guider un processus (simulé) de raisonnement de la machine.

Sur ce point, l'effort à mettre en place ce type de protocole a deux effets bénéfiques à rebours. J'entends ici un bénéfice qui est visible pas immédiatement.

1. **Une optimisation continue**. C'est évidemment déterminant ici mais la mise en place d'un protocole de production est une base de travail qui peut (et devrait) évoluer. La mise en place de tels protocoles, même assistée par la machine, permet d'obtenir un processus écrit lors d'une "simple" conversation en langage naturel. Activez la fonction dictée de votre périphérique, expliquez à la machine _ce que_ vous faites et _comment_ vous le faites et vous disposez en quelques minutes d'une première version qui peut, pour certains cas, être déjà très performante. Grâce à cette version écrite il est possible de mettre à jour, agrémenter et faire évoluer le protocole au gré de vos pratiques. En plus des skills de skills déjà évoquées, d'autres méthodologies de décomposition sont proposées (voir par exemple le projet d'[Alexios van der Slikke-Kirillov](https://github.com/SaifAlYounan/professor-nii-principles-building-assistant)).
    
2. **Une amélioration du résultat**. À l'inverse de ce que nous pouvons subir ou rencontrer, la machine n'est pas malade, fatiguée ou déconcentrée. Elle produit inlassablement le contenu qui lui est demandé au regard des instructions formulées (sous réserve des problématiques liées au caractère non déterministe de la machine et des cas d'hallucinations qui sont dans ce cas plus marginales - voir ci-après). On parle souvent de gain de temps comme avantage d'utiliser la machine. Je n'entends pas rentrer dans ce débat mais je pense qu'il y a, avant toute chose, une amélioration de la qualité de ce qui est produit grâce à un protocole de production mis en place en amont. La décomposition induite par la grammatisation permet de systématiser la production, sans saut d'étape, et aussi de dépenser du temps et de l'énergie sur d'autres tâches que la mise en forme, la structure et plus généralement l'expression de son intuition ou de sa pensée. Déléguer le connu pour mieux penser l'inconnu, encore et toujours.
    

##### Sur la séquence atomique

La notion de séquence atomique est importante à préciser et à appréhender pour toute décomposition. À noter d'ailleurs que cette décomposition est la base de tout processus d'automatisation. Comme exposé ci-dessus, le succès d'une automatisation repose sur le découpage d'un processus en **"séquence atomique"**. Les caractéristiques de ces **séquences atomiques** sont que la séquence soit suffisamment dissociée des autres tâches pour qu'elle puisse avoir un caractère (i) **autonome** et (ii) **chrono-logique**.

###### Autonome

Le caractère **autonome** de la séquence signifie que la séquence s'exécute selon ses propres règles. Elle reçoit une entrée et produit une sortie sans autre élément nécessaire.

Pour la prise d'un rendez-vous client, on peut séquencer les étapes et réfléchir à l'automatisation de chaque séquence atomique. Dans mon cas, j'ai automatisé le choix de la plage horaire via Cal. Cette séquence n'est possible que parce que, et donc grâce, à l'information que je transmets au client. Sans celle-ci, il n'est pas en mesure de prendre rendez-vous.

À l'inverse, il n'y a pas besoin d'autre information que celle reçue pour prendre rendez-vous. La séquence est donc autonome en ce sens. Elle est réalisable selon ses propres "conditions" qui sont décidées au moment du séquençage. C'est d'ailleurs dans ce cadre qu'on pourra considérer que la grammatisation est efficace ou pas.

###### Chronologie

**La chronologie** des séquences peut sembler évidente mais a tout son sens. En séquençant les tâches, elles doivent disposer d'une place _"chrono-logique"_.

Si vous devez réaliser un calcul mathématique, les règles d'arithmétique commandent un ordre des opérations. Par exemple pour résoudre 3+4x3, le résultat est 15 et non 21 car on priorise la multiplication face à l'addition. Il y a donc ici 2 séquences atomiques (4x3) et (3+12) mais il y a ici un ordre chronologique à prendre en considération. La séquence (4x3) permet d'alimenter la séquence (3+12).

Si je prends la rédaction d'une convention, je peux distinguer plusieurs étapes :

```
prise d'information>structure de la convention>rédaction>intégration des informations dans la structure>relecture
```

Cette méthodologie est _une méthodologie_ et elle est fondamentalement propre à chacun. Elle peut être accélérée par l'utilisation de modèle de convention mais il subsiste un ordre logique des étapes à réaliser. Par exemple, je ne sais pas intégrer les informations en premier lieu si je ne dispose pas des informations ou de la structure à minima. Cette séquence de tâches va suivre une certaine logique dans sa chronologie.

#### Protocoles de vérification

Le protocole de production joue en amont tandis que le protocole de vérification, lui, joue en aval. Le protocole de vérification va produire, au moins, deux types d'éléments.

##### Explications

Il s'agit ici de forcer la machine à expliquer son "raisonnement" et qu'elle formalise les décisions qu'elle aurait prises en expliquant ses choix et ses critères.

Dans certains "modes" d'utilisation d'IA génératives, une forme de raisonnement est affiché à l'utilisateur entre les interactions. À titre d'illustration, j'invitais la machine à m'interroger :

> à la manière de socrate à propos de : notre relation au monde va être médiatisé par l'IA

Avant de me répondre, la machine produit le texte suivant (que j'ai traduit de l'anglais) :

> Je prépare un dialogue socratique sur la manière dont l'IA influencera notre rapport au monde, et je dois éviter les clichés habituels des écrits sur l'IA : pas de « approfondir », pas de parallélisme forcé, pas de tirets cadratins à outrance, pas d'« explorer ». Je poserai des questions pertinentes et incisives qui les inciteront à examiner leurs présupposés et à définir ce qu'ils entendent réellement par « médiation » et « relation ». J'envisage différentes approches socratiques. La plus efficace serait peut-être de remettre en question l'idée que la médiation par l'IA soit un phénomène nouveau : nous filtrons déjà la réalité à travers le langage, la technologie et la culture. Mais commencer par une simple question de définition me semble plus clair : que signifie concrètement le terme « médiatisé » pour eux ? L'idéal serait de demander un exemple concret pour étayer cette abstraction. Je resterai simple et conversationnel, en français, avec une seule question sincère, sans fioritures, en me positionnant comme un auditeur curieux plutôt que comme un sceptique. Cette version me convient : une question unique et directe qui les place dans une position où chaque réponse ouvre la discussion sur la médiation et le rôle de l'IA.

La réponse de la machine est alors :

> Avant de te suivre dans cette idée, j'aimerais te poser une question préalable : ta relation au monde, en ce moment précis, pendant que tu lis cette phrase — est-elle immédiate, ou déjà médiatisée par quelque chose ?

Ce qui m'importe ici est la "réflexion" intermédiaire entre ma question et la réponse de la machine. Une partie de cette réflexion est puisée dans les instructions personnalisées (les 3 premières lignes). Ensuite, on peut constater une forme de raisonnement qui est fait par la machine sur la manière de répondre à ma question. Je vous laisse juger de la pertinence de ces éléments mais il me semble qu'ils sont en tous les cas intéressants dans le cadre d'un véritable contrôle humain. Cela permet à l'utilisateur d'identifier, de manière plus fine et précise, le "chemin" pris par la machine pour arriver à sa réponse.

L'objectif du protocole ici est de forcer la machine à expliquer son raisonnement, ou à tout le moins le détailler, indépendamment du mode choisi par l'utilisateur, en intégrant cette demande et ses modalités dans les instructions initiales. Cela permet alors à l'utilisateur d'identifier les éventuels biais de la réponse, les bifurcations prises par la machine et les moments où se situent de telles bifurcations. Dans une tâche complexe, cette description du chemin peut être bienvenue.

L'idée la plus simple, et déjà partiellement disponible dans les outils existants, consiste à solliciter qu'à côté du document produit la machine génère systématiquement le _chemin du raisonnement_ : les étapes prises, les hypothèses retenues, les sources mobilisées, les choix faits quand plusieurs voies étaient ouvertes. Ce chemin n'a pas vocation à remplacer la lecture du document. Il a pour objectif de donner à l'utilisateur des informations supplémentaires pour comprendre par où la machine est passée pour arriver au résultat. Avec un chemin de raisonnement systématique, la validation redevient un travail d'expertise : l'utilisateur peut bien mieux interroger les étapes, repérer les écarts, les erreurs ou vérifier les références.

##### Recommandations

Le protocole de vérification peut aussi servir l'utilisateur dans une boucle de rétroaction positive face au protocole de production. Dans ce cadre, ces recommandations prendraient la forme d'une liste d'éléments opérationnels à intégrer dans le protocole de production utilisé.

Cette liste devra nécessairement comporter des appels à l'action. La relecture et la vérification ne doivent pas être une opération ponctuelle. Elles pourraient être l'amorce d'un nouveau cycle de grammatisation. La vérification pourrait alimenter une _grammaire_ qui se précise au fil de la pratique. Dans ce cas, la machine pourrait proposer des améliorations ou pointer les zones de flou qui auraient été constatées. Ces recommandations sont des appels à l'action face aux carences qui seraient éprouvées dans le chemin de raisonnement décrit ci-dessus.

Cette situation pourrait se présenter dans le cas où la machine décide d'une voie plutôt qu'une autre sans justification convaincante ou suffisante. Cette situation pourrait être constatée lorsque le cadrage initial ou l'objectif est insuffisamment défini. Prenons un exemple : quand je constate qu'un système génératif décide d'aller dans une direction inopportune ou prend une hypothèse inadéquate lorsque plusieurs hypothèses existaient, la relecture ne devrait pas s'arrêter à corriger le document produit en l'adaptant avec la bonne hypothèse. Le protocole de vérification devrait pouvoir recommander de formaliser des critères de sélection de manière plus précise selon les circonstances et que, finalement, cette consigne soit incorporée dans le protocole pour les productions suivantes. À défaut de le faire, je vais corriger la même erreur la semaine prochaine, et celle d'après, et l'erreur ne sera jamais éliminée à la racine. Je crois que la vérification sans appel à l'action est une vérification qui se condamne à recommencer.

### Les conséquences des protocoles

Cette bascule du mot d'ordre vers le protocole change beaucoup de choses. J'en développe cinq.

#### Temporalité

D'abord, elle inverse la temporalité du contrôle initial. Le _human in the loop_ fonctionne généralement en aval. La mise en place d'un double protocole fait remonter le contrôle en amont (par la grammatisation préalable des consignes) et l'étend en boucle (par la mise à jour des paramètres après chaque vérification).

Il y a donc plusieurs points de contrôle dans la "chaine de production". Cette démultiplication des points de contrôle est de nature à améliorer ce contrôle car les points de contrôle sont situés à des moments "clés" et différents de la production.

#### Responsabilité

Ensuite, cette bascule fixe la responsabilité. Tant qu'on parle d'_humain dans la boucle_, on parle d'une figure abstraite dont on ne sait jamais si elle existe vraiment. J'exagère évidemment mais la mise en place de protocole de production et de vérification permet de situer plus simplement le _qui_ et de permettre à celui qui doit contrôler et superviser de le faire d'une manière encadrée.

Cette manière de procéder est aussi importante pour éviter un contrôle à géométrie variable. D'une certaine manière, la mise en place de protocoles tels que décrits ci-dessus "automatise" non pas le contrôle mais sa prise en charge. Si le contrôle et la supervision sont laissés à la bonne volonté de l'utilisateur, il y a des risques qu'ils soient réalisés de façon plus aléatoire ou moins précisément.

Prendre le temps de créer son protocole de production est aussi une manière d'empêcher la dépossession de notre [capacité opératoire](/glossaire/termes/depossession-operatoire/) comme je l'exposais [ici](https://reflexions.florianernotte.be/post/depossession-operatoire/) qui peut être considéré comme forme de responsabilisation dans sa pratique.

#### Personnaliser

De plus, la mise en place de protocoles pour la production permet aussi de résister à l'uniformisation et à la standardisation des productions. Si nous utilisons toutes et tous les mêmes logiciels, et soyons francs le choix de modèles de langage n'est pas abondant, nous allons vers une uniformisation du contenu généré en raison du fonctionnement des machines et de leur nature statistique probabiliste. Grammatiser c'est donc aussi un remède à la standardisation qui peut intervenir en utilisant ces machines.

#### Rationaliser

En outre, et c'est le point que je n'avais pas vu en réfléchissant à cette proposition, cette bascule rationalise le coût du contrôle. De prime abord, on pourrait considérer que le protocole de vérification charge la machine et l'utilisateur d'un travail supplémentaire (produire le chemin de raisonnement et lire ce chemin, en plus de relire le document sans guidance). Instinctivement, on pourrait considérer que la relecture d'un travail supplémentaire est une charge supplémentaire. C'est vrai dans le paradigme de la validation déguisée. Si par contre, le contrôle humain est effectivement mis en place, la production d'un chemin de raisonnement pourrait rationaliser la relecture du contenu et permettrait d'identifier de façon plus précise les zones à risques. La machine ne va pas pointer expressément ses erreurs mais va donner au lecteur un chemin de lecture qui n'existe pas sans ce protocole de vérification. On parvient alors à orienter sa vérification à l'aune des éléments ciblés dans le chemin de raisonnement.

#### Consommer

Enfin, et c'est un élément important à prendre en compte, ces protocoles sont consommateurs de tokens. L'IA va générer une sortie plus longue que celle qu'elle aurait pu générer. C'est donc une méthodologie à mettre en place pour un certain niveau de complexité et où un niveau d'exigence est attendu.

### Ce qui pourrait manquer

Je ne suis pas naïf. Je suis conscient des failles de mes propositions et j'en liste quelques-unes dès à présent pour vous permettre d'y penser (et heureux de lire vos suggestions pour tenter d'y remédier)

#### Déficience d'exécution

Premier point intrinsèque à la machine, l'exécution des protocoles peut être déficiente. Nous n'avons, à ce jour et à ma connaissance, aucune maitrise sur la manière dont le modèle de langage va exécuter les protocoles dans les outils "grands publics". Dans certaines configurations, assez techniques, on peut régler la température du modèle, la longueur des sorties générées, et d'autres éléments.

Par ailleurs, en raison de la nature non déterministe de ces machines, les sorties qui seront générées sur l'essai 1 seront différentes de celles générées sur l'essai 2, etc..

Dans la grande majorité des cas, ces éléments sont hors de portée des utilisateurs mais je dois le signaler.

#### Inapplication

Il ne s'agit pas d'une solution imparable et la mise en place d'un protocole de vérification visant à générer un chemin de raisonnement pourrait aussi être ignorée par l'utilisateur. En ce sens, les protocoles, comme les chartes IA ou les lignes directrices, peuvent devenir des "artefacts" de conformité. On peut très bien rédiger un protocole de vérification qui ne sera jamais appliqué. La discipline du contrôle n'est pas dans le document mais bien dans son usage. Aucun dispositif ne peut garantir que la discipline "humaine" aura lieu. Ce que le protocole peut faire, c'est d'offrir un cadre, ce qui dans le paradigme actuel est loin d'être le cas.

#### Chemin déguisé

Je reprends ici la métaphore du déguisement utilisée ci-dessus pour mentionner que le chemin de raisonnement, tel que je l'évoque, suppose une coopération des fournisseurs de modèles, qui est loin d'être acquise. Demander à un modèle de tracer son raisonnement suppose qu'il puisse le tracer, et qu'il a un intérêt à le faire. Les modèles génératifs actuels produisent des justifications _post hoc_ qui ne reflètent pas nécessairement le calcul effectivement réalisé et qui sont limités par des instructions système (system prompt) dont l'utilisateur n'a pas ou peu de prise. Le chemin peut être, lui aussi, une fiction. Cela ne disqualifie pas l'idée, mais cela mérite de prendre avec prudence le contenu généré.

#### Exigence

Le dernier point est que ces protocoles supposent un utilisateur exigeant : à la fois capable de décomposer sa pratique en séquence atomique pour formaliser des critères de production et de se tenir à une discipline de vérification. La machine et ses cadences tendent, malheureusement, à neutraliser ce type d'utilisateur. Nous vivons dans une société où nous recherchons l'efficacité absolue dans toute chose selon Jacques Ellul. Je partage ce point de vue et ces protocoles nous semblent être un retour en arrière. Mais la pratique de délégation systématique a pour conséquence de baisser notre niveau d'exigence, de nous faire réaliser des validations déguisées et finalement de [faire sans savoir](https://reflexions.florianernotte.be/post/depossession-operatoire/).

Il y a ici un cercle presque vicieux dont je ne sais pas comment sortir : le protocole exige une expertise que l'utilisation normale de la machine altère. Une partie de la réponse se trouve peut-être dans l'observation, au sens où je la décris dans [Grammatiser et observer](https://reflexions.florianernotte.be/post/grammatiser-observer/) : tracer sa propre frontière, savoir où l'on cesse de pouvoir vérifier, et ne déléguer que de ce côté-là de la limite tracée.

Ce cercle se dédouble quand on pense au chemin de raisonnement. Un chemin ne dispense pas de la lecture. Au lieu de relire le document à l'aveugle, l'utilisateur lit en sachant où regarder : quelles hypothèses ont été posées sans vérification, quelles citations sont paraphrasées, quels choix ont été faits aux bifurcations. C'est un changement de régime de la validation. Elle suppose un lecteur capable de lire et comprendre le chemin, c'est-à-dire un lecteur déjà expert. Sans cette expertise, le chemin devient lui-même abscons. Le protocole ne crée pas l'expertise, il la suppose, et il lui permet de se mobiliser différemment.

### Pour conclure

S'il faut retenir quelque chose de cette réflexion, c'est que la formule _human in the loop_ est creuse parce qu'elle ne dit pas ce qu'on fait dans cette boucle. Tant qu'on ne le dit pas, on ne fait rien de précis. C'est une manière de se rassurer. Si l'on veut que la supervision humaine ait un sens, il faut la formaliser de manière précise et concrète.

Alors j'aurais aussi pu proposer un modèle, ou un exemple pratique. Je ne le ferai pas car d'abord, je pense que cet exercice doit être réalisé par soi-même, notamment pour développer cette compétence. Ensuite, je pense que l'idée de cette réflexion est de vous faire aller sur le chemin (non pas du raisonnement) mais de l'itération. Nous sommes face à une machine qui évolue constamment et dont il faut s'approprier le fonctionnement. Ce n'est pas un travail "one-shot" ou "fit-for-all". C'est une configuration systématique à l'échelle de pratiques réelles et individuelles. Je n'ai pas la prétention que ces protocoles ici soient les bons. Si vous êtes en manque d'inspiration, copiez le texte dans une IA et demandez-lui de vous proposer quelque chose.

Ces protocoles sont, sans aucun doute, une approximation, un début de solution. Cependant, il vaut sûrement mieux une approximation discutable à une formule indiscutable parce que vide et creuse. Maintenant que le cadre est posé, les discussions sur les seuils, sur les critères, sur les appels à l'action correctifs, peuvent commencer.

{{< newsletter >}}
