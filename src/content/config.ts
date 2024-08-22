import { z, defineCollection } from 'astro:content';

const matchesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        teams: z.string(),
        score: z.string(),
        match: z.string()
    }),
  });

  export const collections = {
    'match': matchesCollection,
  };