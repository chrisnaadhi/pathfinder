<script>
	let placeholder = 'Hello, svelte!';
</script>

<section>
	<h3>Edit Konten Halaman Depan</h3>
	<form action="" method="POST">
		<div class="div-form">
			<label for="deskripsi-utama">Deskripsi Utama:</label>
			<textarea name="deskripsi-utama" id="deskripsi-utama" cols="30" rows="10" />
		</div>
		<div class="div-form">
			<label for="deskripsi-pathfinder">Deskripsi Pathfinder:</label>
			<textarea name="deskripsi-pathfinder" id="deskripsi-pathfinder" cols="30" rows="10" />
		</div>
		<div class="mt-3">
			<button type="submit" class="btn dfBg">Update</button>
		</div>
	</form>
</section>

<style>
</style>
