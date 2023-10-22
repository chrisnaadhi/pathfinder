<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	let placeholder = 'Daftar Pengelola Subject Specialist';
	const back = backButton($page);
	const { getSubjectSpecialist } = data;
</script>

<section>
	<p>{placeholder}</p>
	<a href={back}>&leftarrow;Kembali</a>
	<div class="grid grid-cols-5 gap-3">
		{#each getSubjectSpecialist as specialist}
			<BaseCard>
				<div class="flex flex-col items-center">
					<img src="/img/default.jpg" class="rounded-full w-20" alt={specialist.username} />
					<h6>{specialist.name}</h6>
					<p class="text-xs italic">{specialist.email}</p>
					<a href="/manage/member/{specialist.id}" class="btn dfBg w-full mt-5 text-center">Lihat</a
					>
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
