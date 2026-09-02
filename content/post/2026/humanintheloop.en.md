---
title: "Human in the loop: what, exactly, are we doing in this loop?"
slug: human-in-the-loop
date: 2026-06-05
description: A phrase that circulates, apparently loaded with meaning but which does not really say anything concrete.
tags:
- dualite
- therapeutique
- essai
- ia

---

For some time now, more and more generative-AI specialists have been advocating keeping the human in the loop (_Human in the loop_ (HITL)). This phrase also appears in European regulation under the terms "human oversight" or human supervision. The concept was popularized notably by Ethan Mollick in _Co-Intelligence_ as one of the four principles the American professor recommends, alongside three others ((i) Always invite AI to the table. (ii) Be the human in the loop. (iii) Treat AI like a person but tell it what kind of person it is. (iv) Assume this is the worst AI you will ever use.).

Since then, we encounter this notion in corporate charters, in sales pitches, in compliance memos, or in certain circles, without any very clear explanation of how to put this oversight into practice. Human oversight crosses registers but says nothing precise, and everyone projects onto it whatever they need to see. The regulator sees a safeguard, the vendor sees a selling point, the user sees an "ethical" way of using the machine.

This phrase must be questioned and thought through — not to disqualify it, since it is important, if not fundamental, but to examine what it ought to cover more concretely. I would like to propose what would be required, in my view, for it to begin to say (really) something.

### The absence of a standard

The _human in the loop_ is human oversight in the sense of Article 14 of the AI Regulation (AI Act). It is an obligation for high-risk systems. This regulatory obligation, specific to high-risk systems, has mutated: it is now becoming an ethical rule for every possible use of AI systems, even those with minimal risk. We oscillate between what _we must do_ and what _we ought to do_.

With this mutation from a specific legal obligation toward ethics, we leave it to users to define this oversight in light of the text's general objectives (or any other criterion the user chooses). And because this practice has become ethical, everyone is free to define how they intend to implement the human in the loop.

