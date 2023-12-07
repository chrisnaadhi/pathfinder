<script>
	import { base } from '$app/paths';
	import { trimText, bulletType } from '$lib/utils/textFormatter';

	export let data;

	let placeholder = 'Halaman Pencarian Pathfinder';
	const { collectionList, getParameterValue } = data;
</script>

<section>
	<h3>{placeholder}</h3>
	<div class="flex gap-3 mt-5">
		<div class="flex flex-col gap-3">
			{#if collectionList.length > 0}
				<p>Konten di Pathfinder</p>
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
								Pembuat: <a href={base + '/librarian/' + collection.creator.username} class="dfTx">
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
					{:else}
						<span class="text-red-5">Sistem Bermasalah silahkan hubungi Administrator</span>
					{/if}
				</h3>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		--at-apply: max-w-3xl ma;
	}
</style>
