---
title: Using Jujutsu in Anger (I love it!)
publishDate: 2025-11-09T08:00:00.000Z
author: Rhys Johns
description: >-
  Sometimes you need to use tools in anger. And sometimes, that's going to be a
  new version control system
slug: using-jujutsu-in-anger
draft: false
---

# Using Jujutsu in Anger (I love it)

Recently, I sat down and spent some time getting my hands dirty with Jujutsu (not the combat sport, though that’s also true) - the new version control system which has been picking up steam lately. I'll cover why in a follow-up, but the short version: Git is broken for stacked PRs.

## What is Jujutsu?

Jujutsu (which we'll refer to as `jj` to save time and match the command) is a version control system that takes inspiration from git and mercurial. The typical git workflow is clone, branch, stage changes, commit with a description and push.

This works fine when you work on one thing at a time, but once you start using stacked PR's it falls apart. When you have to update the base branch (maybe you got a piece of feedback, or a change was approved and you need to merge it to main) you have to manually rebase each, in sequence. If something goes wrong mid rebase, it cascades and you have to resolve each, and then you need to force push each branch. It's frustrating.

`jj` takes a different approach to this: "working-copy-as-commit". Your working directory is the commit, you don't stage anything. It's all immediately part of the history.

Any updates made to a change in your stack (fixing a bug, addressing PR feedback, merging in a change) are propagated up the stack. Each change is rebased for you automatically, no intervention needed. And if a conflict arises, you can use `jj` to resolve that for you, or leave it for later (`jj` allows you to address these at your own pace) and it'll handle propagating the fix for you.

## That sounds great! Do I have to get rid of git?

That's the best part - no! `jj` splits the UI and version control algorithms from the storage layer. This means that you can choose how your changes are stored, either in git or in `jj`'s native backend (when it's ready). This means you can just use `jj` alongside your existing git repo without needing to replace everything organization wide.

## Great! How do I get started?

### Installation

To get started with `jj`, you'll want to download it to your machine. You can go [here](https://jj-vcs.github.io/jj/latest/install-and-setup/) to see all the different ways to install it. To do this on Mac, run:

```
brew install jj
```

Once you've done this, you can verify it's installed by running `jj version`.

### Setup

Now for the good part. Head over to your repository, and run:

```
jj git init --colocate
```

This creates a `jj` repository that shares the same directory as your git repo. It'll then read all of the existing changes, and create a set of bookmarks which correspond to branches (we'll cover this in a moment).

### Usage

To see a list of all changes that have happened in the workspace, run

```
jj log
```

This will show you all the changes that have occurred. The change with the @ symbol is the current change you're editing. This might be overwhelming, but just look at the very top of the output. That's usually where your current edit is.

You refer to changes by their change ID. Using the image below as an example

![](</src/assets/Screenshot 2025-11-09 at 9.59.46 AM.png>)

The ID mxzyllkz is the change ID, which never changes and you can use as an identifier. c25b6cb5 is the commit ID, which will change as you make changes. You can refer to these purely by what’s highlighted (so m and c) in this case. This will be handy later.

<aside>
💡

One thing to note - when you run a command, that's when `jj` takes a snapshot of your current working directory. It's a neat little trick that means you don't need to worry about running background tasks or anything like that.

</aside>

To see your current working changes, run `jj st`. This works a bit like git status for `jj`.

### Workflow

There are a couple of ways you can start working with `jj`. I recommend using the squash workflow which is really [nicely covered](https://steveklabnik.github.io/jujutsu-tutorial/real-world-workflows/the-squash-workflow.html) by Steve Klabnik in his tutorial (this tutorial is amazing and has been a big resource for me). I find it works best for how my brain works, but there is another option in the tutorial as well. Let's go through how to use the squash workflow:

1. First, run the command `jj new`. This will create a new 'change' which will track your work, and give you a blank slate.
2. Now that we have this new change, run `jj describe -m "<your message here>"`. This will set the description you see when you run `jj log`. These act like git commit messages (and are used as such when pushing to GitHub).
3. Now run `jj new` again. You'll have another new change, but this time you can make all your changes.
4. Once you've completed everything, you run `jj squash` which merges your working changes into the parent change.

And thats it! You can do this over and over, and track all of your changes. But what if you want to get these merged into master?

### Bookmarks

Bookmarks are a compatibility feature with git. The idea is that these are named pointers to changes that act like branches. There's more nuance here, but this will do while getting started. When you first created your `jj` repo, all of your branches were imported as bookmarks.

To fetch changes that happened on each of your bookmarks, run `jj git fetch`. This works just the same as git, and will fetch changes for all branches.

Here's where `jj` shines: when changes land in main (or any bookmark), `jj` automatically rebases your entire stack on top of it. No manual rebase chain. No conflicts cascading up through each branch. You fetch, and your stack is updated.

To create a new bookmark, run `jj bookmark create <bookmark-name>`, which will set the current change as the start of a new bookmark. As you make changes that you want to push to github, you run `jj bookmark set <bookmark-name>` on the change you want included. This will move the bookmark to the current change.

To push bookmarks to github, run `jj git push --bookmark <bookmark_name>`. If it's a new bookmark, append `--allow-new` to the end.

### Implementing feedback

If you get feedback on a PR, you can go straight to the change and address it. Run `jj edit <change_id>` and you'll be right back where you were. Make your changes, then run `jj git push`.

That's it. No manual rebase of everything above it. No force-pushing each branch individually. `jj` rebases the stack and pushes all affected bookmarks automatically. This is the workflow that makes stacked PRs actually manageable.

## Finishing up

This is a simple guide to using `jj`. It's how I started with it, and will give you the basis to get started. I also highly recommend checking out [Steve's Jujutsu Tutorial](https://steveklabnik.github.io/jujutsu-tutorial/introduction/introduction.html) and the [Official Docs](https://jj-vcs.github.io/jj/latest/) for a much more comprehensive overview.
