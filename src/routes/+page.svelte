<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Episodes } = data);
	$: items = $Episodes.data?.allEpisode ?? [];
</script>

{#each items as item}
	<div class="episode">
		<h5>{item.question}</h5>
		<a href="/episodes/{item.episodeNumber}">{item.episodeNumber}</a>
	</div>
{/each}

<style>
	.episode {
		margin-bottom: 1rem;
	}
</style>
