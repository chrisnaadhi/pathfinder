<script lang="ts">
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import Header from '$lib/components/Header.svelte';

	const back = backButton($page);
</script>

<main class="text-center dfTx h-full">
	<Header state="" />
	<section class="mt-5 py-25 flex flex-col items-center justify-center">
		<img src="/illust/undraw_Warning.png" class="w-50" alt={$page.status.toString()} />
		<h1 class="text-9xl text-red">{$page.status}</h1>
		<p class="text-lg font-semibold">{$page.error?.message}</p>
		<pre>{$page.url}</pre>
		<div class="mt-5">
			<a href={back} class="btn dfBg">Kembali</a>
		</div>
	</section>
</main>
