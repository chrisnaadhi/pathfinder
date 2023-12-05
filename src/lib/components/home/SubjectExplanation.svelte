<script lang="ts">
	import { base } from '$app/paths';

	export let description: string | null | undefined;

	let feature = [
		{
			id: 1,
			name: 'Daftar Subjek',
			slug: 'subjects',
			img: `${base}/illust/undraw_My_personal_files.png`,
			deskripsi:
				'Cari dan temukan berbagai topik dalam subjek yang berisi mengenai pembahasan dan daftar tautan mengenai subjek tertentu yang dapat digunakan untuk keperluan pembelajaran dan penelitian.'
		},
		{
			id: 2,
			name: 'Data Kepakaran',
			slug: 'kepakaran',
			img: `${base}/illust/undraw_People_search.png`,
			deskripsi:
				'Data kepakaran juga terdapat di situs Pathfinder, dimana anda bisa menemukan berbagai ahli di bidangnya masing-masing.'
		},
		{
			id: 3,
			name: 'Konten Terkurasi',
			slug: 'librarian',
			img: `${base}/illust/undraw_Instant_support.png`,
			deskripsi:
				'Kurasi konten dilakukan oleh pustakawan ahli yang sudah mempelajari berbagai subjek sehingga dapat menyusun daftar sumber referensi dari masing-masing subjek.'
		}
	];
</script>

<section>
	<h3>Apa itu <span class="lantera">Lantera</span> ?</h3>
	<div class="flex flex-col items-center justify-center md:flex-row">
		<div class="w-full flex justify-center">
			<img src="{base}/illust/undraw_Search_engines.png" alt="" class="w-150" />
		</div>
		<div class="w-full">
			<h5>Web-based Pathfinder</h5>
			<p class="text-justify">
				{description ??
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cupiditate dolorem quo esse deserunt molestiae error, consequuntur natus reprehenderit omnis quisquam recusandae autem. Aliquam laborum impedit a facere. Velit, praesentium.'}
			</p>

			<div class="flex gap-3 py-5">
				<a href="/#" class="w-full">
					<button class="default-button w-full">Tombol 1</button>
				</a>
				<a href="/#" class="w-full">
					<button class="default-button w-full">Tombol 2</button>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="py-15">
	<h3>Fitur <span class="lantera">Lantera</span></h3>
	<div class="flex flex-col items-center justify-around gap-5 sm:flex-row">
		{#each feature as feat}
			<div class="max-w-75 flex flex-col items-center">
				<img src={feat.img} alt={feat.name} class="h-45" />
				<a href={base + '/' + feat.slug}>
					<h5 class="text-dark hover:dfTx">{feat.name}</h5>
				</a>

				<p class="text-xs">{feat.deskripsi}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		--at-apply: max-w-5xl ma;
	}

	.lantera {
		--at-apply: dfTx;
	}
</style>
