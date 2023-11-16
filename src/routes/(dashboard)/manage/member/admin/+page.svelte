<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';
	import { base } from '$app/paths';

	export let data;

	let placeholder = 'List Administrator';
	const back = backButton($page);
	const { getAdminUser } = data;
</script>

<section>
	<p>{placeholder}</p>
	<a href={back}>&leftarrow;Kembali</a>
	{#if getAdminUser.length > 0}
		<div class="grid grid-cols-5 gap-3">
			{#each getAdminUser as admin}
				<BaseCard>
					<div class="flex flex-col items-center">
						<img
							src={admin.photo === null ? base + '/img/default.jpg' : base + admin?.photo}
							class="rounded-full w-20 h-20 object-cover"
							alt={admin.username}
						/>
						<h6 class=" text-center">{admin.name}</h6>
						<p class="text-xs italic">{admin.email}</p>
						<a href={admin.id} class="btn dfBg w-full mt-5 text-center">Lihat</a>
					</div>
				</BaseCard>
			{/each}
		</div>
	{:else}
		<div class="flex flex-col items-center">
			<img src="illust/undraw_Warning.png" alt="Warning" class="w-sm" />
			<h4 class="text-red">Tidak ada daftar Admin!</h4>
		</div>
	{/if}
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
