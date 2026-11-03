---
title: "Hypomnema: commenting on one's reading in Obsidian, with the machine"
slug: hypomnema
date: 2026-11-03
description: From the shutdown of Omnivore to the release of Hypomnema, an Obsidian plugin for commenting on one's reading in the margin, developed with Claude Code. A "build in public" account of a pharmacological use of a generative device, and of its limits.
tags:
- dualite
- ia
- numerique

---

On 29 October 2024, the [Omnivore](https://omnivore.app) team announced it was [joining ElevenLabs](https://elevenlabs.io/blog/omnivore-joins-elevenlabs). For users, the news had less pleasant consequences: we had to export our data before mid-November, after which the service would shut down ([TechCrunch](https://techcrunch.com/2024/10/29/elevenlabs-has-hired-the-team-behind-omnivore-a-reader-app/)). I used Omnivore as a *read-it-later* application: I sent it the articles I wanted to read in peace, I highlighted in it, I came back to it. I loved the tool, free and open source, so much that I had written a [text on the subject (read & takes note)](https://reflexions.florianernotte.be/en/post/readandtakesnotes/) in August 2024.

I would like to explain here what happened next, up to the release, on 31 October 2026, of a small Obsidian plugin I called [Hypomnema](https://github.com/Floernt/hypomnema). I am doing it in "build in public" mode, because the journey seems to me as interesting as the tool (not entirely objective, I admit). This "journey" illustrates the subject I have been writing and thinking about for several months: a pharmacological use of a generative device. It is not perfect, but I think there are enough positive elements to share.

I explain the path in detail and, in a way, update my "read & takes note" note from August 2024.

For those who want something concrete (and technical) about [Hypomnema](https://community.obsidian.md/plugins/hypomnema), the [documentation site](https://hypomnema.tools/) (in French and English) explains how to install and use the plugin, and the code is available on [GitHub](https://github.com/Floernt/hypomnema). For the others, follow the guide.

## 1. Bringing reading back home

After Omnivore shut down, I looked for an alternative. I finally settled on a solution built on a tool I already used for my notes: [Obsidian](https://obsidian.md). The publisher offers a browser extension, the [Obsidian Web Clipper](https://obsidian.md/clipper), which extracts the content of a web article and turns it into a Markdown note in my vault. The process is simple, efficient and configurable: I capture the article, I open it in Obsidian, I read it.

The advantage of Obsidian (unlike Omnivore or other apps) is that the article becomes a text file that belongs to me, readable by any application that handles the .md format, and that will outlive Obsidian itself should the publisher ever disappear. I have no software dependency on Obsidian. That is a first advantage.

## 2. Highlight, then extract

To read, I drew on Tiago Forte's [progressive summarization](https://fortelabs.com/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/) method: you highlight what catches your attention on a first reading, then you bold, within those highlights, what constitutes their essence. Each layer distils the previous one.

Over time, these highlights and bolded passages stayed in the text. Forte suggests "copying" these selections to the top of the document. I eventually set up a small script that extracts the highlighted and bolded passages and places them at the top of the article. For this script, I use [QuickAdd](https://quickadd.obsidian.guide/). After reading a text, if I have highlighted passages, I run the command and get, at the beginning of the text, the list of highlights I had kept, which allowed me to reread that selection.

I used this system for several months, sporadically, then recently much more intensively.

## 3. A (new) need

It was intensive use that brought out a (new) need I had not felt before. Highlighting lets you say "this is important". It does not let you say why, nor what I think of it, nor what it makes me think of. As of 31/10/2026, I have "clipped" 319 files. The oldest are almost two years old. Needless to say, I do not necessarily remember why I highlighted a passage, or what I had in mind at the time, in a note from 17/01/2025.

This "need" may seem absurd if you have not read my first text on the subject: in it I talk about the Zettelkasten method. It is a method for managing the knowledge one accumulates, which makes it possible to build a note-taking system but above all a system of connections between the notes one writes, by applying a few principles and rules. More information on [this site](https://zettelkasten.de/overview/).

This context around the highlight matters, sometimes more than the highlighted content itself. In a way, these comments are the traces of the dialogue between the text and my reading.

The most obvious solution was to write my remarks directly in the text, but this approach has two flaws. On the one hand, it "pollutes" the original text unless a distinct formalism is respected: after a few annotations, one no longer quite knows what belongs to the author and what belongs to the reader. On the other hand, it requires adopting a typographical convention (italics, colour, brackets) to distinguish the comment from the source, a convention that must be followed with discipline and remains fragile.

Let me illustrate: I am reading an article on platform regulation and I want to note, next to a paragraph, that it contradicts a judgment I know. If I insert my remark in the paragraph, I have to put it in italics, between brackets. What I wanted, basically, was Word's comments pane: the comment in the margin.

Obsidian's strength lies in its ecosystem of [community plugins](https://obsidian.md/plugins). I looked for and tested a few. None matched what I had in mind.

## 4. Building with the machine

So I developed the plugin with [Claude Code](https://claude.com/claude-code), Anthropic's development tool that runs in the terminal and in the editor. I am not a developer, and my knowledge and understanding of the subject are limited. I can read a configuration file, run a PowerShell command, understand what a script is supposed to do, but I cannot write a TypeScript plugin for Obsidian. Except that I am not alone in doing it.

The project's history is public (and written by the machine as the interactions went along), and it tells the rest of the story better than I can. The [changelog](https://github.com/Floernt/hypomnema/blob/main/CHANGELOG.md) traces the progression: a version 0.1.0 that attaches a comment to a passage and stores it in the note itself; a version 0.1.2 that drops the cards displayed in the margin of the text in favour of a single side panel; a version 0.2.0 that makes it possible to write directly in that panel, to comment on a precise point (at the cursor) and no longer only on a passage, and to sort comments into colour categories linked to tags; a version 0.3.0 that renames the plugin; a version 0.4.0 that makes the interface bilingual. The [commit history](https://github.com/Floernt/hypomnema/commits/main) shows that most of this work was committed in a single morning, between 10:42 and 13:47.

One design choice (proposed by the machine) deserves mention, because it echoes the lesson of Omnivore. Comments are stored as plain text, in the note itself, in the form of Obsidian comments (`%%…%%`) that reading mode hides. The commented passage is framed by two markers, and the text of the comments is gathered in a block at the end of the note. In concrete terms, if Hypomnema disappears tomorrow, my notes remain readable, my comments remain searchable, and a script of a few lines is enough to retrieve them. The [README](https://github.com/Floernt/hypomnema#storage-format-for-scripts) in fact documents this format for anyone who would like to use it without the plugin. I wanted a tool one can walk away from.

## 5. Publishing and being reviewed by a robot

I published the code on [GitHub](https://github.com/Floernt/hypomnema), under an open-source licence, then submitted the plugin to [Obsidian's community catalogue](https://github.com/obsidianmd/obsidian-releases), in order to share it with other readers who might have the same need as me.

Submission triggers a first automated review. It flagged several problematic points with regard to the rules applicable to plugins: styles applied directly to elements rather than through a stylesheet, access to an internal editor API, a CSS selector deemed costly in terms of performance, an incorrectly declared minimum Obsidian version, a few typing clumsinesses. These remarks were handled, once again, by the machine. [Version 0.4.1](https://github.com/Floernt/hypomnema/blob/main/CHANGELOG.md#041--2026-10-31) reflects this; it even adds a provenance attestation for the published files, built by GitHub Actions, which makes it possible to verify that they really come from the repository.

## 6. Why Hypomnema?

The choice of the plugin's name is not incidental. In ancient Greece, *hypomnēmata* were the notebooks in which one recorded quotations, readings and reflections in order to refer back to them later. Michel Foucault devoted fine pages to them in "L'écriture de soi" ("Self Writing", *Corps écrit*, no. 5, 1983). The term also designated, more broadly, the commentary on a text. And it is the word Plato uses in the *Phaedrus* (274e-275b) when Thamus reproaches writing for being a remedy (*pharmakon*) not for memory, but for reminding (*hypomnēsis*). The name carries within it the question I have been reflecting on for several months.

I have already written, in this notebook, about [pharmacology](https://reflexions.florianernotte.be/en/glossaire/termes/pharmacologie/), drawing on the work of Bernard Stiegler and, more recently, Christian Fauré: every technique is a [pharmakon](https://reflexions.florianernotte.be/en/glossaire/termes/pharmakon/), both remedy and poison, and the issue is not to choose between technophilia and technophobia, but to identify, situation by situation, the conditions under which the remedy prevails over the poison. These conditions are never acquired once and for all.

This project seems to me to offer a concrete illustration of this, on two levels.

The first concerns the object itself. Hypomnema is a tool for reading more slowly, for interrupting reading to inscribe a reflection in it, for keeping track of a dialogue with a text. It goes, if you like, in the opposite direction to the rapid consumption of content that most current devices encourage. I used a generative device to make an instrument that supports the effort of reading rather than short-circuiting it.

The second concerns the division of labour. I delegated what I did not know how to do and had no intention of learning: writing TypeScript, mastering the Obsidian API, knowing the catalogue's rules. I kept what belonged to my use: identifying the need, born of several months of practice, the refusal to mix the source text and my remarks, the requirement of a format readable without the plugin, the decisions about what the tool should and should not do. On the basis of a limited amount of reflection, I admit, the machine proposed a series of things that I validated, amended or contested. This is what I have elsewhere called [voluntary proletarianisation](https://reflexions.florianernotte.be/en/glossaire/termes/proletarisation-volontaire/): the conscious externalisation of a know-how into a technical system, while keeping control over the criteria, the structure and the scope of the delegation (I developed this in my [phenomenology of a practice with generative AI](https://reflexions.florianernotte.be/en/post/phenomenology-of-a-practice-with-generative-ai-2026/)).

## 7. A few reservations

I am not writing here that the exercise is exemplary. Several objections arise.

The first concerns research. Did I search enough? I admit I did not. To write this text, I did a small augmented search again and "quickly" found two similar plugins ([Margin Annotations](https://community.obsidian.md/plugins/margin-annotations) and [Marginalia MD](https://community.obsidian.md/plugins/marginalia-md)). What is surprising is that they were created and released in the course of October 2026. For Margin Annotations, the production process seems similar to mine if one looks at [its GitHub repository](https://github.com/aoldiot/margin-annotations).

This therefore means that when making a custom tool costs no more than a few hours, the temptation is great to build it rather than to search, compare, and learn to use what already exists. The cost of making has collapsed; the cost of searching has stayed the same. Good or bad? I do not know. The calculation has changed, and not necessarily for the better. Obsidian's catalogue already counts several thousand plugins; every tool built to measure rather than shared fragments it a little further.

The second reservation extends the first. Is the generative device, in my case, a lazy way of short-circuiting research? I had written, about [writing and effort](https://reflexions.florianernotte.be/en/post/ai-writing-effort/), that generative devices short-circuit the effort of reading, selecting and formulating that once nourished culture. It would be inconsistent not to ask myself the same question here.

The effort of looking for a tool, testing it, reading its documentation, understanding its limits, is also formative: it teaches what others have thought about the same problem. That knowledge I did not acquire. I learned by "doing" (or by having done) a plugin and by reflecting on how it works. I asked myself questions about the user experience and the customisation of tags, but I have not (yet) read what others had already shared. There is therefore a form of (relative) isolation here that reminds me of the dystopian predictions some make about AI producing personalised, artificial worlds that we will consume individually through virtual reality headsets or some other artefact of that kind. I do not have enough distance from this practice to criticise it. I am in a "creative rush" that may resemble a kind of bulimia, and I admit I do not yet know what to make of it. An interesting experience in any case.

## 8. What comes next

The first aspect is to use this plugin and see, over the long term, what I can do to keep improving it and to keep thinking up features that allow a great deal of customisation.

I have also put a [documentation site](https://hypomnema.tools/) online, in French and English. Beyond installing and using the plugin (annotations, extractions, chains, groups, integrations with other plugins such as Dataview or QuickAdd), it contains a few short notes on method: the margin, objection and verification, periodic review, the passage from reading to writing. It is a way of making this project a little more concrete, a project that fits into what I believe to be beneficial: the tool is only worth the reading practice it supports.

The code is available on [GitHub](https://github.com/Floernt/hypomnema). Feedback, bug reports and translations are welcome.
