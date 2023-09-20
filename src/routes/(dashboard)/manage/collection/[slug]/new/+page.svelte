<script lang="ts">
	import { page } from '$app/stores';
	import { slugifyText } from '$lib/utils/textFormatter.js';

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
	<p>{placeholder} + {data.userData?.email}</p>
	<form action="?/tambah" method="POST">
		<div class="div-form">
			<label for="">Judul</label>
			<input type="text" name="title" />
		</div>

		<div class="div-form">
			<label for="">Slug</label>
			<input type="text" name="slug" bind:this={slugValue} on:input={handleSlug} />
		</div>

		<div class="div-form">
			<label for="">Status</label>
			<select name="status" id="content-type">
				<option value="active">Active</option>
				<option value="inactive">Inactive</option>
				<option value="pending">Pending</option>
			</select>
		</div>

		<input type="hidden" name="val" bind:value={$page.params.id} />

		<button type="submit" class="default-button">Submit</button>
	</form>
	<div class="py-5">
		<a href={newLink} class="dfTx">&leftarrow;Back</a>
	</div>

	<pre>{data.param.id}</pre>
</section>

<style>
	section {
		--at-apply: max-w-lg;
	}

	form {
		--at-apply: flex flex-col gap-3;
	}
</style>
