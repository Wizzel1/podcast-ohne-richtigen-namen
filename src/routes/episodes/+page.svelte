<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ AllEpisodes } = data);
	$: episodes = $AllEpisodes.data?.allEpisode ?? [];
</script>

<svelte:head>
	<title>Po(r)N Episoden</title>
</svelte:head>

<div class="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-5">
	{#each episodes as episode, i}
		<a class="w-full" href="/episodes/{episode.number}">
			<div class="flex border rounded-md justify-center">
				<p class="m-0 p-4">{episode.title}</p>
			</div>
		</a>
		<!-- {@const firstItem = episode}
		{@const lastItem = episodeList[episodeList.length - 1]}
		<a class="w-full" href="/episodes/{firstItem.episodeNumber}-{lastItem.episodeNumber}">
			<div class="flex border rounded-md justify-center">
				<p class="m-0 p-4">{firstItem.episodeNumber} - {lastItem.episodeNumber}</p>
			</div>
		</a> -->
	{/each}
</div>
{JSON.stringify($AllEpisodes, null, 2)}
<div class="w-full flex justify-center">
	<button class="w-auto" on:click={async () => AllEpisodes.loadNextPage({ limit: 2 })}
		>Load more</button
	>
</div>
