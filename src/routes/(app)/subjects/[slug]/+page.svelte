<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const back = backButton($page);
	const { getSubject, getCollection, getSubjectSpecialist } = data;
	let contentState = getCollection[0]?.id;

	const changeCollection = (value: any) => {
		contentState = value;
	};
</script>

<section class="max-w-5xl ma">
	<div>
		<a href="/" class="italic font-semibold text-lg">Lantera</a>
		<h2>{getSubject?.subjectName}</h2>
		<p class="text-sm text-gray-5 italic mt-2 mb-10 max-w-2xl ma">
			{getSubject?.subjectDescription}
		</p>
	</div>
	<div class="flex flex-col justify-center gap-5 md:flex-row">
		<div class="subject-specialist-card">
			<h5 class="dfBg w-full rounded-tr-lg rounded-tl-lg px-5">Subject Specialist</h5>
			<img
				src={getSubjectSpecialist?.photo}
				alt={getSubjectSpecialist?.username}
				class="rounded-full w-24 h-24 object-cover my-2"
			/>
			<h6>{getSubjectSpecialist?.name}</h6>
			<a
				href={'mailto:' + getSubjectSpecialist?.email}
				class="text-gray-5 text-sm italic hover:dfTx">{getSubjectSpecialist?.email}</a
			>
		</div>
		<div class="w-full">
			<div class="flex gap-1 mb-3">
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
									{content.contentDescription}
									<a href={$page.url.pathname + `/${content.id}`}>Lihat &rightarrow;</a>
								</p>
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
		--at-apply: flex flex-col items-center w-full dfBgThird rounded-xl pb-5 md:(w-80);
	}

	.collection {
		--at-apply: btn bg-gray-3 text-dark hover:dfTx;
	}

	.collection-active {
		--at-apply: btn dfBg text-left hover:text-white;
	}
</style>
