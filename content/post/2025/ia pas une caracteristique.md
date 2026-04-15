--- 
title: L’ia n’est pas une caractéristique produit
date: 2025-04-27
description: Comprendre l'usage des LLMs pour en extraire la valeur
tags:
- numerique
- dualite
- ia
tldr: L'IA générative ne doit pas être une simple couche ajoutée à des logiciels existants. Il faut repenser nos outils autour de l'IA, comprendre ses vrais usages (génération contextuelle, pas automatisation répétitive) et personnaliser son fonctionnement, notamment via le _system prompt_, pour en tirer une vraie valeur.

---

J'ai vu passé récemment sur [HN](https://news.ycombinator.com/), un essai intitulé [AI Horseless Carriages](https://koomen.dev/essays/horseless-carriages/) de Pete Koomen. 
Dans cet essai, l'auteur explique pourquoi l’intégration de l’IA générative dans des produits existants ne fonctionne pas. 

Depuis la démocratisation des LLMs, la première tentation est de les intégrer dans des logiciels de notre quotidien. On va ajouter un LLMs dans nos applications mails pour nous aider à rédiger un contenu ou dans notre logiciel de gestion de documents pour résumer ceux-ci. On ajoute le LLMs comme une couche supplémentaire dans nos outils. Un bouton « IA » dans nos apps pour une « production augmentée » sans penser plus loin aux fonctionnalités. On le voit dans Gmail (selon l'exemple de Koomen), dans la suite Office 365, dans les logiciels d’édition de contenus, sur les réseaux sociaux ou dans les applications de messageries ([Whatsapp](https://www.techradar.com/computing/websites-apps/whatsapp-says-forcing-blue-meta-ai-circle-on-everyone-is-a-good-thing-despite-fierce-backlash)). De l’IA partout pour « enrichir » ses contenus et déléguer aux LLMs la rédaction. Passer l’effet "wow" des premières minutes d’utilisation, on se rend vite compte de la médiocrité des résultats générés par ces LLMs.   

Cette approche d’intégration n’est pas la meilleure car l’IA ne doit pas être considérée comme une option d’un « produit ». Ce n’est pas l’air conditionné ou la peinture métallisée d’une voiture. Il faut, je crois, adapter nos outils, nos méthodes, nos habitudes à l’IA et non l’inverse.   

Le problème n’est pas l'IA. Le problème, c'est notre incapacité à imaginer des logiciels pensés pour l'IA car l'ia générative opère une réelle transformation.

J'avais déjà écrit sur cet aspect [ici](https://reflexions.florianernotte.be/post/ia-transformation/) et je pense qu'il est fondamental de bien comprendre ce que fait l'ia générative et les LLMs pour ne pas être déçu du résultat. Certains pensent que l’ia génère des conneries. Cette réflécion résulte des intentions qu'on prête aux LLMs (voir ma note  [« ia générative de conneries »](https://reflexions.florianernotte.be/post/ia-generative-de-conneries/)). Il faut se garder des discours commerciaux et des promesses faites à tire larigot. Si vous voulez creuser le sujet, allez lire Ethan Mollick et plus particulièrement le concept de « Jagged Frontier » qu’il a développé [ici](https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged) et [là](https://www.hbs.edu/ris/Publication%20Files/24-013_d9b45b68-9e74-42d6-a1c6-c72fb70c7282.pdf).  

Aujourd'hui, j'ai l'impression que beaucoup de personnes utilisent les LLMs un peu comme le monsieur assis sur le capot de sa voiture ci-dessous. On ajoute un nouvelle couche sur quelque chose d'existant en espérant que ça fonctionne "mieux" ou pensant à des gains de productivité démentiels. On est dans une sorte de *«wishful thinking »*. Ca crée évidemment des déceptions. 

![image](https://florianernotte.be/wp-content/uploads/2025/04/1740129459950.jpg)  
[source](https://www.linkedin.com/posts/pieter-goetghebuer-57689714b_ik-had-afgelopen-donderdagavond-het-genoegen-activity-7299764580136681473-n634?utm_source=share&utm_medium=member_android&rcm=ACoAAB2e4NABnCG8gF81YstpRVm2CiVrM1_QXF4) 

Quand je dois expliquer ce que ne fait pas l'IA générative, je prends l'image d'un clou qu'on voudrait planter avec une scie. C'est techniquement possible mais ce n'est pas fait pour ça. On dit souvent qu’il ne faut pas utiliser les LLMs comme un moteur de recherche  car ce n’est pas fait pour ça. On est dans la même réflexion ici encore. 

Aussi, on lit souvent que les LLMs permettent d'automatiser des tâches répétitives. En fait, si vous voulez automatiser des tâches répétitives, le LLM n’est peut être pas la meilleure solution. Le séquençage de tâches existe depuis des années et on n'a pas attendu les LLMs pour utiliser des outils comme [Zapier](https://zapier.com/), [Make](https://www.make.com/en), ou [N8N](https://n8n.io/). C'est donc un peu réducteur de dire que l'ia générative permet d'automatiser des tâches répétitives (je me pose d'ailleurs toujours la question de savoir comment faire une automatisation dans une interface conversationnelle d’ailleur, mais c'est un autre sujet:)) et en plus, le résultat risque d'être décevant car l'IA générative est un outil qui génère du contenu et non des automatisations. 

Si vous avez lu jusque ici, vous devez vous dire *« ok, très bien mais on fait comment ? ».* 

Selon moi, le LLM est un outil de génération contextuelle : il faut que l’utilisateur personnalise son utilisation du LLM pour en tirer de la valeur et sortir des cadres génériques d’utilisation. Et c’est la que l’essai de Pete Koomen est génial car il illustre de manière concrète et pragmatique la manière de personnaliser le LLM en rappelant la distinction entre « system prompt » et « user prompt ». 

Le  « system prompt » c’est le cadre générique. L’ « user prompt » c’est l’entrée utilisateur, sa question, sa demande. 

Dans le cadre d’un agent conversationnel comme ChatGPT ou Claude Sonnet, le « system prompt » s’applique à l’ensemble des conversations. Aujourd’hui, les outils IA qui sont proposés en sur-couche des logiciels existants sont paramètrés de manière générique, d’une façon standard. Un peu comme si la radio de votre voiture n’avait qu’une seule fréquence FM. Ça va vous convenir un moment mais si vous êtes un féru de musique classique, vous allez vite couper votre radio si vous n’avez qu’une chaîne d’informations en continu disponible. 

La solution est donc d’aller personnaliser le « system prompt ». Si vous lisez le « system prompt » de [Claude Sonnet](https://docs.anthropic.com/en/release-notes/system-prompts#feb-24th-2025) vous comprendrez que les instructions données au système sont très générales et que ce niveau générique ne peut donner satisfaction à des usages spécifiques tels que ceux que nous intégrons dans nos pratiques professionnelles par exemple. 

Pour tirer profit de l’IA générative, il faut donc 1) s’accorder sur ce qu’elle est capable de faire et 2) personnaliser l’IA pour qu’elle « colle » à notre usage. 
