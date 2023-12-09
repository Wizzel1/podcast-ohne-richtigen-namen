<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Hosts } = data);
	$: hosts = $Hosts.data?.allHost ?? [];
</script>

{#each hosts as host}
	<a href="/hosts/{host._id}">{host.name}</a>
{/each}
