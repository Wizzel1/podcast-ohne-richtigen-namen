<script lang="ts">
	export let data;
</script>

{#each data.rankings as ranking}
	<a href="/hosts/{ranking.name.toLowerCase()}">
		<div
			class="flex flex-col justify-around border border-solid rounded p-4 m-0 text-center hover:bg-gray-600"
		>
			<p class="text-xl font-semibold">#{ranking.name}</p>
			<div>
				{ranking.solvedQuestions}
			</div>
		</div>
	</a>
{/each}
