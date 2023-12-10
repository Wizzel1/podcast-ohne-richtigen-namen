<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ AllEpisodes } = data);
	$: episodes = $AllEpisodes.data?.allEpisode ?? [];
</script>

<ul>
	{#each episodes as item}
		<li>
			<a href="/episodes/{item.episodeNumber}">{item.episodeNumber}</a>
		</li>
	{/each}
</ul>
