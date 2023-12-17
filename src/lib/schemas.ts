import { z } from 'zod';

export const hostSchema = z.object({
	name: z.string()
});

export type Host = z.infer<typeof hostSchema>;

export const questionSchema = z.object({
	question: z.string(),
	answer: z.string(),
    answerLink: z.string().optional(),
	solvedBy: hostSchema.optional(),
	askedBy: hostSchema.optional()
});

export type Question = z.infer<typeof questionSchema>;

export const episodeSchema = z.object({
	number: z.number(),
	title: z.string(),
    spotifyUrl: z.string().optional(),
	questions: z.array(questionSchema).optional()
});

export type Episode = z.infer<typeof episodeSchema>;
