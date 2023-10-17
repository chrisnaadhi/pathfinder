<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
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
		<div class="flex gap-3">
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
	</div>
	<div class="flex justify-between">
		<a href={backUrl} class="dfTx">&leftarrow;Kembali</a>
		<a href={$page.url.toString() + '/new'} class="dfTx">Tambah Konten&rightarrow;</a>
	</div>

	<div class="grid grid-cols-3 gap-2">
		{#each data.contentsList as res}
			<div class="box">
				<h4>{res.title}</h4>
				<p>{res.contentDescription}</p>
				<div class="flex w-full items-center gap-3 text-center">
					<a href={`${$page.url.toString()}/${res.id}`} class="btn dfBg w-full"> Lihat </a>
					<a href={`${$page.url.toString()}/${res.id}/edit`} class="btn dfBgSecond w-full">
						Edit
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}

	.box {
		--at-apply: dfBgThird p-5 rounded;
	}
</style>
