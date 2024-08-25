import { z, defineCollection } from 'astro:content';

const matchesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        teams: z.string(),
        score: z.string(),
        description: z.string()
    }),
  });

const championshipCollection = defineCollection({
    type: 'data',
    schema: z.object({
      teams: z.array( z.string() ),
      points: z.array( z.string() ),
      goals: z.array( z.string() )
    }),
  });

  export const collections = {
    'match': matchesCollection,
    'championship': championshipCollection
  };