<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	export let data;

	$: ({ number, title, spotifyUrl, questions } = data.episode);

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		multiple: true
	});
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
		<div class="mx-auto max-w-[80%] lg:max-w-[60%] md:min-w-1/2 rounded-xl border" {...$root}>
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
						 px-5 py-5 text-base font-medium leading-none
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
									class="px-5 py-8 w-fit text-blue-400 hover:underline"
									rel="noreferrer noopener"
									target="_blank"
									href={question.answerLink}
								>
									{question.answer}
								</a>
							{:else}
								<p class="px-5 py-8 w-fit">
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

	<!-- <div class="flex flex-col divide-y max-w-[80%] lg:max-w-[60%] md:min-w-1/2"> -->
	<!-- <div class="hs-accordion-group">
			{#if questions}
				{#each questions as question, index}
					{@const accordionId = number + index}
					<div class="hs-accordion" id="hs-basic-heading-{accordionId}">
						<button
							class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
							aria-controls="hs-basic-collapse-{accordionId}"
						>
							<svg
								class="hs-accordion-active:hidden block w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg
							>
							<svg
								class="hs-accordion-active:block hidden w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M5 12h14" /></svg
							>
							Frage #{index + 1} - {question?.question}
						</button>
						<div
							id="hs-basic-collapse-{accordionId}"
							class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
							aria-labelledby="hs-basic-heading-{accordionId}"
						>
							<a
								class="w-fit text-blue-400 mb-8 md:mx-8 hover:underline"
								href={question?.answerLink}
								target="_blank"
								rel="noreferrer noopener">{question?.answer}</a
							>
						</div>
					</div> -->

	<!-- <div class="hs-accordion" id="hs-basic-heading-three">
						<button
							class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
							aria-controls="hs-basic-collapse-three"
						>
							<svg
								class="hs-accordion-active:hidden block w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg
							>
							<svg
								class="hs-accordion-active:block hidden w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M5 12h14" /></svg
							>
							Accordion #3
						</button>
						<div
							id="hs-basic-collapse-three"
							class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
							aria-labelledby="hs-basic-heading-three"
						>
							<p class="text-gray-800 dark:text-gray-200">
								<em>This is the third item's accordion body.</em> It is hidden by default, until the
								collapse plugin adds the appropriate classes that we use to style each element. These
								classes control the overall appearance, as well as the showing and hiding via CSS transitions.
							</p>
						</div>
					</div> -->
	<!-- {/each} -->
	<!-- {/if} -->
	<!-- </div> -->
	<!-- </div> -->
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

<!-- <div class="flex flex-col py-5">
	<p class="text-xl font-medium mb-3">Frage {index + 1}:</p>
	<p class="mb-8 md:mx-8">{question?.question}</p>

	<p class="text-xl font-medium mb-3">Antwort:</p>
	<a
		class="w-fit text-blue-400 mb-8 md:mx-8 hover:underline"
		href={question?.answerLink}
		target="_blank"
		rel="noreferrer noopener">{question?.answer}</a
	>

	<div class="">
		<p class="text-xl font-medium mb-3">Ergebnis:</p>
		{#if question?.solvedBy}
			<p class="md:mx-8">
				Gelöst von <a
					class="text-blue-400 hover:underline"
					href="/hosts/{question?.solvedBy.name?.toLowerCase()}">{question?.solvedBy.name}</a
				>
			</p>
		{:else}
			<p class="md:mx-8">Nicht gelöst.</p>
		{/if}
	</div>
</div> -->
