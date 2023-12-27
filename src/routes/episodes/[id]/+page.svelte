<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	export let data;

	$: ({ number, title, spotifyUrl, questions } = data.episode);

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({});
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
	<h2 class="text-3xl font-bold text-center">#{number} {title}</h2>
	<div>
		<div>
			<button>
				<a href="/episodes/{number + 1}">{'>'}</a>
			</button>
		</div>
	</div>
</div>

<div class="flex justify-center">
	{#if questions}
		<div
			class="mx-auto max-w-[90%] lg:max-w-[60%] md:min-w-1/2 rounded-xl border-2 border-gray-600 divide-y-2 divide-gray-600"
			{...$root}
		>
			{#each questions as question, i}
				{@const id = `item-${i}`}
				<div
					use:melt={$item(id)}
					class="overflow-hidden transition-colors first:rounded-t-xl
			  last:rounded-b-xl"
				>
					<h2 class="flex">
						<button
							use:melt={$trigger(id)}
							class="flex flex-1 cursor-pointer items-center justify-between
						 px-5 py-5 text-base font-medium leading-none text-start
						 transition-colors hover:bg-neutral-800 focus:!ring-0
						focus-visible:text-magnum-800"
						>
							Frage #{i + 1} - {question?.question}
						</button>
					</h2>
					{#if $isSelected(id)}
						<div
							class="overflow-hidden bg-neutral-800 text-sm"
							use:melt={$content(id)}
							transition:slide
						>
							{#if question.answerLink}
								<a
									class="flex text-start px-5 py-6 w-fit text-blue-400 hover:underline"
									rel="noreferrer noopener"
									target="_blank"
									href={question.answerLink}
								>
									{question.answer}
								</a>
							{:else}
								<p class="px-5 py-6 w-fit">
									{question.answer}
								</p>
							{/if}
							<div class="px-5 py-8">
								<p>Gelöst von</p>
								{question.solvedBy?.name}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

{#if spotifyUrl}
	<div class="flex justify-center my-11">
		<iframe
			title="Spotify Embed"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/{new URL(spotifyUrl)
				.pathname}?utm_source=generator&theme=0"
			width="80%"
			height="152"
			loading="lazy"
			frameBorder="0"
		></iframe>
	</div>
{/if}
