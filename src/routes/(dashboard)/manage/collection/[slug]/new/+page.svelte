<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	let placeholder = 'Hello, svelte!';

	export let data;

	const back = $page.data.url;
	const reduceNew = back.split('/');
	reduceNew.splice(-1);
	const newLink = reduceNew.join('/');

	let slugValue: HTMLInputElement;

	const handleSlug = () => {
		const value = slugValue.value;
		const modifiedValue = value.toLocaleLowerCase().replace(/\s/g, '-');
		slugValue.value = modifiedValue;
	};
</script>

<section>
	<h4 class="dfTx">Koleksi Baru</h4>
	<form action="?/tambah" method="POST" use:enhance>
		<div class="div-form">
			<label for="title">Nama Koleksi:</label>
			<input type="text" name="title" required />
		</div>

		<div class="div-form">
			<label for="slug">Slug:</label>
			<input type="text" name="slug" bind:this={slugValue} on:input={handleSlug} required />
		</div>

		<div class="div-form">
			<label for="status">Status:</label>
			<select name="status" id="content-type" required>
				<option value="active">Active</option>
				<option value="inactive">Inactive</option>
				<option value="pending">Pending</option>
			</select>
		</div>

		<div class="div-form">
			<label for="deskripsi">Deskripsi:</label>
			<textarea name="deskripsi" id="" cols="30" rows="10" required />
		</div>

		<input type="hidden" name="val" bind:value={$page.params.id} />

		<button type="submit" class="default-button">Submit</button>
	</form>
	<div class="py-5">
		<a href={newLink} class="btn dfBgThird dfTx">&leftarrow;Back</a>
	</div>
</section>

<style>
	section {
		--at-apply: max-w-lg;
	}

	form {
		--at-apply: flex flex-col gap-3;
	}
</style>
