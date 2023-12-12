<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ AllEpisodes } = data);
	$: episodes = $AllEpisodes.data?.allEpisode ?? [];

	$: chunkedEpisodes = chunkify(episodes);

	function chunkify(data: { episodeNumber: number | null }[]) {
		const chunkedEpisodes = [];
		for (let i = 0; i < data.length; i += 10) {
			chunkedEpisodes.push(data.slice(i, i + 10));
		}
		return chunkedEpisodes;
	}
</script>

<svelte:head>
	<title>Po(r)N Episoden</title>
</svelte:head>

<div class="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-5">
	{#each chunkedEpisodes as episodeList, index}
		{@const firstItem = episodeList[0]}
		{@const lastItem = episodeList[episodeList.length - 1]}
		<a class="w-full" href="/episodes/{firstItem.episodeNumber}-{lastItem.episodeNumber}">
			<div class="flex border rounded-md justify-center">
				<p class="m-0 p-4">{firstItem.episodeNumber} - {lastItem.episodeNumber}</p>
			</div>
		</a>
	{/each}
</div>

<!-- <div class="w-full flex justify-center">
	<button class="w-auto" on:click={async () => AllEpisodes.loadNextPage({ limit: 2, offset: 0 })}
		>Load more</button
	>
</div> -->
