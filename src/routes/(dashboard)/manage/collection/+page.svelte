<script>
	// @ts-nocheck
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let name = 'Collection';
	let displayCard = ['One', 'Two', 'Three', 'Four'];

	export let data;
	$: listData = data;
</script>

<section>
	<h1 class="text-violet-5">{name}</h1>
	<table>
		<thead>
			<th>No.</th>
			<th>Title</th>
			<th>Description</th>
		</thead>
		<tbody>
			{#each listData.data as reps, i}
				<tr>
					<td>{i + 1}</td>
					<td>{reps.title}</td>
					<td>{reps.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>

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
		<a class="btn bg-violet-5 text-white" href="/manage/collection/new">+ New Collection</a>
	</div>
</section>

<style>
</style>
