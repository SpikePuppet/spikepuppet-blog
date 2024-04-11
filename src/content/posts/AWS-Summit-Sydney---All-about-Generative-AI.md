---
layout: test
title: AWS Summit Sydney - All about Generative AI
publishDate: 2024-04-09T14:00:00.000Z
author: Rhys Johns
description: 'A recap of AWS Summit Sydney, and all the Generative AI info it had to offer'
slug: aws-summit-recap
draft: false
---

# AWS Summit Sydney - All about Generative AI

*Disclaimer: The views outlined in this blog post are mine and mine alone, and don't reflect that of my employer.*

With another AWS Summit complete (this is my seconds), I thought I'd write up a little recap and document my thoughts on what I've seen today (well on the day, this is coming a couple of days later).

Last year, the focus was on how great AWS is, and all of the offerings they provided to customers. I still remember quite clearly the mentions of the wild and farfetched places that AWS could operate, with mentions of Generative AI. Now they've gone all in on Generative AI. The entire keynote was about it (as seen in the image below). This isn't a bad thing though, it's been amazing too see how it's expanded in just a year and how much AWS has invested in it. They've gone all in, and it's a great chance to hear about what's available, even if it feels like I'm being *heavily* marketed too.

![](/src/assets/IMG_9010.png)

(...let's be real, I am, that's what these events are for, and it usually works)

The whole day featured a whole host of AI related talks. Everything from tuning your own models to handling bias in your models (I really liked this one! Even though it was mostly to sell SageMaker/Bedrock), if you wanted to hear about how AWS could provide it, you could find a talk on it. This meant I needed to really pick and choose what I was going to go and see. I ended up being able to cover five, so please allow me to give you the (very brief) highlights:

## Build self-healing code with generative AI on AWS

This one I'm mixed on. First off, the demo was taking error logs from cloud watch and feeding those into an LLM. This would then generate a fix for the error, and fire off a PR that a human could review. This is a neat idea, and not what I expected (self healing code has been overloaded for me by previous co workers). While I think the concept is cool, I honestly was a little underwhelmed by the example. It was just wrapping a a statement that's trying to access a key in a dictionary in a try catch and returning an error. It did that very well, but I do wonder how it would fare on bigger issues. Regardless, I respect what they tried to do.

## How slack build resilient architecture to support real time message

This was very cool. The talk mentioned cell architecture, which was basically deploying your app in different AZ's and not having them depend on each other to limit damage when something goes wrong. I'm overly simplifying this, but it was really good. Also hearing about how Slack managed their egress stack was awesome. No complaints, would happily listen to this one again (and would love to speak to the speakers about it).

## Uncovering National Treasure: How the national film and sound archive leveraged GenAI and MongoDB to enhance content discovery

This long title was actually an interesting deep dive, though it did serve mostly as a marketing exercise for MongoDB. Like seriously, most of it was about how they threw it into Atlas and use the systems provided (with some custom ETL work). It was very cool too see how older systems were modernised though, would happily chat to the speaker about this. He also made a cool little chat bot as part of the work, which was neat!

## Multilayered approach to safeguarding generative AI

This was very cool. The speaker used his experience of being in a bank as a kid (his dad ran a branch in India), and talked about the multilayered approach they took in protecting the vault and it's content, the compared that to how you should be putting into place safeguards with generative AI. It was very cool, and I loved that he tackled bias in this one. I think this is something that often gets overlooked, and the speaker also mentioned customers often skip that. Super glad it came up, and it was great to see that tools to handle this are available in AWS. Made me want to go on a dive into this.

## Mixed RAG: Routing user prompts across multiple content domains

This was pretty cool - the architect went into great dept about setting up RAG (Retrieval-Augmented Generation) and how you should be using models in AWS. Basically, you should try and leverage an off the shelf model, if that doesn't work start using RAG (which you setup with AWS services), then use agents, then finally train your own model. This was mostly what I could probably find in the docs, but it was very cool too see on stage and broken down regardless. Sadly I was fading a little by this point (had been a long day), but I would happily talk to the architect about it (dude was seriously so happy to talk, it was so neat!).

***

Overall, the day was a good one! I got to see friends I hadn't seen in some time, and listen to some great marketing talks about the current hotness. 

Oh! - Shout out to the person who was running the CodeWhisperer booth. You gave a great demo and it was great chatting with you!
