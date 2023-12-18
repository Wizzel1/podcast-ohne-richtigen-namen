<script lang="ts">
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

<nav class="flex justify-around my-5 mx-10">
	<a href="/">Home</a>
	<a href="/episodes">Episoden</a>
	<a href="/ranking">Rangliste</a>
	<a target="_blank" rel="noreferrer noopener" href="https://podcastohnerichtigennamen.de/shop/"
		>Merch Shop</a
	>
	<a target="_blank" rel="noreferrer noopener" href="https://www.patreon.com/podcastohnenamen"
		>Patreon</a
	>
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
