<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<div class="flex flex-col items-center mt-4">
	<enhanced:img
		class="max-w-[120px] rounded-xl"
		src="../lib/assets/podcast-ohne-richtigen-namen-logo.jpg"
		alt=""
	/>
	<h1 class="text-xl font-semibold mx-2 my-5">Podcast ohne (richtigen) Namen</h1>
</div>

<nav>
	<div class="flex justify-center mx-10 gap-2">
		<a class:bg-blue-900={$page.url.pathname === '/'} class="hover:bg-blue-900 rounded p-3" href="/"
			>Home</a
		>
		<a
			class:bg-blue-900={$page.url.pathname === '/episodes'}
			class="hover:bg-blue-900 rounded p-3"
			href="/episodes">Episoden</a
		>
		<a
			class:bg-blue-900={$page.url.pathname === '/ranking'}
			class="hover:bg-blue-900 rounded p-3"
			href="/ranking">Rangliste</a
		>
		<a
			class="hover:bg-blue-900 rounded p-3"
			target="_blank"
			rel="noreferrer noopener"
			href="https://podcastohnerichtigennamen.de/shop/">Merch Shop</a
		>
		<a
			class="hover:bg-blue-900 rounded p-3"
			target="_blank"
			rel="noreferrer noopener"
			href="https://www.patreon.com/podcastohnenamen">Patreon</a
		>
	</div>
</nav>

<div class="mx-2 md:mx-10 my-5">
	<slot />
</div>

<footer class="mb-5 text-center">
	Made with 🤍 by
	<a
		target="_blank"
		rel="noreferrer noopener"
		href="https://www.linkedin.com/in/christian-r%C3%B6benack-603940197/">Christian R</a
	>
</footer>
