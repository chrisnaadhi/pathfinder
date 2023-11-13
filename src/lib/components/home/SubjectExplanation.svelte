<script lang="ts">
	export let description: string | null | undefined;

	let feature = [
		{
			id: 1,
			name: 'Fitur 1',
			img: '/illust/undraw_My_personal_files.png',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam id ad quasi? Nemo expedita maiores suscipit quasi fugit consequatur!'
		},
		{
			id: 2,
			name: 'Fitur 2',
			img: '/illust/undraw_People_search.png',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut, amet corporis illum animi temporibus voluptate itaque fugit at autem!'
		},
		{
			id: 3,
			name: 'Fitur 3',
			img: '/illust/undraw_Instant_support.png',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis a officia ipsam temporibus, itaque odio. Laboriosam repellendus a odio quibusdam.'
		}
	];
</script>

<section>
	<h3>Apa itu <span class="lantera">Lantera</span> ?</h3>
	<div class="flex flex-col items-center justify-center md:flex-row">
		<div class="w-full flex justify-center">
			<img src="/illust/undraw_Search_engines.png" alt="" class="w-150" />
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
				<h5>{feat.name}</h5>
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
