<script>
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let name = 'Collection';
	let displayCard = ['One', 'Two', 'Three', 'Four'];
	let titleForm = '';
	let descForm = '';

	function submitCollection() {
		let collectionData = {};
		collectionData.title = titleForm;
		collectionData.description = descForm;
		localStorage.setItem(
			`collections-` + Number(localStorage.length) + 1,
			JSON.stringify(collectionData)
		);
	}
</script>

<section>
	<h1 class="text-fuchsia-5">{name}</h1>
	<table>
		<thead>
			<th>No.</th>
			<th>Title</th>
			<th>Description</th>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Title 1</td>
				<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, necessitatibus!</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Title 2</td>
				<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quaerat!</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Title 3</td>
				<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, fugit!</td>
			</tr>
		</tbody>
	</table>
	<div>
		<form on:submit|preventDefault={submitCollection}>
			<div class="flex flex-col">
				<label for="title">Title: </label>
				<input type="text" name="title" id="title" bind:value={titleForm} />
			</div>
			<div class="flex flex-col">
				<label for="description">Description: </label>
				<textarea name="description" id="description" bind:value={descForm} />
			</div>
			<button type="submit" class="btn bg-fuchsia text-white my-3">Add</button>
		</form>
	</div>
	<div class="flex gap-2">
		{#each displayCard as display}
			<BaseCard>
				<h4>{display}'s Collection</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non necessitatibus cum laborum
					iure veritatis velit, itaque similique, asperiores repudiandae laudantium in sed
					accusantium est sit.
				</p>
			</BaseCard>
		{/each}
	</div>
	<div class="my-4">
		<a class="btn bg-fuchsia-5 text-white" href="/manage/collection/new">+ New Collection</a>
	</div>
</section>

<style>
</style>
