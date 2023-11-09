<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	import TiptapEditor from '$lib/components/generic/TiptapEditor.svelte';
	import KeywordForm from '$lib/components/items/KeywordForm.svelte';
	import { contentTipTap } from '$lib/utils/dataStore';

	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Membuat Konten Baru';
	let back = backButton($page);
</script>

<section>
	<h4 class="dfTx">{placeholder}</h4>
	<a href={back} class="dfTx">&leftarrow;Kembali</a>
	<form action="?/tambahKonten" method="POST" use:enhance>
		<div class="div-form">
			<label for="title">Judul:</label>
			<input type="text" name="title" required />
		</div>
		<div class="div-form">
			<label for="deskripsi">Deskripsi:</label>
			<textarea name="deskripsi" id="" rows="2" />
		</div>
		<KeywordForm formName="Tags" keywords="" />
		<div class="div-form">
			<label for="contentedit">Konten:</label>
			<TiptapEditor contentState="new" />
			<input type="hidden" name="contents" bind:value={$contentTipTap} />
		</div>

		<div>
			<button type="submit" class="btn dfBg">Create</button>
		</div>
	</form>
</section>

<style>
	label {
		--at-apply: font-semibold;
	}
</style>
