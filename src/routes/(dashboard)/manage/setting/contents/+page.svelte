<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { deskripsiUtama, deskripsiPathfinder } = data;

	const back = backButton($page);
</script>

<section>
	<h3>Edit Konten Halaman Depan</h3>
	<div class="my-3">
		<a href={back} class="dfBgThird btn">&leftarrow;Kembali</a>
	</div>

	<form action="?/updateContents" method="POST">
		<div class="div-form">
			<label for="deskripsi-utama">Deskripsi Utama:</label>
			<textarea
				name="deskripsi-utama"
				id="deskripsi-utama"
				cols="30"
				rows="10"
				value={deskripsiUtama?.contents}
			/>
		</div>
		<div class="div-form">
			<label for="deskripsi-pathfinder">Deskripsi Pathfinder:</label>
			<textarea
				name="deskripsi-pathfinder"
				id="deskripsi-pathfinder"
				cols="30"
				rows="10"
				value={deskripsiPathfinder?.contents}
			/>
		</div>
		<div class="mt-2">
			<a href={back} class="dfBgThird btn">&leftarrow;Kembali</a>
			<button type="submit" class="btn dfBg">Update</button>
		</div>
	</form>
</section>

<style>
	form {
		--at-apply: flex flex-col gap-3;
	}
</style>
