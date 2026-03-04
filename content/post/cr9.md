---
title : cryptoreflexions9
date : 2024-09-01 
description : Les maladies de la blockchain et le réglement UE sur les paiements instantanées
tags: cryptoreflexion
toc : false 
--- 
Bonjour à tous,

Voici la 2e partie de mes réflexions à la suite du symposium du 6 mai 2024, consacré au règlement européen MICA, à la monnaie électronique et aux paiements, organisé par HEC-Paris dans le cadre de la [chaire Worldline](https://www.hec.edu/fr/faculte-et-recherche/worldline).

J’ai été invité à un panel de discussion composé de plusieurs autres personnes [voir ici sur le symposium](https://www.linkedin.com/feed/update/urn:li:activity:7193514487377743872/).

Interessé(e)?

Lets’go !

[Retrouvez la 1ère partie ici](https://cryptobelgique.substack.com/p/cryptoreflexions8-mica-and-paiements)

---

## Un problème de mise à l'échelle ?

Deuxième article de réflexions à la suite des discussions que j'ai pu avoir lors du symposium. Lors de celui-ci, une remarque portait sur les difficultés à traiter des transactions à grande échelle au sein des registres distribués.

Le nombre de [transactions en stablecoins](https://visaonchainanalytics.com/transactions) est souvent comparé au nombre de transactions bancaires ou réalisées par cartes de crédit (à titre d'illustration, Visa annonce traiter [[269.8 milliards de transactions annuellement](https://www.visa.fr/content/dam/VCOM/global/about-visa/documents/visanet-factsheet.pdf)]. Forts de ces comparaisons, les détracteurs des crypto-actifs constatent avec plaisir que les promesses qu'un réseau de paiement pair-à-pair puisse remplacer le système actuel sont loin d'être réalisées.

Ces comparaisons sont maladroites et ne me semblent pas pertinentes. D'abord parce qu'il n'existe pas, à ma connaissance, d'études sérieuses et complètes permettant d'identifier correctement l'ensemble des flux. Et si nous examinons les données des études disponibles, on se rend compte de leur défaillance.

Dans l'outil proposé de comparaison mentionné ci-dessus, les valeurs sont "ajustées".

Les explications de l'ajustement de ces valeurs sont exposées succinctement en ces termes:

> This adjusted metric aims to remove potential distortions that can arise from inorganic activity and other artificial inflationary practices, and employs the following key filters:
> 
> 1. Single directional volume filter: only the largest stablecoin amount transferred within a single transaction is counted. This removes the redundant internal transactions of a complex smart contract interaction.
> 
> …
> 
> 3. Inorganic user filter:only transactions that have been sent by an account that has initiated less than 1000 stablecoin transactions and $10m in transfer volume (over last 30 days) are counted. This removes various bot activity as well as automatic transactions from large entities like centralized exchanges.

Reconnaissons le caractère arbitraire (voire même absurde!) de ces critères . Exclure des transactions unidirectionnelles au prétexte de devoir supprimer les transactions internes "d'interaction complexes de _smart contract_ " et les "petites transactions" (soit celle sur des compte ayant initié moins de 1000 transactions en _stablecoins_ et un volume de transfert de 10 millions de dollars) est méconnaitre l'intérêt de la monnaie programmable et biaise de manière évidente toute comparaison objective.

A suivre ce raisonnement, l'auteur qui utiliserait un _smart contract_ pour capter ses royalties sur la transmission de ses œuvres pourrait recevoir des centaines de paiements mais l'outil viendrait à considérer que seule une transaction devrait être prise en compte? Ca n'a pas de sens ! ou plutôt quel est l'intérêt d'une telle analyse expurgée de ce type de données?

C'est un peu comme si on voulait calculer le volume d'échange en euros en excluant les paiements cash et intra-banques. L'objectivité des résultats est proche de zéro et on devrait même se demander à quoi sert pareil calcul si ce n'est pour se gargariser de la qualité du modèle traditionnel et de la _tradfi_.

Afin de comparer les choses, il faudrait que les éléments essentiels de la comparaison soient équivalents.

Par exemple, est-ce pertinent de comparer la vitesse d'un vélo et d'une moto?

Est-ce donc pertinent de comparer le nombre de transactions qu'un opérateur centralisé peut réaliser par rapport au nombre de transactions qu'un réseau décentralisé et pair-à-pair peut réaliser ?

Les objectifs affichés de l'un et l'autre ne sont pas la même et les éventuelles carences du modèle sont intégrées par ses utilisateurs qui "acceptent" quelques limitations. En contrepartie, ils retrouvent des avantages qu'ils n'ont pas dans le secteur bancaire & financier traditionnel.

Mais ne nous arrêtons pas là, la technologie évolue et les solutions de 2e couches, par exemple, apportent une (partie de la) réponse aux problèmes de mise à l'échelle.

Sur le sujet, il n'est pas inintéressant de s'approprier les concepts relatifs au trilemme de la blockchain qui permettrait, probablement d'avoir une comparaison plus pertinente ou à tout le moins une compréhension plus complète du problème.

Pour ceux qui connaissent le trilemme, on pourrait placer le curseur sur la mise à l'échelle (scalability) pour augmenter le nombres de transactions possible au sein de la chaîne mais cela se fera au détriment de la sécurité et/ou de la décentralisation. Les chaines de Binance ou de Solana peuvent traiter beaucoup plus de transactions que Bitcoin ou Ethereum mais leur fonctionnement laisse à désirer (Sur Solana, 11 "pannes" ont été constatées entre 2022 et 2024 ([voir ici sur le sujet](https://fr.cointelegraph.com/news/solana-network-outage-block-production-halted)]).

## La blockchain ne peut traiter des paiements à grande échelle

Conséquence de cette vision comparative biaisée, certains discours politiques et académiques ont tendances à considérer les crypto-actifs comme une technologie qui ne permettra pas de remplacer le système actuel. J'ai le sentiment qu'on se retrouve face à un double discours qui, pour nos autorités, est bien peu glorieux.

En effet, si l'on considère l'incapacité de mise à l'échelle pour une blockchain publique, on doit raisonnablement constater l'inutilité '(et donc l'absurdité) des monnaies de banques centrales qui sont en projets depuis maintenant plusieurs années.

Si la technologie ne permet pas une mise à l'échelle des transactions pourquoi plusieurs banques centrales étudient ce sujet en présentant les MNBC comme une "alternative" aux _stablecoins_ ?

Dans son rapport sur l'euro digital d'octobre 2020, la BCE mentionne que:

> L'infrastructure sous-jacente pour la fourniture d'un euro numérique peut
> 
> soit être centralisée, toutes les transactions étant enregistrées dans le grand livre de la banque centrale, soit comporter une certaine décentralisation des responsabilités vers les utilisateurs et/ou les supervisés, ce qui permet également la fourniture d'un euro numérique au porteur.
> 
> Quelle que soit l'approche retenue, l'infrastructure de base doit être contrôlée en dernier ressort par la banque centrale. (page 36 - [[Report on a digital euro - October 2020](https://www.ecb.europa.eu/pub/pdf/other/Report_on_a_digital_euro~4d7268b458.fr.pdf)].

Donc utile ou pas utile? La BCE ne semble pas bien savoir sur quel pied danser.

Deux considérations :

- Les MNBC seraient une réponse marketing à l'adoption des cryptos. Les autorités, pour ne pas perdre la face et surfer sur la "hype", annoncent travailler sur un projet qui "pourrait" utiliser la technologie des registres distribués.

- Faire des MNBC sur une blockchain privée n'a qu'un intérêt limité (voir nul) pour l'utilisateur. Cette mise à jour pourrait être salutaire pour l'infrastructure générale et permettrait une optimisation des coûts de fonctionnement (au détriment des prestataires actuels qui jouent les intermédiaires en se servant au passage d’une commission.)


> [!NOTE] Bank of Japan & CBDC
> L'approche de la Banque du Japon sur le sujet est intéressante. Des phases de tests ont été réalisées et analysées. Ci-dessous, quelques rapports intéressants: 
> 
> [The Bank of Japan's Approach to Central Bank Digital Currency (October 2020)](https://www.boj.or.jp/en/about/release_2020/data/rel201009e1.pdf)
> [Central Bank Digital Currency Experiments Results and Findings from “Proof of Concept Phase 2” (May 2023)](https://www.boj.or.jp/en/paym/digital/dig230529a.pdf)
> [Central Bank Digital Currency Experiments Progress on the Pilot Program (April 2024)](https://www.boj.or.jp/en/paym/digital/dig240531a.pdf)


## Vers un euro digital tokenisé ?

Les banques centrales feraient donc mieux de réfléchir à utiliser les réseaux blockchain existants pour gagner en interopérabilité si elles veulent voir leur projet réussir "à grande échelle". A défaut, l'euro digital utilisera un pis-aller technologique et sera très certainement, un actif qui finira par être _tokénisé_ sur les chaines les plus utilisées.

Des jetons, ayant pour sous-jacent l'euro digital, seront émis par des acteurs fintech qui auront compris la technologie. On aura un euro digital/numérique tokénisé et la banque centrale verra ses euros numériques stockés dans un _smart contract_. Tout ça pour ça ? Avec beaucoup de cynisme, j'écrirai que nos régulateurs ne manqueront pas de venir empêcher tout cela…

Toujours par rapport à l'argument de l'incapacité de mise à l'échelle, il faut aussi constater que la réglementation UE (MICA) met en place une série de mesures pour limiter l'utilisation des _stablecoins_ (les ART) comme moyen de paiement à l'inverse des EMT (e-money token) qui n'ont pas de limitation (bizarrement, les EMT ne peuvent être émis que par des institutions financières (établissement de crédit ou en tant qu’établissement de monnaie électronique). Ces établissements sont généralement des banques ou des acteurs du système financier traditionnel, sous réserve des “_start-up”_ qui parviendraient à obtenir une licence pour émettre de la monnaie électronique : par ex. [[Circle](https://www.circle.com/en/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law)]) .

Cette attitude est incohérente avec le discours politique et semble traduire un véritable aveu de faiblesse de nos institutions à innover.

Au lieu de profiter de la vague technologique pour se remettre en question et réformer le système qui, soyons de bon compte, n'est pas à son apogée, les autorités empêchent le développement d'autres moyen d'échange par la réglementation tout en tenant un discours qui vise à minimiser les possibilités de cette technologie... Un grand écart qui doit être difficile à tenir :).

## Règlement UE sur les paiements instantanées : la solution à la rapidité et aux coûts des transactions

Si l'on met de côté les problèmes de mise à l'échelle des transactions, certains ont pointé la rapidité et le faible coûts des transactions en crypto-actif par rapport aux virements bancaires.

A titre de comparaison, une transaction sur la chaîne bitcoin met en moyenne 10 minutes à se propager au sein du réseau tandis qu'un virement bancaire dans la zone SEPA pouvait mettre plus de 24 heures à arriver à son destinataire (ce délai peut être raccourci en fonction du moment où la transaction est réalisée et de la banque du destinataire).

Le monde bancaire est bien conscient de ces "difficultés" qui sont, en fait, inhérentes à l'infrastructure utilisée (chambre de compensation avec registre centralisé).

Pour pallier à celles-ci, les virements instantanées ont fait leur apparition dans l'environnement bancaire et permettent, moyennant un supplément de frais, d'exécuter une transaction bancaire de manière instantanée.

En mars 2024, une étape supplémentaire a été franchie avec la publication d'un [[Règlement européen sur les virements instantanées en euros](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32024R0886)].

Parmi les dispositions reprises dans ce règlement, l'obligation pour les prestataires de services de paiement (ci-après PSP) de proposer des virements instantanées sur tous les comptes, 24h/24h et 7 jours sur 7 tout en limitant les frais de service.

Ces mesures imposées au PSP sont annoncées comme étant une mise à jour du projet SEPA (l’espace unique de paiements en euros).

Si cette réponse réglementaire est salutaire, elle reste limitée à la zone euro. Les fanfarons diront donc que les cryptos sont toujours plus efficaces pour les paiements internationaux.

Mais la réflexion sous-jacente est cependant bien plus fine car cette "réaction" vient trouver sa place, notamment, dans la comparaison des crypto vs. fiat.

Limiter les avantages des crypto-actifs à la rapidité des paiements est réducteur.

Les crypto actifs font bien d'autres choses. Une #cryptoreflexion sera peut être publié sur le sujet dans quelques temps. J’aime lire les réflexions de [Alexandre Stachtchenko](https://www.linkedin.com/in/alexandre-stachtchenko-27655655/?originalSubdomain=fr) ([ici](https://medium.com/@AlexStach/les-d%C3%A9rives-de-la-surveillance-financi%C3%A8re-menacent-nos-d%C3%A9mocraties-323fbdc1ccbf) et [là](https://medium.com/@AlexStach/manuel-de-survie-dans-la-jungle-des-poncifs-anti-bitcoin-version-longue-523e381745ff) par exemple) et vous invitent à la (re)découvrir en guise d’apéritif :) .

Par ailleurs, il ne faut pas tout jeter. Je ne suis pas de ces réac’ maximaliste qui veut la mort du fiat. La concurrence des monnaies n'est pas neuve et j’y suis assez favorable.

En 1976 déjà, l'économiste F. Hayek, dans son essai “[Pour une vraie concurrence des monnaies”](https://fr.wikipedia.org/wiki/Pour_une_vraie_concurrence_des_monnaies#:~:text=Hayek%20d%C3%A9fend%20un%20syst%C3%A8me%20de,la%20valeur%20dans%20le%20temps.) (dont je recommande chaudement la lecture !! ) avait considéré les conséquences d'une coexistence de monnaies émises par l'autorité publique et des entités publiques. Cette concurrence des monnaies permettrait aux utilisateurs d'abandonner une monnaie défaillante et de privilégier une monnaie efficace.

Une forme de darwinisme monétaire où la sélection se fait par le marché et ses utilisateurs et n'est plus dictée par les Etats et les banques centrales. Dis comme ça, ça me fait penser à quelques choses quand même :D !

Ce sera sur ces réflexions que je cloture cette édition tout en précisant que les notions de monnaies programmables et de concurrence des monnaies seront abordées, j’espère, dans l'une des prochaines éditions de ces crypto-réflexions (et dans pas trop longtemps surtout).

---

> Pour aller plus loin : [cryptomonnaie.be](https://cryptomonnaie.be/) — Le blog de la cryptomonnaie en Belgique | [Newsletter CryptoBelgique](https://cryptobelgique.substack.com/) — Restez informé des actualités et nouveautés
