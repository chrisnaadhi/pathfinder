<script lang="ts">
	import { base } from '$app/paths';
	import { trimText } from '$lib/utils/textFormatter';
	import { fade } from 'svelte/transition';

	export let searchValue: string = '';

	let searchResults: any = null;

	const getResults = async () => {
		const result = await fetch(`${base}/api/search?q=${searchValue}`);
		searchResults = await result.json();
	};
</script>

<section>
	<div class="relative z-5">
		<input
			type="search"
			name="searchbox"
			bind:value={searchValue}
			on:keydown={getResults}
			placeholder="Find your path.."
			autocomplete="off"
		/>
		<button type="submit" on:click={getResults}>Cari</button>
	</div>
	<div class="absolute max-w-xl max-h-md overflow-y-scroll overflow-x-hidden">
		{#if searchResults && searchValue}
			<div class="bg-white min-w-xl z-4 pt-5 mt--4 border dfBorder px-2 rounded">
				<div class="w-full">
					{#if searchResults.length > 0}
						{#each searchResults as result}
							<div transition:fade={{ delay: 250, duration: 300 }} class="py-2 text-left">
								<a href="/subjects/{result?.subjects?.subjectSlug}/{result?.id}">
									<h6 class="dfTx">{result?.title}</h6>
								</a>

								<p class="italic text-gray-4">
									{trimText(result.contentDescription, 100)}
									<span>
										<a href="/subjects/{result?.subjects?.subjectSlug}/{result?.id}">
											Selengkapnya &rightarrow;
										</a>
									</span>
								</p>
							</div>
						{/each}
						<div>
							<a href={base + '/search?q=' + searchValue}>Tampilkan hasil lainnya</a>
						</div>
					{:else}
						<p>Pencarian tidak ditemukan</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		--at-apply: max-w-xl ma px-2 md:px-0;
	}

	input {
		--at-apply: pl-4 pr-17 py-4 min-w-full rounded-lg;
	}

	input:focus {
		--at-apply: outline-none;
	}

	button {
		--at-apply: btn dfBg py-2 absolute top-2 right-2;
	}
</style>
