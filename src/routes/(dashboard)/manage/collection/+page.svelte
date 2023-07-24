<script lang="ts">
	import { page } from '$app/stores';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let name = 'Collection';
	let displayCard = ['One', 'Two', 'Three', 'Four'];

	export let data;

	const { results } = data;
</script>

<section>
	<h1 class="text-violet-5">{name}</h1>
	<div class="my-4 float-right">
		<a class="btn bg-violet-5 text-white" href="/manage/collection/new">+ New Collection</a>
	</div>
	<table>
		<thead>
			<th>No.</th>
			<th>Title</th>
			<th>Description</th>
			<th>Keywords</th>
			<th>Ops</th>
		</thead>
		<tbody>
			{#each results as reps, i}
				<tr>
					<td>{i + 1}</td>
					<td>{reps.subjectName}</td>
					<td>{reps.subjectDescription}</td>
					<td>{reps.keywords}</td>
					<td>
						<span class="flex gap-1">
							<a href="{$page.url.pathname}/{reps.subjectSlug}">
								<button class="btn bg-violet text-white w-full">List</button>
							</a>
							<a href="{$page.url.pathname}/{reps.subjectSlug}/edit">
								<button class="btn bg-violet text-white w-full">Edit</button>
							</a>
						</span>
					</td>
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
</section>

<style>
</style>
