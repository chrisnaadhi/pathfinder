<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Tambah Departemen';
	const back = backButton($page);
</script>

<section>
	<h5>New Department Settings</h5>
	<p>{placeholder}</p>
	<div class="my-3">
		<a href={back} class="btn bg-gray-3 text-dark">&leftarrow;Kembali</a>
	</div>
	<form action="?/tambahDepartment" method="POST" use:enhance>
		<div class="div-form">
			<label for="departmentname">Nama Departemen: </label>
			<input type="text" name="departmentname" id="departmentname" />
		</div>
		<div class="div-form">
			<label for="departmentdescription">Deskripsi: </label>
			<textarea name="departmentdescription" id="departmentdescription" />
		</div>
		<div class="div-form">
			<label for="departmenttelephone">Kontak / Telepon: </label>
			<input type="tel" name="departmenttelephone" id="departmenttelephone" />
		</div>
		<div class="div-form">
			<label for="departmentmail">E-Mail: </label>
			<input type="email" name="departmentmail" id="departmentmail" />
		</div>
		<div class="div-form">
			<label for="departmenturl">Website: </label>
			<input type="text" name="departmenturl" id="departmenturl" />
		</div>
		<div class="flex my-3">
			<button type="submit" class="btn dfBg w-full">Tambah Baru</button>
		</div>
	</form>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
