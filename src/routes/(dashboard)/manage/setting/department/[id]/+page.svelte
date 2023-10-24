<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const back = backButton($page);
	const { departmentData } = data;
</script>

<section>
	<h5>Department Settings</h5>
	<p>Edit departemen</p>
	<div class="my-3">
		<a href={back} class="btn bg-gray-3 text-dark">&leftarrow;Kembali</a>
	</div>
	<form action="?/updateDepartment" method="POST" use:enhance>
		<div class="div-form">
			<label for="departmentname">Nama Departemen: </label>
			<input
				type="text"
				name="departmentname"
				id="departmentname"
				value={departmentData.departmentName}
			/>
		</div>
		<div class="div-form">
			<label for="departmentdescription">Deskripsi: </label>
			<textarea
				name="departmentdescription"
				id="departmentdescription"
				value={departmentData.departmentDescription}
			/>
		</div>
		<div class="div-form">
			<label for="departmenttelephone">Kontak / Telepon: </label>
			<input
				type="tel"
				name="departmenttelephone"
				id="departmenttelephone"
				value={departmentData.telephone}
			/>
		</div>
		<div class="div-form">
			<label for="departmentmail">E-Mail: </label>
			<input type="email" name="departmentmail" id="departmentmail" value={departmentData.email} />
		</div>
		<div class="div-form">
			<label for="departmenturl">Website: </label>
			<input type="text" name="departmenturl" id="departmenturl" value={departmentData.url} />
		</div>
		<div class="flex gap-3 my-3">
			<button type="submit" class="btn dfBg w-full">Update</button>
			<DeleteModal idData={departmentData.id}>
				<p>Yakin ingin menghapus ?</p>
			</DeleteModal>
		</div>
	</form>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
