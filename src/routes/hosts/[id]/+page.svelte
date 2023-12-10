<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ PostsByAuthor } = data);
	$: episodes = $PostsByAuthor.data?.allEpisode ?? [];
</script>

<h2>Gelöste Rätsel:</h2>
{#each episodes as episode}
	<a href="/episodes/{episode.episodeNumber}">{episode.question}</a>
{/each}

<h2>Gestellte Rätsel:</h2>
