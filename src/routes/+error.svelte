<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="text-center text-violet-5 h-full">
	<Header />
	<section class="mt-5 py-25 flex flex-col items-center justify-center">
		<img src="/illust/undraw_Warning.png" class="w-50" alt={$page.status.toString()} />
		<h1 class="text-9xl">{$page.status}</h1>
		<p class="font-semibold">{$page.error?.message}</p>
		<div class="mt-5">
			<a href="/" class="btn bg-violet text-white">Kembali</a>
		</div>
	</section>
</main>
