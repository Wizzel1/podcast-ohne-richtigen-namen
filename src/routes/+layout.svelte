<script lang="ts">
	import '../app.css';
</script>

<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
	<nav
		class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
		aria-label="Global"
	>
		<div class="flex items-center justify-between">
			<a class="inline-flex items-center gap-x-2 text-xl font-semibold" href="/">
				<enhanced:img
					class="w-20 rounded-xl h-auto"
					src="../lib/assets/podcast-ohne-richtigen-namen-logo.jpg"
					alt="Logo"
				>
					Podcast ohne (richtigen) Namen
				</enhanced:img></a
			>
			<div class="sm:hidden">
				<button
					type="button"
					class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
					data-hs-collapse="#navbar-image-and-text-2"
					aria-controls="navbar-image-and-text-2"
					aria-label="Toggle navigation"
				>
					<svg
						class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line
							x1="3"
							x2="21"
							y1="18"
							y2="18"
						/></svg
					>
					<svg
						class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
				</button>
			</div>
		</div>
		<div
			id="navbar-image-and-text-2"
			class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
		>
			<div
				class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
			>
				<a class="font-medium text-gray-400 hover:text-gray-200" href="/">Home</a>
				<a class="font-medium text-gray-400 hover:text-gray-200" href="/episodes">Episoden</a>
				<a class="font-medium text-gray-400 hover:text-gray-200" href="/ranking">Rangliste</a>
				<a
					class="font-medium text-gray-400 hover:text-gray-200"
					target="_blank"
					rel="noreferrer noopener"
					href="https://podcastohnerichtigennamen.de/shop/">Merch Shop</a
				>
				<a
					class="font-medium text-gray-400 hover:text-gray-200"
					target="_blank"
					rel="noreferrer noopener"
					href="https://www.patreon.com/podcastohnenamen">Patreon</a
				>
			</div>
		</div>
	</nav>
</header>

<div class="mx-2 md:mx-10 my-5">
	<slot />
</div>

<footer class="my-10 text-center">
	Made with 🤍 by
	<a target="_blank" rel="noreferrer noopener" href="https://twitter.com/Wizzel6">Christian R</a>
</footer>
