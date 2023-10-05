<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	let placeholder = 'List Administrator';
	const back = backButton($page);
	const { getAdminUser } = data;
</script>

<section>
	<p>{placeholder}</p>
	<a href={back}>&leftarrow;Kembali</a>
	<div class="grid grid-cols-5 gap-3">
		{#each getAdminUser as admin}
			<BaseCard>
				<div class="flex flex-col items-center">
					<img src="/img/default.jpg" class="rounded-full w-20" alt={admin.username} />
					<h6>{admin.name}</h6>
					<p class="text-xs italic">{admin.email}</p>
				</div>
			</BaseCard>
		{/each}
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
