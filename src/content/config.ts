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

const playersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    player1: z.array( z.string() ),
    player2: z.array( z.string() ),
    player3: z.array( z.string() ),
    player4: z.array( z.string() ),
    player5: z.array( z.string() ),
    player6: z.array( z.string() ),
    player7: z.array( z.string() ),
    player8: z.array( z.string() ),
    player9: z.array( z.string() ),
    player10: z.array( z.string() ),
    player11: z.array( z.string() ),
    player12: z.array( z.string() ),
    player13: z.array( z.string() ),
    player14: z.array( z.string() ),
    player15: z.array( z.string() ),
    player16: z.array( z.string() ),
    player17: z.array( z.string() ),
    player18: z.array( z.string() ),
    player19: z.array( z.string() ),
    player20: z.array( z.string() ),
    player21: z.array( z.string() ),
    player22: z.array( z.string() )
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
    'teams': teamsCollection,
    'programs': programsCollection,
    'players': playersCollection
  };