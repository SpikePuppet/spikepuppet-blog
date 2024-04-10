---
layout: ../layouts/Post.astro
title: AWS Summit Sydney - All about Generative AI
publishDate: 2024-04-09T14:00:00.000Z
author: Rhys Johns
description: 'A recap of AWS Summit Sydney, and all the Generative AI info it had to offer'
slug: aws-summit-recap
---

*Disclaimer: The views outlined in this blog post are mine and mine alone, and don't reflect that of my employer.*

With another AWS Summit complete, I thought I'd give a little recap and my thoughts on what I've seen today.

This is my second year attending. Last year, the focus was on how great AWS is, and all of the offerings they provided to customers. Now they've gone all in on Generative AI.This isn't a bad thing however, it's actually been really cool too see. It's great to see that AWS has gone all in, and to hear about what's available, even if it feels like I'm being marketed too.

![](/IMG_9010.png)

(...let's be real, I am, that's what these events are for)

The whole day has been a host of AI related talks. Everything from tuning your own models to handling bias in your models (I really liked this one! Even though it was mostly to sell sagemaker), you could find a talk on it. This meant I needed to really pick and choose what I was going to go and see. Allow me to give you the (very brief) highlights:

## Build self-healing code with generative AI on AWS

Honestly, this was a little underwhelming. It basically was taking logs from cloud watch to solve a simple error (trying to access a key that didn't exist in a python dictionary). The idea was very cool, it was all about hooking those logs up to an LLM, and having it generate code to fix the issue. Had this been on a bigger example, I think this could have blown me away, but since it was only simple I was sceptical this could help in a significant way.

## How slack build resilient architecture to support real time message

This was very cool. The talk mentioned cell architecture, which was basically deploying your app in different AZ's and not having them depend on each other to limit damage when something goes wrong. I'm overly simplifying this, but it was really good. Also hearing about how Slack managed their egress stack was awesome.

## Uncovering National Treasure: How the national film and sound archive leveraged GenAI and MongoDB to enhance content discovery

This long title was actually an interesting deep dive, though it did serve mostly as a marketing exercise for MongoDB. Like seriously, most of it was about how they threw it into Atlas and use the systems provided (with some custom ETL work). It was very cool too see how older systems were modernised though, would happily chat to the speaker about this.

## Multilayered approach to safeguarding generative AI

This was very cool. The speaker used his experience of being in a bank as a kid (his dad ran a branch), and talked about the multilayered approach they took in protecting the vault, the compared that to how you should be putting into place safeguards with generative AI. It was very cool, and I loved that he tackled bias in this one. The speaker mentioned customers often skip that, and I've found that to be true (or it's at least in the back of peoples minds). So I was super glad it came up.

## Mixed RAG: Routing user prompts across multiple content domains

This was pretty cool - the architect went into great dept about setting up RAG and how you should be using models in AWS. Basically, you should try and leverage an off the shelf model, if that doesn't work start using RAG (which you setup with AWS services), then use agents, then finally train your own model. This was mostly what I could probably find in the docs, but it was very cool too see on stage and broken down regardless.

***

To wrap up, the day was a good one (if not heavily geared towards marketing), all focused on generative AI. I can't wait to see what it's like next year.
