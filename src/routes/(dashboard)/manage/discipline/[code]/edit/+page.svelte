<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	let placeholder = 'Edit your Discipline here';
	const { disciplineData } = data;
	const back = backButton($page);
</script>

<section>
	<p>{placeholder}</p>
	<a href={back}>&leftarrow;Kembali</a>
	<form action="?/updateData" method="POST" use:enhance>
		<div class="div-form">
			<label for="discipline">Nama Disiplin:</label>
			<input
				type="text"
				name="discipline"
				id="discipline"
				required
				value={disciplineData.disciplineName}
			/>
		</div>
		<div class="div-form">
			<label for="code">Kode Disiplin:</label>
			<input type="text" name="code" id="code" required value={disciplineData.code} />
		</div>
		<div class="div-form">
			<label for="description">Deskripsi Disiplin:</label>
			<textarea
				name="description"
				id="description"
				cols="10"
				rows="5"
				required
				value={disciplineData.disciplineDescription}
			/>
		</div>
		<div class="div-form">
			<label for="faculty">Fakultas/Studi:</label>
			<select name="faculty" id="faculty" value={disciplineData.faculty}>
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
			<button type="submit" class="btn dfBg">Update</button>
		</div>
	</form>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
