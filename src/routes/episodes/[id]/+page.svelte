<script lang="ts">
	export let data;

	$: ({ number, title, spotifyUrl, questions } = data.episode);
</script>

<svelte:head>
	<title>Folge {number} - {title}</title>
</svelte:head>

<div class="flex flex-row justify-around my-11">
	<div>
		<button>
			<a href="/episodes/{number - 1}">{'<'}</a>
		</button>
	</div>
	<h2 class="text-3xl font-bold text-center">#{number}</h2>
	<div>
		<div>
			<button>
				<a href="/episodes/{number + 1}">{'>'}</a>
			</button>
		</div>
	</div>
</div>

<div class="flex justify-center">
	<div class="flex flex-col divide-y max-w-[80%] min-w-1/2">
		{#if questions}
			{#each questions as question, index}
				<div class="flex flex-col p-5">
					<p class="text-xl font-medium">Frage {index + 1}:</p>
					<h3>{question?.question}</h3>

					<p class="mt-10">Antwort:</p>
					<a class="w-fit" href={question?.answerLink} target="_blank" rel="noreferrer noopener"
						>{question?.answer}</a
					>

					<div class="mt-10">
						{#if question?.solvedBy}
							<p>
								Gelöst von <a href="/hosts/{question?.solvedBy.name?.toLowerCase()}"
									>{question?.solvedBy.name}</a
								>
							</p>
						{:else}
							<p>Nicht gelöst.</p>
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

{#if spotifyUrl}
	<iframe
		title="Spotify Embed"
		style="border-radius:12px"
		src="https://open.spotify.com/embed/{new URL(spotifyUrl)
			.pathname}?utm_source=generator&theme=0"
		width="100%"
		height="152"
		loading="lazy"
		frameBorder="0"
	></iframe>
{/if}
