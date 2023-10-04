<script>
	import { enhance } from '$app/forms';
</script>

<section>
	<h4>Buat Disiplin baru</h4>
	<a href="/manage/discipline" class="dfTx">&leftarrow;Kembali</a>
	<form action="?/createDiscipline" method="POST" use:enhance>
		<div class="div-form">
			<label for="discipline">Nama Disiplin:</label>
			<input type="text" name="discipline" id="discipline" required />
		</div>
		<div class="div-form">
			<label for="code">Kode Disiplin:</label>
			<input type="text" name="code" id="code" required />
		</div>
		<div class="div-form">
			<label for="description">Deskripsi Disiplin:</label>
			<textarea name="description" id="description" cols="10" rows="5" required />
		</div>
		<div class="div-form">
			<label for="faculty">Fakultas/Studi:</label>
			<select name="faculty" id="faculty">
				<optgroup label="Fakultas">
					<option value="fakultas1">Nama Fakultas 1</option>
					<option value="fakultas2">Nama Fakultas 2</option>
					<option value="fakultas3">Nama Fakultas 3</option>
					<option value="fakultas4">Nama Fakultas 4</option>
					<option value="fakultas5">Nama Fakultas 5</option>
				</optgroup>
				<optgroup label="Program Studi">
					<option value="prodi1">Nama Prodi 1</option>
					<option value="prodi2">Nama Prodi 2</option>
					<option value="prodi1">Nama Prodi 3</option>
				</optgroup>
			</select>
		</div>
		<div class="my-3">
			<button type="submit" class="btn dfBg">Create</button>
		</div>
	</form>
</section>
