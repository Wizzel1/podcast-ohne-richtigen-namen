import { sanityClient } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.array(
	z.object({
		_id: z.string(),
		name: z.string(),
		solvedQuestions: z.number()
	})
);

export const load = async () => {
	const result = await sanityClient.fetch(`
	*[_type == "host"] {
		_id,
		name,
        "solvedQuestions": count(*[_type == "question" && solvedBy._ref == ^._id])
	  }
	  `);

	const parsed = schema.safeParse(result);

	if (!parsed.success) throw error(500, "Something's wrong with the data");
	if (parsed.data.length === 0) throw error(404, 'Host not found');

	return {
		rankings: parsed.data
			.filter((host) => host.solvedQuestions !== 0)
			.sort((a, b) => {
				const solvedQuestionsA = a.solvedQuestions;
				const solvedQuestionsB = b.solvedQuestions;
				return solvedQuestionsB - solvedQuestionsA;
			})
	};
};
