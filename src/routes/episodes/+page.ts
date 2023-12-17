import { sanityClient } from '$lib/sanityClient';
import type { Episode } from '$lib/schemas';

export const load = async () => {
	const episodes = await sanityClient.fetch<Episode[]>(`
    *[_type == "episode"] | order(number){
        number,
        title
      }
    `);
	return {
		episodes
	};
};
