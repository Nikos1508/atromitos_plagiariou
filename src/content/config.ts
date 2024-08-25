import { z, defineCollection } from 'astro:content';

const matchesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        teams: z.string(),
        score: z.string(),
        description: z.string()
    }),
  });

const championshipCollection = defineCollection({
    type: 'content',
    schema: z.object({
      teams: z.object({
        1: z.string(),
        2: z.string(),
        3: z.string(),
        4: z.string(),
        5: z.string(),
        6: z.string(),
        7: z.string(),
        8: z.string(),
        9: z.string(),
        10: z.string(),
        11: z.string(),
        12: z.string(),
        13: z.string(),
        14: z.string(),
        15: z.string(),
        16: z.string(),
        17: z.string(),
        18: z.string(),
        19: z.string()
      }),
      points: z.object({
        1: z.string(),
        2: z.string(),
        3: z.string(),
        4: z.string(),
        5: z.string(),
        6: z.string(),
        7: z.string(),
        8: z.string(),
        9: z.string(),
        10: z.string(),
        11: z.string(),
        12: z.string(),
        13: z.string(),
        14: z.string(),
        15: z.string(),
        16: z.string(),
        17: z.string(),
        18: z.string(),
        19: z.string()
      }),
      goals: z.object({
        1: z.string(),
        2: z.string(),
        3: z.string(),
        4: z.string(),
        5: z.string(),
        6: z.string(),
        7: z.string(),
        8: z.string(),
        9: z.string(),
        10: z.string(),
        11: z.string(),
        12: z.string(),
        13: z.string(),
        14: z.string(),
        15: z.string(),
        16: z.string(),
        17: z.string(),
        18: z.string(),
        19: z.string()
      }),
    }),
  });

  export const collections = {
    'match': matchesCollection,
    'championship': championshipCollection
  };