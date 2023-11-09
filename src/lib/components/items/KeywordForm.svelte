<script lang="ts">
	export let formName: string;
	export let keywords: string | null;

	let keyword: string = '';
	let keywordList = keywords === null ? [] : keywords.length > 0 ? keywords?.split(',') : [];

	const enterKey = (event: KeyboardEvent) => {
		if (keywordList.length > 0 && keyword === null) {
			alert('Keyword kosong!');
		} else if (event.key === 'Enter') {
			event.preventDefault();
			if (keyword.length > 0) {
				keywordList.push(keyword);
				keywordList = keywordList;
				keywords = keywordList.join(',');
				keyword = '';
			} else {
				keyword = '';
			}
		}
	};

	const deleteKeyword = (iteration: number) => {
		keywordList?.splice(iteration, 1);
		keywordList = keywordList;
		keywords = keywordList?.join(',');
	};
</script>

<div class="div-form">
	<label for="keywords">{formName}:</label>
	<input
		type="text"
		name="keyword"
		id="keyword"
		bind:value={keyword}
		on:keypress|stopPropagation={enterKey}
	/>
	<div class="flex gap-2 mt-2">
		{#each keywordList as val, i}
			<button class="keyword-label" on:click|preventDefault={() => deleteKeyword(i)}>{val}</button>
		{/each}
	</div>
	{#if keywords?.length === 0}
		<p>Tekan Enter untuk menambahkan kategori</p>
	{:else}
		<p class="italic text-sm text-red-6">Klik label untuk menghapus keyword</p>
	{/if}

	<input type="hidden" name="keywords" bind:value={keywords} />
</div>

<style>
	p {
		--at-apply: italic;
	}
  .keyword-label {
		--at-apply: bg-blue px-3 rounded text-white hover:(bg-red);
	}
</style>
