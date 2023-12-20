<script lang="ts">
	export let data;

	$: ({ episodes } = data);
</script>

<div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 gap-4">
	{#each episodes as item}
		<a
			class="flex flex-col justify-between border-2 shadow-sm rounded-xl p-4 md:p-5 border-gray-500"
			href="/episodes/{item.number}"
		>
			<h3 class="text-lg font-bold text-gray-800 dark:text-white">
				#{item.number} |
				{item.title}
			</h3>
			<!-- <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
		  Card subtitle
		</p> -->
			{#if item.questions}
				{#each item.questions as question}
					<p class="mt-2 text-gray-500 dark:text-gray-400">
						{question.question}
					</p>
				{/each}
			{/if}
			<div
				class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
			>
				Zur Folge
				<svg
					class="flex-shrink-0 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
				>
			</div>
		</a>

		<!-- <li>
			<a
				class="block p-4 m-5 border-2 border-solid rounded-md hover:bg-sky-700 hover:cursor-pointer hover:no-underline"
				href="/episodes/{item.number}"
			>
				<p class="text-lg font-medium m-0">#{item.number} {item.title}</p>
				{#if item.questions}
					{#each item.questions as question}
						<p class="text-sm font-normal mt-2">{question.question}</p>
					{/each}
				{/if}
			</a>
		</li> -->
	{/each}
</div>
