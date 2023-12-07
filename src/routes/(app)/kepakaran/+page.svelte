<script>
	import { base } from '$app/paths';
	import GenericBaseCard from '$lib/components/generic/BaseCard.svelte';
</script>

<section class="max-w-6xl ma text-justify">
	<h1 class="text-center">Data Kepakaran di Universitas Padjadjaran</h1>
	<div class="grid grid-cols-3 gap-4 my-5">
		{#each Array(30) as item, number}
			<GenericBaseCard>
				<div class="flex flex-col items-center">
					<img src={base + '/img/default.jpg'} class="rounded-full w-25" alt="" />
					<h4>Nama Lengkap</h4>
					<h6>Ahli Informasi {number + 1}</h6>
					<p>Fakultas Terapan</p>
					<p>email@unpad.ac.id</p>
				</div>
			</GenericBaseCard>
		{/each}
	</div>
</section>
