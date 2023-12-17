import { sanityClient } from '$lib/sanityClient.js';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z
	.object({
		name: z.string(),
		questions: z.array(
			z.object({
				_id: z.string(),
				question: z.string(),
				episodeNumber: z
					.array(z.number())
					.min(1)
					.max(1)
					.transform((arr) => arr[0])
			})
		)
	})
	.array();

export const load = async (event) => {
	const hostName = event.params.name;
	const hostNameWithFirstLetterCapitalized = hostName.charAt(0).toUpperCase() + hostName.slice(1);

	const result = await sanityClient.fetch(`
	*[_type == "host" && name == "${hostNameWithFirstLetterCapitalized}"]{
		name,
		"questions": *[_type == "question" && references(^._id)] {
		  _id,
		  question,
		  "episodeNumber": *[_type == "episode" && references(^._id)].number
		}
	  }
	  `);

	const parsed = schema.safeParse(result);

	if (!parsed.success) throw error(500, "Something's wrong with the data");
	if (parsed.data.length === 0) throw error(404, 'Host not found');

	const { questions } = parsed.data[0];

	const sortedQuestions = questions.sort((a, b) => {
		const episodeNumberA = a.episodeNumber;
		const episodeNumberB = b.episodeNumber;
		return episodeNumberA - episodeNumberB;
	});

	return {
		questionsSortedByEpisodeNumber: sortedQuestions
	};
};
