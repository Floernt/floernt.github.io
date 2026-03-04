---
title : cryptoreflexions8
date : 2024-05-23 
description : Entrée en vigueur de MICA
tags: cryptoreflexion
toc : false 
--- 
Le 6 mai 2024, un symposium sur le réglement européen Mica, la monnaie électronique et les paiements a été organisé par HEC-Paris dans le cadre de la [chaire Worldline](https://www.hec.edu/fr/faculte-et-recherche/worldline).

J’ai été invité à un panel de discussion composé de plusieurs autres personnes [voir ici sur le symposium](https://www.linkedin.com/feed/update/urn:li:activity:7193514487377743872/).

Le format du panel ne permet pas d’avoir une réflexion et un exposé détaillé aux questions posés, j’ai voulu consolider ma réflexion dans les lignes qui suivent.

Ces réflexions seront réparties en 3 textes dont le présent constitue le point de "lancement". 

# Mica 

## 1) Quel serait l'impact de l'entrée en vigueur d'une partie du règlement Mica?

Le règlement MICA va entrée en vigueur, pour les jetons de monnaies électroniques (ci-après JME) et les jetons se référant à un ou plusieurs actifs (ci-après JRA) en juin 2024. 

Concernant l'impact, on peut légitiment s'attendre à voir de nouveaux acteurs entrer sur le marché des JME et des JRA puisque MICA autorise les institutions financières à proposer des jetons ce type de jetons.  (a noter que les JME sont considérés comme de la monnaie électronique "traditionnelle" au sens du règlement). 

Pour l'émission de ces jetons, une procédure d'agrément préalable est nécessaire. Toutefois, les institutions financières, étant déjà réglementées sous l'empire d'autre législation, peuvent obtenir l'agrément via une procédure simplifiée. 

J'ai toujours considéré que cette "fast track" ouverte aux institutions financières traditionnelles permettrait  aux banques commerciales notamment, d'entrer plus facilement dans le monde des cryptoactifs. Jusqu'à ce jour, les banques étaient plus ou moins "crypto-friendly" et offraient quasi uniquement des services de rapatriement de fonds issus d'investissement crypto. Ces activités sont cependant peu lucratives pour les banques dans le cas où le client fait simplement transiter les fonds. 

Certaines banques ont franchi un cap, en proposant à leurs clients d'acheter des cryptoactifs et de les conserver pour le compte (i.e. Revolut). Plus récemment, en France ou en Suisse notamment, d'autres banques ont franchi le pas et ont décidé d'étendre leurs services en intégrant des services sur actifs numériques en obtenant le statut de PSAN/VASP (CASP dans MICA).

Grâce à la possibilité d'émettre des JME ou des JRA, les banques ajoutent une "ligne" à leur business plan et la possibilité de générer un chiffre d'affaire sur ces nouvelles activités en vue de  capter de la clientèle "crypto". 

L'impact à court terme est donc limité mais on peut, en jouant au futurologue, on peut s'attendre à une concurrence des JME où chaque banque commerciale viendrait émettre des JME et proposeraient des services spécifiques ou des promotions pour attirer une clientèle séduite par les cryptoactifs (i.e.: cashback, offre cumulée, bonus fidélités,...).
## 2) Quels sont les défis, les risques et les opportunités pour le secteur de la fintech et pour les régulateurs ?

### Les défis

La mise en œuvre de la surveillance des JRA est, à mon sens, un enjeu majeur qui aura des implications potentielles avec le droit à la vie privée notamment. 

En effet, MICA autorise l'émission de JRA sous certaines conditions, qui ne sont pas nécessairement "simples" à comprendre (au niveau des justifications annoncées) et à respecter. En outre, le règlement impose une limitation quant à l'émission de JRA lorsqu'un seuil est dépassé : si le volume moyen sur une journée dépasse 1 millions de transactions et que le volume moyen est supérieur à 200.000.000 € alors l'émetteur doit stopper l'émission et mettre en œuvre un plan pour repasser sous les seuils. 

Dans ce cadre, la première question qui se pose est d'identifier quelles transactions doivent être prises en compte dans le calcul de ces moyennes. 

Intuitivement, on pourrait se dire qu'il faut prendre en compte l'ensembles des transactions réalisées. Mais non, le règlement prévoit des exceptions pour :  

- les transactions au sein d'une plateforme centralisée ;
- les transactions entre des portefeuille d'une même personne.

Pour cette dernière exception, on peut légitimement se poser la question de la mise en œuvre et de sa "praticabilité". 

Rappelons que la technologie utilisée permet de générer des adresses publiques et d'avoir des portefeuilles auto-hébergé. C'est l'un des avantages de cette technologie : avoir la capacité de détenir ses cryptoactifs sans devoir compter sur les services d'un tiers ou lui faire confiance.

Dans ce cadre, le pseudonymat est la règle.  Dès lors, pour qualifier les transactions à prendre en compte, il serait nécessaire d'obtenir l'identité de détenteur de toutes les adresses de portefeuilles. 

En effet, comment savoir si la transaction entre le portefeuille A et B doit être prise en compte ou pas?  Prenons le cas de Bob qui a un portefeuille "coffre" et un autre pour des transactions quotidiennes. Pour éviter des "incidents" ou des erreurs, Bob charge son portefeuille de transactions quotidiennes depuis son portefeuille "coffre". Pour ces deux portefeuilles, Bob ne fait confiance à aucun prestataire et utilise un portefeuille hors ligne pour son coffre et un portefeuille en ligne auto-hébergé pour ses transactions quotidiennes (i.e. [Rabby](https://rabby.io/)). 

Pour ces deux portefeuilles, personne ne connait l'identité de Bob. Les transactions de JRA entre les portefeuilles de Bob devraient donc tomber donc dans les transactions à prendre en compte, faute d'information d'identification. Or, le règlement prévoit qu'elle devrait être exclu des moyennes....

Avec ce "simple" (mais long :)) exemple, on se rend bien compte des difficultés des émetteurs des JRA à se conformer aux exigences du règlement et il y a fort à parier que les régulateurs n'adopteront pas une attitude compréhensive et tolérante sur ces éléments. 

Cette problématique d'identification est également présente pour les portefeuilles "multi-su-sig". Devrons-nous tenir compte des transactions en le portefeuille de Bob et un portefeuille "multi-sig" de Bob? 

Lors du panel, j'ai soulevé une partie de ces problématiques et Rok Zvelc, fonctionnaire à la Commission Européenne, très actif sur ces sujets, n'a malheureusement pas su calmer mes inquiétudes...
### Les risques

Aujourd'hui, le règlement impose des limitations sur les JRA, par exemple.

Ces limitations sont un frein au développement des projets de Fintech car les seuils étant très bas, le potentiel d'utilisation est par conséquent restreint. Quand on compare les volume actuel d'échange de *stablecoin* et les limites imposées, on peut légitiment se poser la question de l'opportunité commerciale de lancer un JRA. 

1.000.000 de transactions journalière avec un volume maximum de 200.000.000 € représente un montant moyen/transaction de 200 €... 

La population européenne représente près de 800 millions de personnes selon le dernier recensement de 2018. Les dernières enquêtes chiffrent à +/-10% le nombre de personnes qui utilise la crypto donc 8.000.000 utilisateurs. 

On voit donc le caractère tout à fait limitatif des seuils imposés. Comment lancer un JRA qui ne pourra être utilisé que par une partie du marché pour 200 €/jour... 

En outre, une grande partie des restrictions sont justifiées par la protection des consommateurs.  Cependant, et bien malheureusement,  la réflexion est biaisée et manque d'objectivité sur ces sujets. 

Aujourd'hui les banques commerciales sont couvertes par une garantie d'état à concurrence de 100 000 €. Dans le cadre de ce mécanisme de garantie, on institutionnalise et "légalise" une forme d'inexécution des obligations contractuelles des banques. En somme, "Rassurez-vous mes braves concitoyens, si votre banque fait faillite et ne sais pas vous rembourser, vos dépôts sont couvertes à concurrence d'un plafond de 100 000 €. "

Cette situation est assez étonnante si on la considère sous le prisme de la protection du consommateur. On impose (car on décourage ou interdit l'utilisation d'autres services) aux consommateurs de placer leurs fonds au sein des institutions bancaires qui sont sujettes à des défaillances et dont la garantie est plafonnée à un montant de 100 000 €.

### Les opportunités

Pour la fintech, le secteur pourrait proposer des solutions bien plus en phase avec les intérêts des consommateurs. En utilisant des plateformes et des protocoles décentralisés, les défaillances et une inexécution d'obligation sont limités voir inexistantes.  

En outre, l'ensemble des procédés sont auditables et transparents et l'utilisateur a la possibilité de mitiger son risque en dispersant ces fonds au sein des différents protocoles. 

On pourrait d'ailleurs très bien considérer l'émission d'un jeton synthétique ayant pour sous-jacent des jetons de monnaie électronique centralisée qui permettra à un utilisateur crypto de limité son risque de contrepartie et des défaillances d'émetteur de JRA (DAI, EURA...)ou de JME (USDT,UDSC, ...). 

Au lieu d'avoir 100 USDT, l'utilisateur pourra avoir 100 jetons synthétiques ayant pour collatéral 25 USDT, 25 USDC et 50 DAI.

Les acteurs de la fintech seraient alors des développeurs d'interface graphique, "user friendly" qui permettra à chaque utilisateurs d'utiliser une panoplie de *smart contract* disponible dans le monde de la vraie *DeFi*.

Les enjeux régulatoires à ce sujet seront intéressants à suivre. 

Va-t-on tomber dans l'absurdité de [la décision relative au développeur de Tornado Cash](https://www.coindesk.com/fr/policy/2024/05/16/crypto-community-voices-outrage-at-tornado-cash-developer-verdict/) ? 

Affaire à suivre! 

---

> Pour aller plus loin : [cryptomonnaie.be](https://cryptomonnaie.be/) — Le blog de la cryptomonnaie en Belgique | [Newsletter CryptoBelgique](https://cryptobelgique.substack.com/) — Restez informé des actualités et nouveautés
