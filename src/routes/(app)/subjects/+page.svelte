<script>
	import { page } from '$app/stores';

	export let data;

	let placeholder = 'All Subjects';
	const { getAllSubjects } = data;
</script>

<section>
	<h2>{placeholder}</h2>
	<div class="grid grid-cols-4 gap-3 my-5">
		{#each getAllSubjects as discipline}
			<div class="subjects">
				<h6>{discipline.disciplineName}</h6>
				<div class="flex flex-col">
					{#each discipline.subject as subject}
						<a href={$page.url.pathname + '/' + subject.subjectSlug}>
							&star; {subject.subjectName}
							<span
								class=" text-2.4 px-1 py-0.5 rounded-full text-white"
								class:bg-emerald-6={subject.type === 'guide'}
								class:bg-red-6={subject.type === 'course'}
								class:bg-blue-6={subject.type === 'topic'}>{subject.type}</span
							>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		--at-apply: max-w-6xl ma min-h-screen;
	}

	.subjects {
		--at-apply: text-left dfBgThird p-5 flex flex-col rounded-lg;
	}
</style>
