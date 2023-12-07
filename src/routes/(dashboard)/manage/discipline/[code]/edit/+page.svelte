<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { getAllFaculty, disciplineData } = data;

	const back = backButton($page);
</script>

<section>
	<h3 class="dfTx">{disciplineData.disciplineName}</h3>
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
					{#each getAllFaculty as faculty}
						<option value={faculty.id}>{faculty.facultyValue} - {faculty.facultyName}</option>
					{/each}
				</optgroup>
			</select>
		</div>
		<div class="my-3 flex flex-row gap-3 text-center">
			<a href={back} class="btn bg-gray-2 text-dark w-full">&leftarrow;Kembali</a>
			<button type="submit" class="btn dfBg w-full">Update</button>
			<DeleteModal>
				<p>Anda yakin ingin menghapus ?</p>
			</DeleteModal>
		</div>
	</form>
</section>
