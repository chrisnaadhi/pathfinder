<script>
	import { base } from '$app/paths';
	import GenericBaseCard from '$lib/components/generic/BaseCard.svelte';
	import { trimText, bulletType } from '$lib/utils/textFormatter';

	export let data;

	let placeholder = 'Halaman Pencarian Pathfinder';
	let keywordValue = '';

	let { collectionList, specialistList, getParameterValue } = data;

	const searchFunction = async () => {
		const fetchData = await fetch(`${base}/api/search?q=${keywordValue}`);
		const getData = await fetchData.json();
		collectionList = await getData.results;
		specialistList = await getData.subjectSpecialist;
		console.log(getData);
	};
</script>

<section>
	<h3>{placeholder}</h3>
	<p>
		Hasil dari pencarian <span class="font-semibold dfTx"
			>"{getParameterValue ?? keywordValue}"</span
		> di Pathfinder
	</p>
	<div class="my-5 flex gap-3">
		<input type="search" class="w-full" bind:value={keywordValue} />
		<button type="submit" class="btn dfBg" on:click={searchFunction}>Cari</button>
	</div>
	<div class="flex gap-3">
		<div class="flex flex-col items-baseline gap-3 mt-5">
			<h5>Topik & Konten :</h5>
			<div class="flex flex-col gap-3">
				{#if collectionList}
					{#each collectionList as collection}
						<div class="dfBgThird rounded px-5 py-3 text-left">
							<div class="flex items-center justify-between gap-3">
								<h4 class="dfTx">{collection.title}</h4>
								<span class={bulletType(collection.subjects.type)}>{collection.subjects.type}</span>
							</div>
							<div>
								<p class="text-gray-6 text-sm font-semibold my-2">
									Subject: <span class="dfBg px-2 rounded">{collection.subjects.subjectName}</span>
								</p>
								<p>
									Pembuat: <a
										href={base + '/librarian/' + collection.creator.username}
										class="dfTx"
									>
										{collection.creator.name}
									</a>
								</p>
								<p class="text-justify text-gray-5 italic">
									{trimText(collection.contentDescription, 125)}
								</p>
							</div>
							<div>
								<p class="text-sm">Keywords: <span class="dfTx">{collection.tag}</span></p>
							</div>
							<div class="flex items-center justify-center text-center my-2 gap-3">
								<a href="{base}/subjects/{collection.subjects.subjectSlug}" class="btn dfBg w-full"
									>Lihat Subjek</a
								>
								<a
									href="{base}/subjects/{collection.subjects.subjectSlug}/{collection.id}"
									class="btn dfBg w-full"
								>
									Lihat Konten
								</a>
							</div>
						</div>
					{/each}
				{:else}
					<h3>
						Hasil pencarian tidak ditemukan karena: <br />
						{#if !getParameterValue}
							<span class="text-red-5">Kata Kunci pencarian kosong</span>
						{:else if !collectionList}
							<span class="text-red-5">Server tidak mendapatkan parameter yang tepat</span>
						{:else}
							<span class="text-red-5">Sistem Bermasalah silahkan hubungi Administrator</span>
						{/if}
					</h3>
				{/if}
			</div>
		</div>
		<div class="flex flex-col items-baseline h-full mt-5 gap-3">
			{#if specialistList}
				<h5>Subject Specialist :</h5>
				{#each specialistList as specialist}
					<div class="dfBgThird rounded flex flex-col items-center p-3 w-55">
						<img
							src={specialist.photo === null ? 'img/default.jpg' : base + specialist.photo}
							alt={specialist.name + 'photo'}
							class="w-20 h-20 rounded-full object-cover"
						/>
						<a href={base + '/librarian/' + specialist.username}>
							<h6>{specialist.name}</h6>
						</a>

						<p class="text-xs italic text-gray-5">{specialist.email}</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		--at-apply: max-w-5xl ma;
	}

	input {
		--at-apply: outline-none border-2;
	}
</style>
