<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ EpisodeById } = data);
	$: item = $EpisodeById.data?.allEpisode[0];
</script>

<svelte:head>
	{#if item}
		<title>Folge {item.episodeNumber} - {item.question}</title>
	{/if}
</svelte:head>

{#if item?.episodeNumber}
	<div>
		<button>
			<a href="/episodes/{item.episodeNumber - 1}">Vorherige Folge</a>
		</button>
	</div>
{/if}
<div>
	<h2 class="text-3xl font-bold my-11 text-center">#{item?.episodeNumber}</h2>
	{#if item?.episodeNumber}
		<div>
			<button>
				<a href="/episodes/{item.episodeNumber + 1}">Nächste Folge</a>
			</button>
		</div>
	{/if}
</div>

{#if item}
	<div class="flex justify-center">
		<div class="flex flex-col max-w-2xl min-w-1/2">
			<p>Frage:</p>
			<h3>{item.question}</h3>

			<p class="mt-10">Antwort:</p>
			<a class="w-fit" href={item.answerLink} target="_blank" rel="noreferrer noopener"
				>{item.answer}</a
			>

			<div class="mt-10">
				{#if item.solvedBy}
					<p>Gelöst von <a href="/hosts/{item.solvedBy._id}">{item.solvedBy.name}</a></p>
				{:else}
					<p>Nicht gelöst.</p>
				{/if}
			</div>
			{#if item.spotifyUrl}
				<iframe
					title="Spotify Embed"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/{new URL(item.spotifyUrl)
						.pathname}?utm_source=generator&theme=0"
					width="100%"
					height="152"
					loading="lazy"
					frameBorder="0"
				></iframe>
			{/if}
		</div>
	</div>
{/if}
