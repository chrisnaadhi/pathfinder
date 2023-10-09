<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Tambah Fakultas';
	let back = backButton($page);
</script>

<section>
	<h4 class="dfTx">{placeholder}</h4>
	<a href={back}>&leftarrow;Kembali</a>

	<form action="?/addFakultas" method="POST" use:enhance>
		<div class="div-form">
			<label for="namafakultas">Nama Fakultas:</label>
			<input type="text" name="namafakultas" id="namafakultas" />
		</div>
		<div class="div-form">
			<label for="slug">Identifier Fakultas:</label>
			<input type="text" name="slug" id="slug" />
			<p class="text-xs">Diisi dengan Identifier Fakultas, Contoh: 210</p>
		</div>
		<div class="my-3">
			<button type="submit" class="dfBg btn">Tambah</button>
		</div>
	</form>
</section>

<style>
	form {
		--at-apply: flex flex-col gap-3;
	}

	p {
		--at-apply: italic;
	}
</style>
