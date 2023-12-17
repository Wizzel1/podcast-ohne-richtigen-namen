import { sanityClient } from '$lib/sanityClient';
import type { Episode } from '$lib/schemas';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { id } = params;
	const episodes = await sanityClient.fetch<Episode[]>(`
        *[_type == "episode" && number == ${id}]{
            number,
            title,
            spotifyUrl,
            questions[] -> {
                question,
                answer,
                answerLink,
                askedBy -> {
                    name
                },
                solvedBy -> {
                    name
                }
            }
          }
        `);

	if (episodes.length === 0) throw error(404, 'Episode not found');

	return {
		episode: episodes[0]
	};
};
