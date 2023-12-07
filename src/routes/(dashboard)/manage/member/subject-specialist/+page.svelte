<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';
	import { base } from '$app/paths';

	export let data;

	let placeholder = 'Daftar Pengelola Subject Specialist';
	const back = backButton($page);
	const { getSubjectSpecialist } = data;
</script>

<section>
	<p>{placeholder}</p>
	<a href={back}>&leftarrow;Kembali</a>
	{#if getSubjectSpecialist.length > 0}
		<div class="grid grid-cols-5 gap-3">
			{#each getSubjectSpecialist as specialist}
				<BaseCard>
					<div class="flex flex-col items-center justify-center text-center">
						<img
							src={specialist?.photo === null
								? base + '/img/default.jpg'
								: base + specialist?.photo}
							class="rounded-full w-20 h-20 object-cover"
							alt={specialist.username}
						/>
						<p class="font-semibold">{specialist.name}</p>
						<p class="text-xs italic">{specialist.email}</p>
						<a href={specialist.id} class="btn dfBg w-full mt-5 text-center">Lihat</a>
					</div>
				</BaseCard>
			{/each}
		</div>
	{:else}
		<div class="flex flex-col items-center">
			<img src={base + '/illust/undraw_Warning.png'} alt="Warning" class="w-sm" />
			<h4 class="text-red">Tidak ada ditemukan data anggota Subjek!</h4>
		</div>
	{/if}
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
