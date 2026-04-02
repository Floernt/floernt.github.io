---
title: CryptoReflexions#9 - The diseases of blockchain and the EU regulation on instant payments
date : 2024-09-01 
description : The diseases of blockchain and the EU regulation on instant payments
tags: cryptoreflexion
toc : false 
--- 
Hello everyone,

Here is the 2nd part of my reflections following the symposium of May 6, 2024, devoted to the European MiCA regulation, electronic money, and payments, organized by HEC-Paris as part of the [Worldline chair](https://www.hec.edu/fr/faculte-et-recherche/worldline).

I was invited to a panel discussion composed of several other people [see here about the symposium](https://www.linkedin.com/feed/update/urn:li:activity:7193514487377743872/).

Interested?

Let's go!

[Find the 1st part here](https://cryptobelgique.substack.com/p/cryptoreflexions8-mica-and-paiements)

---

## A scaling problem?

Second article of reflections following the discussions I had during the symposium. During it, a remark concerned the difficulties of processing transactions at scale within distributed ledgers.

The number of [stablecoin transactions](https://visaonchainanalytics.com/transactions) is often compared to the number of banking transactions or those made by credit cards (for illustration purposes, Visa claims to process [269.8 billion transactions annually](https://www.visa.fr/content/dam/VCOM/global/about-visa/documents/visanet-factsheet.pdf)). Based on these comparisons, crypto-asset detractors note with pleasure that the promises that a peer-to-peer payment network could replace the current system are far from being realized.

These comparisons are clumsy and do not seem relevant to me. First because there are no serious and comprehensive studies, to my knowledge, that correctly identify all the flows. And if we examine the data from available studies, we realize their shortcomings.

In the comparison tool mentioned above, the values are "adjusted."

The explanations of the adjustment of these values are set out succinctly in these terms:

> This adjusted metric aims to remove potential distortions that can arise from inorganic activity and other artificial inflationary practices, and employs the following key filters:
> 
> 1. Single directional volume filter: only the largest stablecoin amount transferred within a single transaction is counted. This removes the redundant internal transactions of a complex smart contract interaction.
> 
> ...
> 
> 3. Inorganic user filter: only transactions that have been sent by an account that has initiated less than 1000 stablecoin transactions and $10m in transfer volume (over last 30 days) are counted. This removes various bot activity as well as automatic transactions from large entities like centralized exchanges.

Let us acknowledge the arbitrary (even absurd!) nature of these criteria. Excluding unidirectional transactions on the pretext of needing to remove the internal transactions of "complex _smart contract_ interactions" and "small transactions" (i.e., those on accounts having initiated fewer than 1,000 stablecoin transactions and a transfer volume of $10 million) is to misunderstand the interest of programmable money and obviously biases any objective comparison.

Following this reasoning, an author who would use a _smart contract_ to capture their royalties on the transmission of their works could receive hundreds of payments but the tool would consider that only one transaction should be taken into account? That makes no sense! Or rather, what is the point of such an analysis purged of this type of data?

It's a bit like wanting to calculate the volume of euro exchange while excluding cash payments and intra-bank transactions. The objectivity of the results is close to zero and one should even wonder what the purpose of such a calculation is if not to revel in the quality of the traditional model and of _tradfi_.

In order to compare things, the essential elements of the comparison would need to be equivalent.

For example, is it relevant to compare the speed of a bicycle and a motorcycle?

Is it therefore relevant to compare the number of transactions a centralized operator can process to the number of transactions a decentralized and peer-to-peer network can process?

The stated objectives of one and the other are not the same, and the potential shortcomings of the model are integrated by its users who "accept" some limitations. In return, they find advantages they do not have in the traditional banking & financial sector.

But let's not stop there, the technology is evolving and layer 2 solutions, for example, provide a (partial) answer to scaling problems.

On the subject, it is not uninteresting to familiarize oneself with the concepts related to the blockchain trilemma, which would probably allow for a more relevant comparison or at least a more complete understanding of the problem.

For those familiar with the trilemma, one could move the cursor toward scalability to increase the number of possible transactions within the chain, but this would come at the expense of security and/or decentralization. The Binance and Solana chains can process many more transactions than Bitcoin or Ethereum, but their operation leaves much to be desired (On Solana, 11 "outages" were noted between 2022 and 2024 ([see here on the subject](https://fr.cointelegraph.com/news/solana-network-outage-block-production-halted)]).

## Blockchain cannot handle large-scale payments

As a consequence of this biased comparative view, some political and academic discourse tends to consider crypto-assets as a technology that will not replace the current system. I have the feeling that we are facing a double standard that, for our authorities, is not very glorious.

Indeed, if we consider the inability to scale for a public blockchain, we must reasonably note the uselessness (and therefore the absurdity) of central bank digital currencies that have been in development for several years now.

If the technology does not allow for transaction scaling, why are several central banks studying this subject by presenting CBDCs as an "alternative" to _stablecoins_?

In its report on the digital euro from October 2020, the ECB mentions that:

> The underlying infrastructure for providing a digital euro can
> 
> be either centralized, with all transactions recorded in the central bank's ledger, or involve some decentralization of responsibilities to users and/or supervised entities, which also enables the provision of a bearer digital euro.
> 
> Whatever approach is taken, the core infrastructure must ultimately be controlled by the central bank. (page 36 - [Report on a digital euro - October 2020](https://www.ecb.europa.eu/pub/pdf/other/Report_on_a_digital_euro~4d7268b458.fr.pdf)).

So useful or not useful? The ECB does not seem to know which foot to dance on.

Two considerations:

- CBDCs would be a marketing response to crypto adoption. The authorities, to save face and ride the "hype," announce they are working on a project that "could" use distributed ledger technology.

- Making CBDCs on a private blockchain has only limited (if any) interest for the user. This upgrade could be beneficial for the general infrastructure and would allow optimization of operating costs (at the expense of current providers who act as intermediaries while taking a commission along the way.)


> [!NOTE] Bank of Japan & CBDC
> The Bank of Japan's approach to this subject is interesting. Testing phases have been carried out and analyzed. Below, some interesting reports:
> 
> [The Bank of Japan's Approach to Central Bank Digital Currency (October 2020)](https://www.boj.or.jp/en/about/release_2020/data/rel201009e1.pdf)
> [Central Bank Digital Currency Experiments Results and Findings from "Proof of Concept Phase 2" (May 2023)](https://www.boj.or.jp/en/paym/digital/dig230529a.pdf)
> [Central Bank Digital Currency Experiments Progress on the Pilot Program (April 2024)](https://www.boj.or.jp/en/paym/digital/dig240531a.pdf)


## Toward a tokenized digital euro?

Central banks would therefore do better to think about using existing blockchain networks to gain interoperability if they want to see their project succeed "at scale." Otherwise, the digital euro will use a technological stopgap and will very likely be an asset that ends up being _tokenized_ on the most used chains.

Tokens backed by the digital euro will be issued by fintech players who will have understood the technology. We will have a tokenized digital euro and the central bank will see its digital euros stored in a _smart contract_. All that for this? With a lot of cynicism, I would write that our regulators will certainly come to prevent all of this...

Still regarding the argument about the inability to scale, it should also be noted that EU regulation (MiCA) puts in place a series of measures to limit the use of _stablecoins_ (ARTs) as a means of payment, unlike EMTs (e-money tokens) which have no limitations (curiously, EMTs can only be issued by financial institutions (credit institutions or as electronic money institutions). These institutions are generally banks or players in the traditional financial system, subject to "start-ups" that manage to obtain a license to issue electronic money: e.g., [Circle](https://www.circle.com/en/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law)).

This attitude is inconsistent with political discourse and seems to reflect a genuine admission of weakness by our institutions to innovate.

Instead of taking advantage of the technological wave to question themselves and reform the system which, let us be fair, is not at its peak, the authorities prevent the development of other means of exchange through regulation while holding a discourse that aims to minimize the possibilities of this technology... A difficult balancing act to maintain :).

## EU regulation on instant payments: the solution to transaction speed and costs

If we set aside the transaction scaling issues, some have pointed to the speed and low cost of crypto-asset transactions compared to bank transfers.

For comparison, a transaction on the Bitcoin chain takes on average 10 minutes to propagate across the network, while a bank transfer within the SEPA zone could take more than 24 hours to reach its recipient (this delay may be shortened depending on when the transaction is made and the recipient's bank).

The banking world is well aware of these "difficulties" which are, in fact, inherent to the infrastructure used (clearing house with centralized ledger).

To address these, instant transfers have appeared in the banking environment and allow, for an additional fee, the execution of a bank transaction instantly.

In March 2024, an additional step was taken with the publication of a [European Regulation on instant euro transfers](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32024R0886).

Among the provisions included in this regulation, the obligation for payment service providers (hereinafter PSPs) to offer instant transfers on all accounts, 24/7, while limiting service fees.

These measures imposed on PSPs are announced as an update to the SEPA project (the Single Euro Payments Area).

While this regulatory response is welcome, it remains limited to the eurozone. The boastful will therefore say that crypto is still more efficient for international payments.

But the underlying reflection is much more nuanced because this "reaction" finds its place, notably, in the crypto vs. fiat comparison.

Limiting the advantages of crypto-assets to payment speed is reductive.

Crypto-assets do much more. A #cryptoreflexion may perhaps be published on the subject in some time. I enjoy reading the reflections of [Alexandre Stachtchenko](https://www.linkedin.com/in/alexandre-stachtchenko-27655655/?originalSubdomain=fr) ([here](https://medium.com/@AlexStach/les-d%C3%A9rives-de-la-surveillance-financi%C3%A8re-menacent-nos-d%C3%A9mocraties-323fbdc1ccbf) and [there](https://medium.com/@AlexStach/manuel-de-survie-dans-la-jungle-des-poncifs-anti-bitcoin-version-longue-523e381745ff) for example) and invite you to (re)discover them as an appetizer :).

Moreover, one should not throw everything away. I am not one of those reactionary maximalists who wants the death of fiat. Currency competition is not new and I am rather in favor of it.

As early as 1976, economist F. Hayek, in his essay "[Denationalisation of Money](https://fr.wikipedia.org/wiki/Pour_une_vraie_concurrence_des_monnaies#:~:text=Hayek%20d%C3%A9fend%20un%20syst%C3%A8me%20de,la%20valeur%20dans%20le%20temps.)" (which I warmly recommend reading!!) had considered the consequences of a coexistence of currencies issued by public authorities and private entities. This currency competition would allow users to abandon a failing currency and favor an efficient one.

A form of monetary Darwinism where selection is made by the market and its users and is no longer dictated by States and central banks. Put like that, it reminds me of something :D!

It is on these reflections that I close this edition while specifying that the concepts of programmable money and currency competition will be addressed, I hope, in one of the upcoming editions of these crypto-reflections (and not too long from now, hopefully).

---

> To go further: [cryptomonnaie.be](https://cryptomonnaie.be/) — The Belgian cryptocurrency blog | [Newsletter CryptoBelgique](https://cryptobelgique.substack.com/) — Stay informed of news and updates
