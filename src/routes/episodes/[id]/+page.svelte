<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ EpisodeById } = data);
	$: item = $EpisodeById.data?.allEpisode[0];
</script>

{#if item}
	<div class="flex flex-col place-content-center my-8 sm:mx-5 mx-20">
		<h3 class="block">{item.question}</h3>

		<p class="m-0">Antwort:</p>
		<a href={item.answerLink} target="_blank" rel="noreferrer noopener">{item.answer}</a>

		{#if item.solvedBy}
			<p>Gelöst von <a href="/hosts/{item.solvedBy._id}">{item.solvedBy.name}</a></p>
		{:else}
			<p>Gelöst von niemandem.</p>
		{/if}

		<iframe
			title="Spotify Embed"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/episode/{item.spotifyId}?utm_source=generator&theme=0"
			width="50%"
			height="152"
			loading="lazy"
			frameBorder="0"
		></iframe>
	</div>
{/if}
