<script lang="ts">
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	import EditModal from '$lib/components/generic/EditModal.svelte';
	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';

	const backUrl = backButton($page);

	export let data;
</script>

<section>
	<div class="text-center max-w-xl ma">
		<h3>{data.collectionItem.name}</h3>
		<pre>/{data.collectionItem.slug}</pre>
		<p class="text-sm">
			{data.collectionItem.deskripsi}
		</p>
		<EditModal>
			<form action="?/editKonten" method="POST">
				<div class="div-form">
					<label for="namakoleksi">Nama Koleksi:</label>
					<input type="text" name="namakoleksi" value={data.collectionItem.name} />
				</div>
				<div class="div-form">
					<label for="statuskoleksi">Status Koleksi:</label>
					<select name="statuskoleksi" id="statuskoleksi" value={data.collectionItem.status}>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
						<option value="pending">Pending</option>
					</select>
				</div>
				<div class="div-form">
					<label for="deskripsikoleksi">Deskripsi Koleksi: </label>
					<textarea
						name="deskripsikoleksi"
						id="deskripsikoleksi"
						cols="50"
						rows="10"
						value={data.collectionItem.deskripsi}
					/>
				</div>
				<button type="submit" class="btn dfBg">Update</button>
			</form>
		</EditModal>
		<DeleteModal>
			<p>Anda yakin ingin menghapus ini ?</p>
		</DeleteModal>
	</div>
	<div class="flex justify-between">
		<a href={backUrl} class="dfTx">&leftarrow;Kembali</a>
		<a href={$page.url.toString() + '/new'} class="dfTx">Tambah Konten&rightarrow;</a>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each Array(5) as _, i}
			<div class="box">
				<h4>{i + 1}</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid.</p>
			</div>
		{/each}
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}

	.box {
		--at-apply: bg-violet-50 p-5 rounded;
	}
</style>
