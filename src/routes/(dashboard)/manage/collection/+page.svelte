<script lang="ts">
	import { page } from '$app/stores';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';
	import { formatDescription } from '$lib/utils/textFormatter';

	let name = 'Subjects';
	let displayCard = ['One', 'Two', 'Three', 'Four'];

	export let data;

	const { results } = data;
</script>

<section>
	<h1 class="dfTx">{name}</h1>
	<div class="my-4 float-right">
		<a class="btn dfBg" href="/manage/collection/new">+ New Subject</a>
	</div>
	<table>
		<thead>
			<th>No.</th>
			<th>Title</th>
			<th>Description</th>
			<th>Type Subject</th>
			<th>Ops</th>
		</thead>
		<tbody>
			{#each results as subject, i}
				<tr>
					<td>{i + 1}</td>
					<td>{subject.subjectName}</td>
					<td>{formatDescription(subject.subjectDescription)}</td>
					<td>{subject.type}</td>
					<td>
						<span class="flex justify-center gap-1">
							<a href="{$page.url.pathname}/{subject.subjectSlug}">
								<button class="default-button">Check</button>
							</a>
							<a href="{$page.url.pathname}/{subject.subjectSlug}/edit">
								<button class="default-button">Edit</button>
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
