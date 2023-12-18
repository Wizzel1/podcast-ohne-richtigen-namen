<script lang="ts">
	import '../app.css';
</script>

<div class="flex flex-col items-center mt-4">
	<img
		class="max-w-[120px] rounded-xl"
		src="https://images.podigee-cdn.net/1400x,sPRLkYRRBW1cKURu4hNSAHa7eCfSJmk0ZX2oahz_yrGs=/https://main.podigee-cdn.net/uploads/u2838/ad6a8a9a-f913-4216-a093-8a9fee6e3d35.jpg"
		alt=""
	/>
	<h1 class="text-xl font-semibold mx-2 my-5">Podcast ohne (richtigen) Namen</h1>
</div>

<nav class="flex justify-around my-5 mx-10">
	<a href="/">Home</a>
	<a href="/episodes">Episoden</a>
	<a target="_blank" rel="noreferrer noopener" href="https://podcastohnerichtigennamen.de/shop/"
		>Merch Shop</a
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
