<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter.js';

	export let data;

	const { getAllFaculty } = data;
	const back = backButton($page);
</script>

<section>
	<h4>Buat Disiplin baru</h4>
	<a href={back} class="dfTx">&leftarrow;Kembali</a>
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
					{#each getAllFaculty as faculty}
						<option value={faculty.id}>{faculty.facultyValue} - {faculty.facultyName}</option>
					{/each}
				</optgroup>
			</select>
		</div>
		<div class="my-3">
			<button type="submit" class="btn dfBg">Buat</button>
		</div>
	</form>
</section>
