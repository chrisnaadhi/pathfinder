<script lang="ts">
	import { page } from '$app/stores';

	let placeholder = 'Hello, svelte!';

	export let data;

	const back = $page.data.url;
	const reduceNew = back.split('/');
	reduceNew.splice(-1);
	const newLink = reduceNew.join('/');

	let title = '';
	let slugValue: HTMLInputElement;

	const handleSlug = () => {
		const value = slugValue.value;
		const modifiedValue = value.toLocaleLowerCase().replace(/\s/g, '-');
		slugValue.value = modifiedValue;
	};
</script>

<section>
	<p>{placeholder} + {data.authData}</p>
	<form action="?/tambah" method="POST">
		<div class="div-form">
			<label for="">Judul</label>
			<input type="text" name="title" bind:value={title} />
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

		<button type="submit">Submit</button>
	</form>
	<div class="py-5">
		<a href={newLink} class="text-violet-5">&leftarrow;Back</a>
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

	button {
		--at-apply: btn bg-violet-5 text-white w-md;
	}
</style>
