---
title: CryptoReflexions#8 - MiCA & payments
slug: crypto-report-8
date : 2024-05-23 
description : Entry into force of MiCA
tags: cryptoreflexion
toc : false 
--- 
On May 6, 2024, a symposium on the European MiCA regulation, electronic money, and payments was organized by HEC-Paris as part of the [Worldline chair](https://www.hec.edu/fr/faculte-et-recherche/worldline).

I was invited to a panel discussion composed of several other people [see here about the symposium](https://www.linkedin.com/feed/update/urn:li:activity:7193514487377743872/).

The panel format does not allow for detailed reflection and exposition on the questions asked, so I wanted to consolidate my thoughts in the lines that follow.

These reflections will be spread across 3 texts, of which this one is the "launch" point.

# MiCA

## 1) What would be the impact of the entry into force of part of the MiCA regulation?

The MiCA regulation will come into force for electronic money tokens (hereinafter EMTs) and asset-referenced tokens (hereinafter ARTs) in June 2024.

Regarding the impact, we can legitimately expect to see new players enter the EMT and ART market since MiCA authorizes financial institutions to offer this type of tokens. (Note that EMTs are considered "traditional" electronic money under the regulation.)

For the issuance of these tokens, a prior authorization procedure is required. However, financial institutions, being already regulated under other legislation, can obtain authorization via a simplified procedure.

I have always considered that this "fast track" open to traditional financial institutions would allow commercial banks in particular to more easily enter the crypto-asset world. Until now, banks were more or less "crypto-friendly" and offered almost exclusively fund repatriation services from crypto investments. However, these activities are not very lucrative for banks when the client simply transfers funds through.

Some banks have taken a step further by offering their clients the ability to buy crypto-assets and hold them on their behalf (e.g., Revolut). More recently, in France and Switzerland notably, other banks have taken the plunge and decided to expand their services by integrating digital asset services by obtaining PSAN/VASP status (CASP under MiCA).

Thanks to the ability to issue EMTs or ARTs, banks add a "line" to their business plan and the ability to generate revenue from these new activities to capture "crypto" clientele.

The short-term impact is therefore limited but, playing futurologist, we can expect competition among EMTs where each commercial bank would issue EMTs and offer specific services or promotions to attract clients drawn to crypto-assets (e.g., cashback, bundled offers, loyalty bonuses,...).

## 2) What are the challenges, risks, and opportunities for the fintech sector and for regulators?

### Challenges

The implementation of ART surveillance is, in my opinion, a major issue that will have potential implications for the right to privacy in particular.

Indeed, MiCA authorizes the issuance of ARTs under certain conditions, which are not necessarily "simple" to understand (in terms of the stated justifications) and to comply with. Furthermore, the regulation imposes a limitation on ART issuance when a threshold is exceeded: if the average daily volume exceeds 1 million transactions and the average volume is greater than EUR 200,000,000, then the issuer must stop issuance and implement a plan to get back below the thresholds.

In this context, the first question that arises is identifying which transactions should be taken into account in calculating these averages.

Intuitively, one might think that all transactions should be taken into account. But no, the regulation provides exceptions for:

- transactions within a centralized platform;
- transactions between wallets of the same person.

For this latter exception, one can legitimately question its implementation and "practicability."

Let us recall that the technology used allows the generation of public addresses and the holding of self-hosted wallets. This is one of the advantages of this technology: having the ability to hold your crypto-assets without relying on the services of a third party or trusting them.

In this context, pseudonymity is the rule. Therefore, to qualify the transactions to be taken into account, it would be necessary to obtain the identity of the holder of all wallet addresses.

Indeed, how do you know whether the transaction between wallet A and B should be taken into account or not? Take the case of Bob who has a "vault" wallet and another for daily transactions. To avoid "incidents" or errors, Bob loads his daily transaction wallet from his "vault" wallet. For both wallets, Bob trusts no service provider and uses an offline wallet for his vault and a self-hosted online wallet for his daily transactions (e.g., [Rabby](https://rabby.io/)).

For these two wallets, nobody knows Bob's identity. ART transactions between Bob's wallets should therefore fall into the transactions to be taken into account, for lack of identifying information. However, the regulation provides that they should be excluded from the averages...

With this "simple" (but lengthy :)) example, we can clearly see the difficulties for ART issuers to comply with the regulation's requirements, and it is very likely that regulators will not adopt an understanding and tolerant attitude on these elements.

This identification issue is also present for "multi-sig" wallets. Should we take into account transactions between Bob's wallet and a "multi-sig" wallet belonging to Bob?

During the panel, I raised some of these issues and Rok Zvelc, an official at the European Commission who is very active on these topics, unfortunately could not calm my concerns...

### Risks

Today, the regulation imposes limitations on ARTs, for example.

These limitations are a brake on the development of Fintech projects because the thresholds are very low, and the potential for use is consequently restricted. When comparing the current volume of stablecoin trading and the imposed limits, one can legitimately question the commercial opportunity of launching an ART.

1,000,000 daily transactions with a maximum volume of EUR 200,000,000 represents an average amount per transaction of EUR 200...

The European population represents nearly 800 million people according to the last census of 2018. The latest surveys estimate at +/-10% the number of people who use crypto, so 8,000,000 users.

We can therefore see the highly restrictive nature of the imposed thresholds. How do you launch an ART that can only be used by a portion of the market for EUR 200/day...

Furthermore, a large part of the restrictions are justified by consumer protection. However, unfortunately, the thinking is biased and lacks objectivity on these subjects.

Today, commercial banks are covered by a state guarantee up to EUR 100,000. Under this guarantee mechanism, a form of non-performance of the banks' contractual obligations is institutionalized and "legalized." In short, "Rest assured, my dear citizens, if your bank goes bankrupt and cannot reimburse you, your deposits are covered up to a ceiling of EUR 100,000."

This situation is quite surprising when viewed through the lens of consumer protection. Consumers are required (because the use of other services is discouraged or prohibited) to place their funds in banking institutions that are subject to failures and whose guarantee is capped at EUR 100,000.

### Opportunities

For fintech, the sector could offer solutions much more aligned with consumer interests. By using decentralized platforms and protocols, failures and non-performance of obligations are limited or even non-existent.

Furthermore, all processes are auditable and transparent, and the user has the ability to mitigate their risk by dispersing their funds across different protocols.

One could moreover very well consider the issuance of a synthetic token backed by centralized electronic money tokens that would allow a crypto user to limit their counterparty risk and the risk of ART issuer failures (DAI, EURA...) or EMT failures (USDT, USDC, ...).

Instead of having 100 USDT, the user could have 100 synthetic tokens backed by 25 USDT, 25 USDC, and 50 DAI.

Fintech players would then be developers of graphical, "user friendly" interfaces that would allow each user to use a range of _smart contracts_ available in the world of true _DeFi_.

The regulatory stakes on this subject will be interesting to follow.

Will we fall into the absurdity of [the decision regarding the Tornado Cash developer](https://www.coindesk.com/fr/policy/2024/05/16/crypto-community-voices-outrage-at-tornado-cash-developer-verdict/)?

To be continued!

---

> To go further: [cryptomonnaie.be](https://cryptomonnaie.be/) — The Belgian cryptocurrency blog | [Newsletter CryptoBelgique](https://cryptobelgique.substack.com/) — Stay informed of news and updates
