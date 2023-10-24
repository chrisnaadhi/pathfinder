<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	const { getDepartment } = data;
	const back = backButton($page);
</script>

<section>
	<h3>Department List</h3>
	<div class="flex justify-between my-5">
		<a href={back} class="btn bg-gray-3 text-dark">&leftarrow;Kembali</a>
		<a href={$page.url.pathname + '/new'} class="btn dfBg">&plus;Tambah Baru</a>
	</div>
	<div class="grid grid-cols-3 gap-3">
		{#each getDepartment as department}
			<BaseCard>
				<h5>{department.departmentName}</h5>
				<p>{department.departmentDescription}</p>
				<div class="mt-5 flex text-center">
					<a href="{$page.url.pathname}/{department.id}" class="btn dfBg w-full">Edit</a>
				</div>
			</BaseCard>
		{/each}
	</div>
</section>

<style>
	p {
		--at-apply: italic text-sm;
	}
</style>