But the actors have no real interest in defining this practice specifically. The more the phrase remains undetermined, the easier it is to invoke in a compliance statement. It ticks a box without effectively and/or genuinely constraining a use of AI systems. This is what I was already exposing back in November 2025 ([see my article on the subject of ethics and compliance](https://reflexions.florianernotte.be/en/post/ethique-conformit%C3%A9/)). The compliance norm has fallen into the field of ethics but without any concrete and/or dedicated standard or reference.

When a European regulation, an institution, or a consulting firm states that _the human must remain in the loop_, we do not really ask ourselves what that constrains in practice. The phrase functions somewhat like a moral insurance policy. It sounds good in a speech, it is ethically loaded, and it gives the illusion of an operational and serious requirement. If one digs even a little, or seeks to understand what this watchword covers, one quickly notices that it does not always specify _who_ the human in question is, _when_ they should intervene and on the basis of _which criteria_ they intervene, nor even _with what power within the process_.

I do not think I am exaggerating in pointing this out. It is a banal observation for anyone who has tried to set up an AI usage policy in an organization. We keep invoking the _human in the loop_ as if the incantation were enough. Yet I believe it is not enough, and that it has even become — by dint of circulating without content — one of the vectors of normalization it would nonetheless wish to govern.

### A disguised validation

There is, within the phrase, a temporal presupposition that must be examined right away. _In the loop_ does not specify where. In practice, the notion of oversight has the effect that this oversight is placed _afterward_. The human is invited to check an output, when they could just as easily be invited to structure an input. The human seems summoned once the result is already there, to read it, correct it, approve it. It is a proofreader's position, not a producer's.

Yet the _a posteriori_ validation of a result produced by a machine is a rather different exercise from the _a priori_ production of that result.

This _a posteriori_ validation mobilizes shallower capacities, less tied to the user's expertise. The professional who merely validates exercises a competence of evaluation. But this evaluation is impoverished because the user has not travelled the path that leads to the result. They read the surface and cannot concretely interrogate the foundations of the result. It seems plausible, and that is one of the reasons why attention drops and why errors can creep in.

In addition to this impoverishment of evaluation, there is [automation bias](/en/glossaire/termes/automation-bias/): the tendency to place excessive trust in the machine's productions. Validation becomes even more superficial in this context. We skim diagonally, we trust, and imprecisions are accepted, for want of anything better or out of laziness.

The final blow is dealt by the cadence imposed by the machine. Marion Carré, in _Le paradoxe du tapis roulant_, observes that our productivity cadences adjust to those of AI. Validation too falls in line with this new tempo, which means it accelerates and is therefore reduced in proportion. The _loop_ becomes a short cycle, shorter and shorter and sometimes far too short for serious validation. Because human oversight is fuzzy, vague and undefined, the _human in the loop_ ends up becoming a mere reminder to proofread before signing or sending the generated content.

This is how validation is disguised: it is falsified and travestied by its lack of precision, of rigor, by automation bias, and by the machine's cadence. Proofreading is not oversight or supervision, and vice versa. There is something fundamentally different in the notion of human supervision that one rarely finds in practice.

### Two proposed protocols

The observation laid out here is not universal, but for those who recognize all or part of the elements mentioned, I would like to propose what could replace the hollow phrase with something that would genuinely constrain our practices. I believe the answer lies in a shift from the _watchword_ to a _protocol_. Nor is the idea to propose a universal protocol that would apply to every situation. I do not believe in the magic prompt. The objective is to propose a method, a concrete protocol structure, which will have to be formalized by each organization and for each type of use, and which will have to be built by the user.

I see two families of protocols, which work together to **produce** and **verify** the machine's work.

#### Production protocol

I have already addressed the principles underlying this type of protocol: I am aiming here at [_grammatization_](/en/glossaire/termes/grammatization/) — see in particular [[Grammatize and observe. New therapeutic practices for generative artificial intelligence]]*.

In short, this grammatization, carried out through a production protocol, is a _"configuration work"_ aimed at adapting a generic system to a specific task. This configuration work requires discretizing one's activity, that is, decomposing it into units the system can process ([H. Guillaud — AI productivity at work remains uncertain](https://danslesalgorithmes.net/stream/la-productivite-de-lia-au-travail-est-toujours-incertaine/)).

It is a methodology, in appearance, fairly simple, which consists in cutting up one's work processes by **atomic sequence** (I develop this notion further down in the text) to the extent that one can describe to the machine what must be done for a future execution. It is the equivalent of the industrial production line for "mental" services. Grammatization, or the production protocol, is also, in a sense, a work algorithm (more or less simple depending on the case).

Where it can get complicated is in the decomposition of the processes. To build a house, there is a "logical" order that allows the processes and stages to be chained in a generally identical chronology (foundations, structural work, roofing, frames, etc.). You do not start the finishing work without having done the electricity and the heating, for example. For mental services, the order is sometimes more nebulous because it is more instinctive. Depending on the case, we have automatisms that mean we are sometimes no longer aware that we are executing a process. They are the same questions asked, the same transposition from theory to practice, and the work flows almost naturally for some.

The valuation of a company's shares by an Auditor follows one or more methodologies that involve, beforehand, treating certain items of the balance sheet and the income statement in order to "normalize" the company's situation. I am thinking in particular of certain expenses incurred because of the manager's choices, which are neutralized and make it possible to normalize, for instance, the EBITDA. For the lawyer that I am, the analysis of certain types of issues goes through a prior collection of information that then allows me to answer the questions I ask myself. These steps or sequences can therefore be transcribed into a production protocol, supplied to the machine, for future execution. So the idea here is not to target the "famous" _repetitive, low-value-added tasks_ that can be automated with the machine — even if those can be the object of a production protocol — I am thinking rather of more complex tasks.

##### From the prompt to the protocol

Since the arrival of generative AI in November 2022, these "protocols" were transmitted through _prompts_, more or less long and complex instructions supplied to the machine within an exchange simulating conversation. With the evolution of interfaces and machines, these instructions could be encoded more or less persistently for future reuse. Generative-AI developers had clearly understood that reusing an instruction by means of a _copy-paste_ was an oddity when using a machine capable of generating thousands of words from simple instructions.

Moreover, this exchange in the form of a conversation limits, through the spontaneity of the machine's response, the user's capacity to enrich their instructions. The conversation quickly takes over and the user then merely steers it with more or less attention (see on this subject _L'Intelligence Artificielle pour les juristes_ (by [Alain Strowel & François Wery (Larcier, 2025)](https://www.larcier-intersentia.com/fr/ia-generatives-9782807947320.html)) and more particularly the 9C™ model for conversing with AI.)

With the arrival of [Skills](https://support.claude.com/fr/articles/12512176-qu-est-ce-que-les-skills) offered by Anthropic in Claude, these production protocols have become much simpler and easier to set up. We even see production protocols for creating good skills, namely [a skill to make skills](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md). On top of that, these skills are shareable, which allows them to be disseminated within one's organization, for example by standardizing a way of working with the machine, according to the chosen methodology.

Practical, but there are nonetheless certain pitfalls beginning to appear that, unfortunately, demonstrate the fragility of our human supervision. Marketplaces now offer the option to download _skills_ made available by third parties. Although the idea is interesting, it runs counter, to my estimation, to the very essence of grammatization, which is to discretize **one's own practice**. Here, the marketplaces make it possible to use someone else's methodology. In terms of supervision and oversight, this requires having a great mastery of the subject and ensuring the absence of malicious elements that would be "hidden" in the downloaded skills. Now, this situation regarding malicious data being injected has notably been documented in a February 2026 pre-print: [When Skills Lie: Hidden-Comment Injection in LLM Agents](https://arxiv.org/abs/2602.10498)

To conclude on this point, if the protocol is carried out conscientiously, it allows for a far more precise and strict downstream oversight of the result by the user, notably because of the constraints that were placed on it upstream. It also makes it possible to fight against the phenomenon of [proletarianization](/en/glossaire/termes/proletarianization/) ([see my note](https://reflexions.florianernotte.be/en/post/proletarisation-droit/)) and to guide a (simulated) reasoning process of the machine.

On this point, the effort to set up this type of protocol has two beneficial effects in hindsight. By that I mean a benefit that is not immediately visible.

1. **Continuous optimization**. This is obviously decisive here, but setting up a production protocol is a working base that can (and should) evolve. Setting up such protocols, even with the machine's assistance, makes it possible to obtain a written process during a "simple" conversation in natural language. Activate your device's dictation function, explain to the machine _what_ you do and _how_ you do it, and within a few minutes you have a first version that can, in some cases, already be very effective. Thanks to this written version, it is possible to update, enrich and evolve the protocol as your practices change. In addition to the skills-of-skills already mentioned, other decomposition methodologies are proposed (see for example the project by [Alexios van der Slikke-Kirillov](https://github.com/SaifAlYounan/professor-nii-principles-building-assistant)).

2. **An improvement of the result**. Unlike what we ourselves may undergo or experience, the machine is not sick, tired or distracted. It tirelessly produces the content requested of it in light of the formulated instructions (subject to the issues linked to the machine's non-deterministic character and to cases of hallucination, which are in this case more marginal — see below). We often speak of time saved as an advantage of using the machine. I do not intend to enter that debate, but I think there is, first and foremost, an improvement in the quality of what is produced thanks to a production protocol set up upstream. The decomposition induced by grammatization makes it possible to systematize production, without skipping steps, and also to spend time and energy on tasks other than formatting, structure and, more generally, the expression of one's intuition or thought. Delegating the known to better think the unknown, again and always.

##### On the atomic sequence

The notion of atomic sequence is important to specify and grasp for any decomposition. Note, moreover, that this decomposition is the basis of any automation process. As set out above, the success of an automation rests on the cutting up of a process into an **"atomic sequence"**. The characteristics of these **atomic sequences** are that the sequence be sufficiently dissociated from the other tasks so that it can have a character that is (i) **autonomous** and (ii) **chrono-logical**.

###### Autonomous

The **autonomous** character of the sequence means that the sequence executes according to its own rules. It receives an input and produces an output without any other element being necessary.

For booking a client appointment, one can sequence the steps and think about automating each atomic sequence. In my case, I have automated the choice of the time slot via Cal. This sequence is only possible because of — and therefore thanks to — the information I transmit to the client. Without it, they are unable to book an appointment.

Conversely, no information other than the one received is needed to book the appointment. The sequence is therefore autonomous in this sense. It can be carried out according to its own "conditions", which are decided at the moment of sequencing. It is moreover within this framework that one can consider whether the grammatization is effective or not.

###### Chronology

**The chronology** of the sequences may seem obvious but is entirely meaningful. In sequencing the tasks, they must have a _"chrono-logical"_ place.

If you have to perform a mathematical calculation, the rules of arithmetic dictate an order of operations. For example, to solve 3+4x3, the result is 15 and not 21, because multiplication is prioritized over addition. There are therefore here two atomic sequences (4x3) and (3+12), but there is a chronological order to take into account. The sequence (4x3) feeds the sequence (3+12).

If I take the drafting of an agreement, I can distinguish several steps:

```
gathering information>structure of the agreement>drafting>integrating the information into the structure>proofreading
```

This methodology is _one methodology_ and it is fundamentally specific to each person. It can be accelerated by the use of an agreement template, but a logical order of the steps to be carried out remains. For example, I cannot integrate the information first if I do not at least have the information or the structure. This sequence of tasks will follow a certain logic in its chronology.

#### Verification protocols

The production protocol plays out upstream, whereas the verification protocol plays out downstream. The verification protocol will produce, at least, two types of element.

##### Explanations

The point here is to force the machine to explain its "reasoning" and to formalize the decisions it would have made by explaining its choices and its criteria.

In certain "modes" of using generative AI, a form of reasoning is displayed to the user between the interactions. By way of illustration, I invited the machine to question me:

> in the manner of socrates about: our relationship to the world is going to be mediated by AI

Before answering me, the machine produced the following text (which I have translated from English):

> I am preparing a Socratic dialogue on how AI will shape our relationship to the world, and I must avoid the usual clichés of AI writing: no "delve", no forced parallelism, no excessive em-dashes, no "explore". I will ask relevant and incisive questions that will prompt them to examine their presuppositions and to define what they really mean by "mediation" and "relationship". I am considering different Socratic approaches. The most effective might be to challenge the idea that AI mediation is a new phenomenon: we already filter reality through language, technology and culture. But starting with a simple question of definition seems clearer to me: what does the term "mediated" concretely mean to them? Ideally I would ask for a concrete example to support this abstraction. I will keep it simple and conversational, in French, with a single sincere question, without frills, positioning myself as a curious listener rather than a skeptic. This version suits me: a single, direct question that places them in a position where each answer opens up the discussion on mediation and the role of AI.

The machine's answer is then:

> Before following you into this idea, I would like to ask you a preliminary question: your relationship to the world, at this precise moment, while you read this sentence — is it immediate, or already mediated by something?

What matters to me here is the intermediate "reflection" between my question and the machine's answer. Part of this reflection is drawn from the personalized instructions (the first three lines). Then, one can observe a form of reasoning the machine performs on how to answer my question. I will let you judge the relevance of these elements, but it seems to me that they are in any case interesting within the framework of a genuine human oversight. It allows the user to identify, more finely and precisely, the "path" the machine took to arrive at its answer.

The objective of the protocol here is to force the machine to explain its reasoning, or at least to detail it, independently of the mode chosen by the user, by integrating this request and its terms into the initial instructions. This then allows the user to identify the possible biases of the answer, the branchings taken by the machine, and the moments where such branchings occur. In a complex task, this description of the path can be welcome.

The simplest idea, and one already partially available in existing tools, consists in requesting that, alongside the document produced, the machine systematically generate the _reasoning path_: the steps taken, the hypotheses retained, the sources mobilized, the choices made when several routes were open. This path is not meant to replace the reading of the document. Its objective is to give the user additional information to understand where the machine passed in order to arrive at the result. With a systematic reasoning path, validation becomes once again a work of expertise: the user can much better interrogate the steps, spot the discrepancies, the errors, or verify the references.

##### Recommendations

The verification protocol can also serve the user within a positive feedback loop with the production protocol. In this context, these recommendations would take the form of a list of operational elements to integrate into the production protocol in use.

This list will necessarily have to include calls to action. Proofreading and verification must not be a one-off operation. They could be the start of a new grammatization cycle. Verification could feed a _grammar_ that becomes more precise over the course of practice. In that case, the machine could propose improvements or point out the zones of vagueness that would have been observed. These recommendations are calls to action in the face of the deficiencies that would be experienced in the reasoning path described above.

This situation could arise where the machine decides on one route rather than another without convincing or sufficient justification. This situation could be observed when the initial framing or the objective is insufficiently defined. Take an example: when I observe that a generative system decides to go in an inopportune direction or takes an inadequate hypothesis when several hypotheses existed, the proofreading should not stop at correcting the document produced by adapting it with the right hypothesis. The verification protocol should be able to recommend formalizing selection criteria more precisely according to the circumstances and, finally, that this instruction be incorporated into the protocol for subsequent productions. Failing that, I will correct the same error next week, and the week after, and the error will never be eliminated at the root. I believe that verification without a call to action is a verification condemned to start over.

### The consequences of the protocols

This shift from the watchword to the protocol changes a great many things. I develop five of them.

#### Temporality

First, it inverts the temporality of the initial oversight. The _human in the loop_ generally operates downstream. Setting up a double protocol pushes the oversight back upstream (through the prior grammatization of the instructions) and extends it in a loop (through the updating of the parameters after each verification).

There are therefore several oversight points in the "production chain". This multiplication of oversight points is liable to improve this oversight because the oversight points are located at "key" moments, different ones, of the production.

#### Responsibility

Next, this shift fixes responsibility. As long as we speak of a _human in the loop_, we are speaking of an abstract figure of which we never know whether it really exists. I am obviously exaggerating, but setting up production and verification protocols makes it possible to locate the _who_ more easily and to allow the one who must oversee and supervise to do so in a framed manner.

This way of proceeding is also important to avoid an oversight of variable geometry. In a sense, setting up protocols such as those described above "automates" not the oversight but its taking-charge. If oversight and supervision are left to the user's goodwill, there are risks that they will be carried out more randomly or less precisely.

Taking the time to create one's production protocol is also a way of preventing the dispossession of our [operative capacity](/en/glossaire/termes/operative-dispossession/), as I was exposing [here](https://reflexions.florianernotte.be/en/post/depossession-operatoire/), which can be considered a form of taking responsibility in one's practice.

#### Personalize

Furthermore, setting up protocols for production also makes it possible to resist the uniformization and standardization of productions. If we all use the same software — and let us be frank, the choice of language models is not abundant — we are heading toward a uniformization of generated content, because of the way the machines work and their probabilistic statistical nature. To grammatize is therefore also a remedy against the standardization that can occur when using these machines.

#### Rationalize

In addition — and this is the point I had not seen while reflecting on this proposal — this shift rationalizes the cost of oversight. At first glance, one might consider that the verification protocol burdens the machine and the user with additional work (producing the reasoning path and reading that path, on top of re-reading the document without guidance). Instinctively, one might consider that re-reading additional work is an additional burden. That is true within the paradigm of disguised validation. If, on the other hand, human oversight is actually implemented, the production of a reasoning path could rationalize the re-reading of the content and would make it possible to identify the at-risk zones more precisely. The machine will not expressly point out its errors, but it will give the reader a reading path that does not exist without this verification protocol. One then manages to orient one's verification in light of the elements targeted in the reasoning path.

#### Consume

Finally — and this is an important element to take into account — these protocols are token-consuming. The AI will generate a longer output than the one it could have generated. It is therefore a methodology to set up for a certain level of complexity and where a level of demand is expected.

### What might be missing

I am not naive. I am aware of the flaws in my proposals, and I list a few of them right now to allow you to think about them (and happy to read your suggestions to try to remedy them).

#### Execution deficiency

A first point intrinsic to the machine: the execution of the protocols can be deficient. We have, to this day and to my knowledge, no control over how the language model will execute the protocols in "consumer-grade" tools. In certain, fairly technical, configurations, one can set the model's temperature, the length of the generated outputs, and other elements.

Moreover, because of the non-deterministic nature of these machines, the outputs that will be generated on attempt 1 will be different from those generated on attempt 2, and so on.

In the vast majority of cases, these elements are out of users' reach, but I must signal it.

#### Non-application

This is not a foolproof solution, and the setting up of a verification protocol aimed at generating a reasoning path could also be ignored by the user. In that sense, protocols, like AI charters or guidelines, can become "artifacts" of compliance. One can very well draft a verification protocol that will never be applied. The discipline of oversight is not in the document but in its use. No device can guarantee that "human" discipline will take place. What the protocol can do is offer a framework — which, in the current paradigm, is far from being the case.

#### Disguised path

I take up here the metaphor of disguise used above to mention that the reasoning path, as I evoke it, presupposes a cooperation of the model providers that is far from assured. Asking a model to trace its reasoning presupposes that it can trace it, and that it has an interest in doing so. Current generative models produce _post hoc_ justifications that do not necessarily reflect the calculation actually performed and that are limited by system instructions (system prompt) over which the user has little or no grip. The path can, itself too, be a fiction. This does not disqualify the idea, but it warrants taking the generated content with caution.

#### Demand

The last point is that these protocols presuppose a demanding user: both capable of decomposing their practice into atomic sequences in order to formalize production criteria, and of holding to a discipline of verification. The machine and its cadences tend, unfortunately, to neutralize this type of user. We live in a society where we seek absolute efficiency in everything, according to Jacques Ellul. I share this point of view, and these protocols seem to us to be a step backward. But the practice of systematic delegation has the consequence of lowering our level of demand, of making us carry out disguised validations and, ultimately, of [doing without knowing](https://reflexions.florianernotte.be/en/post/depossession-operatoire/).

There is here an almost vicious circle out of which I do not know how to get: the protocol demands an expertise that normal use of the machine erodes. Part of the answer perhaps lies in observation, in the sense in which I describe it in [Grammatize and observe](https://reflexions.florianernotte.be/en/post/grammatiser-observer/): tracing one's own boundary, knowing where one ceases to be able to verify, and delegating only on that side of the line traced.

This circle doubles when one thinks about the reasoning path. A path does not exempt one from reading. Instead of re-reading the document blindly, the user reads while knowing where to look: which hypotheses were posed without verification, which citations are paraphrased, which choices were made at the branchings. It is a change in the regime of validation. It presupposes a reader capable of reading and understanding the path, that is, a reader who is already an expert. Without this expertise, the path itself becomes abstruse. The protocol does not create the expertise; it presupposes it, and it allows it to be mobilized differently.

### To conclude

If there is one thing to retain from this reflection, it is that the phrase _human in the loop_ is hollow because it does not say what one does in this loop. As long as we do not say it, we do nothing precise. It is a way of reassuring oneself. If we want human supervision to have a meaning, we must formalize it in a precise and concrete manner.

I could also have proposed a template, or a practical example. I will not do so, because, first, I think this exercise must be carried out by oneself, notably in order to develop this competence. Second, I think the idea of this reflection is to set you on the path (not of reasoning) but of iteration. We are facing a machine that evolves constantly and whose functioning must be appropriated. This is not a "one-shot" or "fit-for-all" job. It is a systematic configuration at the scale of real and individual practices. I do not pretend that these protocols here are the right ones. If you are short of inspiration, copy the text into an AI and ask it to propose something for you.

These protocols are, without any doubt, an approximation, a beginning of a solution. However, an arguable approximation is surely better than an unarguable phrase, because it is empty and hollow. Now that the frame is set, the discussions about thresholds, about criteria, about corrective calls to action, can begin.

{{< newsletter >}}
