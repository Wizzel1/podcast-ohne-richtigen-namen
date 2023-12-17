import { createClient } from '@sanity/client';

// place files you want to import through the `$lib` alias in this folder.
const sanityConfig = {
	projectId: '0zsqzifz',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2021-03-25',
};

export const sanityClient = createClient(sanityConfig);
