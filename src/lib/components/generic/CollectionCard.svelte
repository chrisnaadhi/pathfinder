<script lang="ts">
	import { formatDescription } from '$lib/utils/textFormatter';

	export let title: string | null;
	export let description: string | null;
	export let slug: string | null;
</script>

<section class="bg-violet-1 text-violet-7 rounded px-5 py-3 w-full flex flex-col justify-between">
	<h6>{title}</h6>
	<p class="text-justify text-sm">{formatDescription(description)}</p>
	<a href={slug}>
		<button class="default-button my-2 text-sm w-full">Lihat</button>
	</a>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
