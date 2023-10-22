<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	let placeholder = 'Daftar Anggota Umum';
	const back = backButton($page);
	const { getUsers } = data;
</script>

<section>
	<p>{placeholder}</p>
	<a href={back}>&leftarrow;Kembali</a>
	<div class="grid grid-cols-5 gap-3">
		{#each getUsers as user}
			<BaseCard>
				<div class="flex flex-col items-center">
					<img src="/img/default.jpg" class="rounded-full w-20" alt={user.username} />
					<h6>{user.name}</h6>
					<p class="text-xs italic">{user.email}</p>
					<a href="/manage/member/{user.id}" class="btn dfBg w-full mt-5 text-center">Lihat</a>
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
