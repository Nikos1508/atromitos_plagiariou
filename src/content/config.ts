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

const programsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    k12: z.object({
      monday: z.array( z.string() ),
      tuesday: z.array( z.string() ),
      wednesday: z.array( z.string() ),
      thursday: z.array( z.string() ),
      friday: z.array( z.string() ),
      saturday: z.array( z.string() ),
      sunday: z.array( z.string() )
    }),
    k14: z.object({
      monday: z.array( z.string() ),
      tuesday: z.array( z.string() ),
      wednesday: z.array( z.string() ),
      thursday: z.array( z.string() ),
      friday: z.array( z.string() ),
      saturday: z.array( z.string() ),
      sunday: z.array( z.string() )
    }),
  }),
});


  export const collections = {
    'match': matchesCollection,
    'championship': championshipCollection,
    'teams': teamsCollection
  };