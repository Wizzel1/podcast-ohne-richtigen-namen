<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ PostsByAuthor } = data);
	$: episodes = $PostsByAuthor.data?.allEpisode ?? [];
</script>

{#each episodes as episode}
    <p>{episode.question}</p>
{/each}
