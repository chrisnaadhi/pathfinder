<script lang="ts">
	// @ts-nocheck
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectSpecialist from '$lib/components/home/SubjectSpecialist.svelte';
	import SubjectExplanation from '$lib/components/home/SubjectExplanation.svelte';
	import { groupBy } from '$lib/utils/dataStore';
	import { fade, fly } from 'svelte/transition';
	export let data;

	const {
		getDeskripsiPathfinder,
		getSubjectData,
		getSubjectDataGuide,
		getSubjectDataTopic,
		getSubjectDataCourse,
		getAZListOfSubjects,
		randomSubjectSpecialist,
		listGuide
	} = data;

	let subjectState = 'All Subjects';
	let disciplineList = [];
	const mappedSubject = groupBy(getAZListOfSubjects, (sub) =>
		sub.subjectName.toUpperCase().charAt(0)
	);
	const sortMappedSubject = new Map([...mappedSubject.entries()].sort());

	getSubjectData.forEach((subject) => {
		const discipline = {
			name: subject.disciplineName,
			code: subject.code,
			state: false,
			subjectList: subject.subject
		};
		disciplineList.push(discipline);
	});

	const chosenSubject = (value: string) => {
		subjectState = value;
	};
</script>

<main class="max-w-7xl ma">
	<div class="mt--27">
		<SearchBar />
	</div>
	<div class="my-5">
		<SubjectExplanation description={getDeskripsiPathfinder?.contents} />
	</div>
	<h2 class="italic">
		<span class="dfTx">Lantera</span> in Action
	</h2>
	<section class="main-content">
		<div class="main-subject">
			<div class="py-5 grow w-full">
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
							<div class="flex flex-col md:(grid grid-cols-2)">
								{#each disciplineList as discipline}
									<div>
										<button
											on:click={() => (discipline.state = !discipline.state)}
											class="bg-transparent"
										>
											<h6>&bigstar; {discipline.name}</h6>
										</button>

										<div class="flex flex-col gap-2">
											{#if discipline.state}
												{#each discipline.subjectList as subject}
													<div class="pl-5">
														<span
															class="text-3 py-0.5 px-2 mr-1 rounded-lg text-white"
															class:bg-emerald-6={subject.type === 'guide'}
															class:bg-red-6={subject.type === 'course'}
															class:bg-blue-6={subject.type === 'topic'}
															>{subject.type}
														</span>
														<a href={'subjects/' + subject.subjectSlug} class="font-semibold">
															{subject.subjectName}
														</a>
													</div>
												{/each}
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{:else if subjectState === 'A-Z Lists'}
						<div in:fade={{ delay: 400, duration: 500 }} out:fly={{ y: 30, duration: 400 }}>
							<h3><span class="dfTx">A-Z</span> Lists</h3>
							<div class="flex gap-3">
								{#each [...sortMappedSubject] as [letter, _info]}
									<a href="#letter-{letter}">
										<h6 class="btn dfBg">{letter}</h6>
									</a>
								{/each}
							</div>
							{#each [...sortMappedSubject] as [letter, info]}
								<div class="my-4">
									<h4 id={'letter-' + letter}>{letter}</h4>
									<div class="flex flex-col gap-2">
										{#each info as inf}
											<div class="flex">
												<span
													class="text-3 py-0.5 px-2 mr-1 rounded-lg text-white"
													class:bg-emerald-6={inf.type === 'guide'}
													class:bg-red-6={inf.type === 'course'}
													class:bg-blue-6={inf.type === 'topic'}
													>{inf.type}
												</span>
												<a href="/subjects/{inf.subjectSlug}">{inf.subjectName}</a>
											</div>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					{:else if subjectState === 'Guides List'}
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
					{:else if subjectState === 'Topic Collections'}
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
					{:else if subjectState === 'Courses List'}
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

			<div class="flex-none max-w-lg">
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
		--at-apply: flex flex-col w-full sm:(flex flex-row my-5);
	}

	.subject-section {
		--at-apply: flex flex-col w-full gap-2 rounded px-10 py-3 text-left;
	}

	.active-list {
		--at-apply: dfBg;
	}
</style>
