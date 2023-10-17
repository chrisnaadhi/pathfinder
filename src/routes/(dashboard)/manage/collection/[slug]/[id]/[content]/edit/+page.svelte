<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { backButton } from '$lib/utils/textFormatter';
	import KeywordForm from '$lib/components/items/KeywordForm.svelte';
	import TiptapEditor from '$lib/components/generic/TiptapEditor.svelte';
	import { contentTipTap } from '$lib/utils/dataStore';

	export let data;

	const { selectedContent } = data;
	const back = backButton($page);
</script>

<section>
	<h4 class="dfTx">Edit {selectedContent.title}</h4>
	<a href={back} class="dfTx">&leftarrow;Kembali</a>
	<form action="?/tambahKonten" method="POST" use:enhance>
		<div class="div-form">
			<label for="title">Judul:</label>
			<input type="text" name="title" required value={selectedContent.title} />
		</div>
		<div class="div-form">
			<label for="deskripsi">Deskripsi:</label>
			<textarea name="deskripsi" id="" rows="2" value={selectedContent.contentDescription} />
		</div>
		<KeywordForm formName="Tags" keywords={selectedContent.tag} />
		<div class="div-form">
			<label for="contentedit">Konten:</label>
			<TiptapEditor />
			<input type="hidden" name="contents" bind:value={$contentTipTap} />
		</div>
		<div>
			<button type="submit" class="btn dfBg">Update</button>
			<a href={back} class="btn bg-gray-2">&leftarrow;Kembali</a>
		</div>
	</form>
</section>
