<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ EpisodeById } = data);
	$: item = $EpisodeById.data?.allEpisode[0];
	$: questions = $EpisodeById.data?.allEpisode[0].questions ?? [];
</script>

<svelte:head>
	{#if item}
		<title>Folge {item.number} - {item.title}</title>
	{/if}
</svelte:head>

{#if item?.number}
	<div>
		<button>
			<a href="/episodes/{item.number - 1}">Vorherige Folge</a>
		</button>
	</div>
{/if}
<div>
	<h2 class="text-3xl font-bold my-11 text-center">#{item?.number}</h2>
	{#if item?.number}
		<div>
			<button>
				<a href="/episodes/{item.number + 1}">Nächste Folge</a>
			</button>
		</div>
	{/if}
</div>

{#each questions as question}
	<div class="flex justify-center">
		<div class="flex flex-col max-w-2xl min-w-1/2">
			<p>Frage:</p>
			<h3>{question?.question}</h3>

			<p class="mt-10">Antwort:</p>
			<a class="w-fit" href={question?.answerLink} target="_blank" rel="noreferrer noopener"
				>{question?.answer}</a
			>

			<div class="mt-10">
				{#if question?.solvedBy}
					<p>Gelöst von <a href="/hosts/{question?.solvedBy.name?.toLowerCase()}">{question?.solvedBy.name}</a></p>
				{:else}
					<p>Nicht gelöst.</p>
				{/if}
			</div>
		</div>
	</div>
{/each}
{#if item?.spotifyUrl}
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
