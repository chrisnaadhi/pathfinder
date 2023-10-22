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
					<img
						src={admin.photo === null ? '/img/default.jpg' : admin?.photo}
						class="rounded-full w-20 h-20 object-cover"
						alt={admin.username}
					/>
					<h6 class=" text-center">{admin.name}</h6>
					<p class="text-xs italic">{admin.email}</p>
					<a href="/manage/member/{admin.id}" class="btn dfBg w-full mt-5 text-center">Lihat</a>
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
