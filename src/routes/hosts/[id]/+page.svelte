<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ QuestionByAuthor } = data);
	$: questions = $QuestionByAuthor.data?.allQuestion ?? [];
</script>

<h2>Gelöste Rätsel:</h2>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
	{#each questions as question}
		<a
			class="flex flex-col justify-around border border-solid rounded p-4 m-0 text-center hover:bg-gray-600"
			href="/episodes/{question._id}"
		>
			<!-- <p class="text-xl font-semibold">#{question.number}</p> -->
			<div>
				{question.question}
			</div>
		</a>
	{/each}
</div>

<h2>Gestellte Rätsel:</h2>
