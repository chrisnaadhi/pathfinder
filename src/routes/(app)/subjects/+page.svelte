<script>
	import { page } from '$app/stores';

	export let data;

	let placeholder = 'All Subjects';
	const { getAllSubjects } = data;
</script>

<section>
	<h2>{placeholder}</h2>
	<div class="subjects">
		{#each getAllSubjects as discipline}
			<h6>{discipline.disciplineName}</h6>
			<div class="flex flex-col">
				{#each discipline.subject as subject}
					<a href={$page.url.pathname + '/' + subject.subjectSlug}>
						&star; {subject.subjectName}
					</a>
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		--at-apply: max-w-6xl ma;
	}

	.subjects {
		--at-apply: text-left;
	}
</style>
