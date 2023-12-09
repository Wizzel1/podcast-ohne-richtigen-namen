<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ EpisodeById } = data);
	$: item = $EpisodeById.data?.allEpisode[0];
</script>

{#if item}
	<h1>{item.question}</h1>
	<a href={item.answerLink} target="_blank" rel="noreferrer noopener">{item.answer}</a>

	{#if item.solvedBy}
		<p>Gelöst von <a href="/hosts/{item.solvedBy._id}">{item.solvedBy.name}</a>  </p>
	{:else}
		<p>Gelöst von niemandem.</p>
	{/if}

	<iframe
		title="Spotify Embed"
		style="border-radius:12px"
		src="https://open.spotify.com/embed/episode/{item.spotifyId}?utm_source=generator&theme=0"
		width="50%"
		height="152"
		frameBorder="0"
		allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		loading="lazy"
	></iframe>
{/if}
