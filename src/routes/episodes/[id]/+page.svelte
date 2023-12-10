<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ EpisodeById } = data);
	$: item = $EpisodeById.data?.allEpisode[0];
</script>

{#if item}
	<div class="episode-body">
		<h3>{item.question}</h3>
		
		<p>Antwort:</p>
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

<style>
	.episode-body {
		margin-left: 3rem;
		margin-right: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.episode-body h1 {
		margin: 0;
	}

	.episode-body p {
		margin: 0;
	}

	.episode-body iframe {
		margin-top: 1rem;
	}
</style>
