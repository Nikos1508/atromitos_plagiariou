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
      positions: z.array( z.string() )
    }),
  });
  
const teamsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    image:  z.string(),
    team:   z.string(),
    points: z.string(),
    goals:  z.string(),
    wins:   z.string(),
    draws:  z.string(),
    loses:  z.string()
  }),
});


  export const collections = {
    'match': matchesCollection,
    'championship': championshipCollection,
    'teams': teamsCollection
  };