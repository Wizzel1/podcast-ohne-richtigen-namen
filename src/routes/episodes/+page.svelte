<script lang="ts">
	export let data;

	$: ({ episodes } = data);

	$: chunkedEpisodes = chunkify(episodes);

	function chunkify(data: { number: number | null }[]) {
		const chunkedEpisodes = [];
		for (let i = 0; i < data.length; i += 10) {
			const index = i == 1 ? i - 1 : i;
			chunkedEpisodes.push(data.slice(index, i + 10));
		}
		return chunkedEpisodes;
	}
</script>

<svelte:head>
	<title>Po(r)N Episoden</title>
</svelte:head>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 m-5">
	{#each chunkedEpisodes as episodeList}
		{@const firstItem = episodeList[0]}
		{@const lastItem = episodeList[episodeList.length - 1]}
		<a class="w-full" href="/episodes/{firstItem.number}-{lastItem.number}">
			<div class="flex border-2 rounded-md justify-center">
				<p class="m-0 p-4">{firstItem.number} - {lastItem.number}</p>
			</div>
		</a>
	{/each}
</div>

<!-- <div class="w-full flex justify-center">
	<button class="w-auto" on:click={async () => AllEpisodes.loadNextPage({ limit: 2, offset: 0 })}
		>Load more</button
	>
</div> -->
