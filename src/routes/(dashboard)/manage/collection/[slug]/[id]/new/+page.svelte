<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	import TiptapEditor from '$lib/components/generic/TiptapEditor.svelte';
	import { contentTipTap } from '$lib/utils/dataStore';

	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Membuat Konten Baru';
	let back = backButton($page);
</script>

<section>
	<p>{placeholder}</p>
	<form action="?/tambahKonten" method="POST" use:enhance>
		<div class="div-form">
			<label for="title">Judul:</label>
			<input type="text" name="title" required />
		</div>
		<div class="div-form">
			<label for="deskripsi">Deskripsi:</label>
			<textarea name="deskripsi" id="" rows="2" />
		</div>
		<div class="div-form">
			<label for="contentedit">Konten:</label>
			<TiptapEditor />
			<input type="hidden" name="contents" bind:value={$contentTipTap} />
		</div>
		<div>
			<button type="submit" class="btn dfBg">Create</button>
		</div>
	</form>
	<a href={back}>Kembali</a>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
