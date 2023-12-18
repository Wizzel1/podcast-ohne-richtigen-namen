<script lang="ts">
	export let data;

	$: ({ episodes } = data);
</script>

<ul role="list">
	{#each episodes as item}
		<li>
			<a
				class="block p-4 m-5 border border-solid border-stone-400 rounded-md hover:bg-sky-700 hover:cursor-pointer hover:no-underline"
				href="/episodes/{item.number}"
			>
				<p class="text-lg font-medium m-0">#{item.number} {item.title}</p>
				{#if item.questions}
					{#each item.questions as question}
						<p class="text-md font-normal mt-2">{question.question}</p>
					{/each}
				{/if}
			</a>
		</li>
	{/each}
</ul>
