import { z, defineCollection } from 'astro:content';

const matchesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        teams: z.string(),
        score: z.string(),
        description: z.string(),
        audio_file: z.string()
    }),
  });

const championshipCollection = defineCollection({
    type: 'data',
    schema: z.object({
      image: z.array( z.string() ),
      teams: z.array( z.string() ),
      points: z.array( z.string() ),
      goals: z.array( z.string() ),
      wins: z.array( z.string() ),
      draws: z.array( z.string() ),
      loses: z.array( z.string() )
    }),
  });

  export const collections = {
    'match': matchesCollection,
    'championship': championshipCollection
  };