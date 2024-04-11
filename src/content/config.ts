import { z, defineCollection } from "astro:content";

// Don't need to include a slug since it's added by default!
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    author: z.string(),
    description: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = {
  posts: postsCollection,
};
