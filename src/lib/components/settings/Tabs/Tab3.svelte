<script>
	import AddModal from '$lib/components/generic/AddModal.svelte';

	let placeholder = 'Faculty Settings';
</script>

<section>
	<div class="flex items-center justify-between">
		<h3>{placeholder}</h3>
		<AddModal>
			<h5>Tambah Fakultas</h5>
			<form action="?/addFakultas" method="POST">
				<div class="div-form">
					<label for="namafakultas">Nama Fakultas:</label>
					<input type="text" name="namafakultas" id="namafakultas" />
				</div>
				<div class="div-form">
					<label for="slug">Identifier Fakultas:</label>
					<input type="text" name="slug" id="slug" />
					<p class="text-xs">
						Diisi dengan Unique Identifier Fakultas (tidak boleh duplikat), Contoh: 210
					</p>
				</div>
				<div class="my-3">
					<button type="submit" class="dfBg btn">Tambah</button>
				</div>
			</form>
		</AddModal>
	</div>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		--at-apply: dfBgSecond min-h-screen p-5;
	}

	form {
		--at-apply: flex flex-col gap-3;
	}
</style>
