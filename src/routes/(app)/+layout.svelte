<script>
	import { page } from '$app/stores';
	import { fade, fly, slide } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import Welcome from '$lib/components/home/Welcome.svelte';

	let name = 'Lantera';
	export let data;

	const { getDeskripsiUtama } = data;
</script>

<main in:fade={{ delay: 100, duration: 500 }}>
	<Header state={data.userState} />
	{#key data.url}
		<div in:fade={{ delay: 500, duration: 500 }} out:fly={{ y: 50, duration: 400 }}>
			{#if $page.url.pathname === '/'}
				<section class="dfBgThird w-full pt-10">
					<Welcome {name} description={getDeskripsiUtama?.contents} />
				</section>
			{/if}
			<section class="mt-20 mb-5 px-5 xl:px-0">
				<slot />
			</section>
		</div>
	{/key}
</main>

<style>
	main {
		--at-apply: ma text-center;
	}
</style>
