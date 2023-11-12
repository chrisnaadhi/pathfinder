<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { backButton, trimText } from '$lib/utils/textFormatter';

	export let data;

	const back = backButton($page);
	const { getSubject, getCollection, getSubjectSpecialist } = data;
	let contentState = getCollection[0]?.id;

	const otherSubjects = getSubjectSpecialist?.subjectsInstructor.filter(
		(subject) => subject.subjectSlug !== getSubject?.subjectSlug
	);

	const changeCollection = (value: any) => {
		contentState = value;
	};
</script>

<section class="max-w-5xl ma">
	<div>
		<a href="/" class="font-semibold text-lg italic">Lantera</a>
		<div>
			<span
				class="px-3 py-0.5 text-xs rounded-full text-white"
				class:bg-emerald-6={getSubject?.type === 'guide'}
				class:bg-red-6={getSubject?.type === 'course'}
				class:bg-blue-6={getSubject?.type === 'topic'}>{getSubject?.type}</span
			>
		</div>
		<h2>{getSubject?.subjectName}</h2>

		<p class="text-sm text-gray-5 italic mt-2 mb-10 max-w-4xl ma">
			{getSubject?.subjectDescription}
		</p>
	</div>

	<div class="flex flex-col justify-center gap-5 md:flex-row">
		<div class="subject-specialist-card">
			<h5 class="dfBg w-full rounded-tr-lg rounded-tl-lg px-5">Subject Specialist</h5>
			<img
				src={getSubjectSpecialist?.photo ?? '/img/default.jpg'}
				alt={getSubjectSpecialist?.username}
				class="rounded-full w-24 h-24 object-cover my-2"
			/>
			<h6>{getSubjectSpecialist?.name}</h6>
			<a
				href={'mailto:' + getSubjectSpecialist?.email}
				class="text-gray-5 text-sm italic hover:dfTx"
			>
				{getSubjectSpecialist?.email}
			</a>
			<div class="w-full">
				<div class="dfBg px-4 py-1 my-3 rounded mx-5">Subjek lainnya:</div>
				{#if otherSubjects && otherSubjects.length > 0}
					<div class="flex flex-col items-start px-3">
						{#each otherSubjects || [] as subject}
							<a href={'/subjects/' + subject.subjectSlug}>&star; {subject.subjectName}</a>
						{/each}
					</div>
				{:else}
					<p>Belum ada Subjek Lainnya</p>
				{/if}
			</div>
		</div>
		<div class="w-full">
			<div class="flex flex gap-1 mb-3 md:(grid grid-cols-4)">
				{#each getCollection as collection}
					<button
						class="collection"
						class:collection-active={contentState === collection.id}
						on:click={() => changeCollection(collection.id)}
					>
						{collection.name}
					</button>
				{/each}
			</div>
			<div class="flex flex-col w-full gap-3">
				{#each getCollection as coll}
					{#each coll.contents as content}
						{#if content.collectionId === contentState}
							<div
								in:fade={{ delay: 400, duration: 500 }}
								out:fly={{ y: 30, duration: 400 }}
								class="w-full text-left dfBgThird rounded p-4"
							>
								<h6>{content.title}</h6>
								<p>
									{trimText(content.contentDescription, 120)}
								</p>

								<p class="text-xs italic">
									Keyword: <span class=" dfTx hover:underline">{content.tag}</span>
								</p>

								<div class="mt-2">
									<a class="dfBg py-1 px-4 rounded" href={$page.url.pathname + `/${content.id}`}>
										Lihat &rightarrow;
									</a>
								</div>
							</div>
						{/if}
					{/each}
				{/each}
			</div>
		</div>
	</div>

	<div />

	<a href={back}>&leftarrow;Kembali</a>
</section>

<style>
	section {
		--at-apply: text-center;
	}

	.subject-specialist-card {
		--at-apply: flex flex-col items-center w-full h-full dfBgThird rounded-xl pb-5 md:(w-80);
	}

	.collection {
		--at-apply: btn bg-gray-2 text-gray-5 text-center hover:dfTx;
	}

	.collection-active {
		--at-apply: btn dfBg hover:text-white;
	}
</style>
