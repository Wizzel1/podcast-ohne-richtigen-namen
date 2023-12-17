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
				<p class="m-0">{item.number}</p>
			</a>
		</li>
	{/each}
</ul>
