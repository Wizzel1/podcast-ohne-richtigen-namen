<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { LucideChevronLeft, LucideChevronRight, LucideX } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	export let data;

	$: ({ number, title, spotifyUrl, questions } = data.episode);
	$: ({ totalEpisodeCount } = data);

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({});
</script>

<svelte:head>
	<title>Folge {number} - {title}</title>
</svelte:head>

<h2 class="text-3xl my-11 font-bold text-center">#{number}: {title}</h2>

<div class="flex justify-center my-11">
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
						 transition-colors focus:!ring-0
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
									class="flex text-start px-5 py-6 w-fit text-[#F78208] hover:text-[#f7a308]"
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
							<div class="flex flex-row px-5 py-8">
								{#if question.solvedBy}
									<p>
										Gelöst von
										<a
											class="text-[#F78208] hover:text-[#f7a308]"
											href="/hosts/{question.solvedBy.name}"
										>
											{question.solvedBy?.name}
										</a>
									</p>
								{:else}
									<p>Nicht gelöst.</p>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

<div class="flex flex-row justify-center">
	{#if number > 1}
		<button
			type="button"
			class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#40376C] text-white hover:bg-[#554a8f] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
		>
			<a href="/episodes/{number - 1}"><LucideChevronLeft class="w-4 h-4" /></a>
		</button>
	{/if}

	<button
		type="button"
		class="px-3 mx-2 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent bg-[#40376C] text-white hover:bg-[#554a8f] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
		on:click={async () => {
			const max = totalEpisodeCount;
			const min = 1;
			const random = Math.floor(Math.random() * (max - min + 1)) + min;
			await goto(`/episodes/${random}`);
		}}
	>
		Zufällige Folge
	</button>

	{#if number < totalEpisodeCount}
		<button
			type="button"
			class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#40376C] text-white hover:bg-[#554a8f] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
		>
			<a href="/episodes/{number + 1}"><LucideChevronRight class="w-4 h-4" /></a>
		</button>
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
