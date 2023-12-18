import { sanityClient } from '$lib/sanityClient';
import type { Episode } from '$lib/schemas';

export const load = async ({ params }) => {
	const { start, end } = params;
	const episodes = await sanityClient.fetch<Episode[]>(`
    *[_type == "episode" && number >= ${start} && number <= ${end}] | order(number){
        number,
        title,
        questions[]->{
          question
        }
      }
    `);
	return {
		episodes
	};
};
