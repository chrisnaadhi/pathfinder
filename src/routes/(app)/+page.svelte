<script lang="ts">
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectSpecialist from '$lib/components/home/SubjectSpecialist.svelte';
	import SubjectExplanation from '$lib/components/home/SubjectExplanation.svelte';
	import { fade, fly } from 'svelte/transition';
	export let data;

	const {
		getSubjectData,
		getSubjectDataGuide,
		getSubjectDataTopic,
		getSubjectDataCourse,
		getSubjectSpecialist,
		randomSubjectSpecialist,
		listGuide
	} = data;

	let subjectState = 'All Subjects';

	const chosenSubject = (value: string) => {
		subjectState = value;
		console.log(subjectState);
	};
</script>

<main class="max-w-7xl ma">
	<div class="mt--27">
		<SearchBar />
	</div>
	<div class="my-5">
		<SubjectExplanation />
	</div>
	<h2 class="italic">
		<span class="dfTx">Lantera</span> in Action
	</h2>
	<section class="main-content">
		<div class="main-subject">
			<div class="py-5">
				<h2>Subject Lists</h2>
				<div class="flex items-center justify-center gap-2 mt-5">
					{#each listGuide as list}
						<button
							class="btn"
							class:active-list={subjectState === list}
							on:click={() => chosenSubject(list)}>{list}</button
						>
					{/each}
				</div>
				<section class="subject-section">
					{#if subjectState === 'All Subjects'}
						<div in:fade={{ delay: 400, duration: 500 }} out:fly={{ y: 30, duration: 400 }}>
							<h3>Daftar Seluruh Subjek</h3>
							{#each getSubjectData as sub}
								<div>
									<h6>{sub.disciplineName}</h6>
									{#each sub.subject as subject}
										<div class="pl-3">
											&bigstar; <a href={'subjects/' + subject.subjectSlug}>{subject.subjectName}</a
											>
										</div>
									{/each}
								</div>
							{/each}
						</div>
					{:else if subjectState === 'Guide Collections'}
						<div in:fade={{ delay: 400, duration: 500 }} out:fly={{ y: 30, duration: 400 }}>
							<h3>Daftar Subjek - <span class="dfTx">Guide</span></h3>
							{#each getSubjectDataGuide as sub}
								{#if sub.subject.length > 0}
									<h6>{sub.disciplineName}</h6>
									{#each sub.subject as subject}
										<div>
											&bigstar; <a href={'subjects/' + subject.subjectSlug}>{subject.subjectName}</a
											>
										</div>
									{/each}
								{/if}
							{/each}
						</div>
					{:else if subjectState === 'Topic Guides'}
						<div in:fade={{ delay: 400, duration: 500 }} out:fly={{ y: 30, duration: 400 }}>
							<h3>Daftar Subjek - <span class="dfTx">Topic</span></h3>
							{#each getSubjectDataTopic as sub}
								{#if sub.subject.length > 0}
									<h6>{sub.disciplineName}</h6>
									{#each sub.subject as subject}
										<div>
											&bigstar; <a href={'subjects/' + subject.subjectSlug}>{subject.subjectName}</a
											>
										</div>
									{/each}
								{/if}
							{/each}
						</div>
					{:else if subjectState === 'Course List'}
						<div in:fade={{ delay: 400, duration: 500 }} out:fly={{ y: 30, duration: 400 }}>
							<h3>Daftar Subjek - <span class="dfTx">Course</span></h3>
							{#each getSubjectDataCourse as sub}
								{#if sub.subject.length > 0}
									<h6>{sub.disciplineName}</h6>
									{#each sub.subject as subject}
										<div>
											&bigstar; <a href={'subjects/' + subject.subjectSlug}>{subject.subjectName}</a
											>
										</div>
									{/each}
								{/if}
							{/each}
						</div>
					{/if}
				</section>
			</div>

			<div>
				<SubjectSpecialist subjectSpecialist={randomSubjectSpecialist} />
			</div>
		</div>
	</section>
</main>

<style>
	.main-content {
		--at-apply: dfBgThird h-full rounded-lg;
	}

	.main-subject {
		--at-apply: flex flex-col sm:(grid grid-cols-2 my-5);
	}

	.subject-section {
		--at-apply: flex flex-col w-full gap-2 rounded px-10 py-3 text-left;
	}

	.active-list {
		--at-apply: dfBg;
	}
</style>
