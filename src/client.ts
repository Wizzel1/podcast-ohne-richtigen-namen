import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: 'https://0zsqzifz.api.sanity.io/v2023-08-01/graphql/production/default'

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
