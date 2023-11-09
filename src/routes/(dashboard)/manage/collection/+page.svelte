<script lang="ts">
	import { page } from '$app/stores';
	import { trimText } from '$lib/utils/textFormatter';
	import { fade, fly } from 'svelte/transition';

	interface Collection {
		title: string;
		description: string | null;
		type: string | null;
		slug: string;
		specialist: string | null;
		subjectDiscipline: number | null;
		disciplineName: string | null;
		disciplineCode: string | null;
	}

	export let data;

	const { subjectResults, disciplineList, role } = data;
	let name = 'Subjects';
	let filteredCollection: Array<Collection> | undefined;
	let isFiltered = false;
	let subjectState = '';

	const badgeColor = (value: string | null) => {
		switch (value) {
			case 'guide':
				return 'bg-emerald-6';
			case 'topic':
				return 'bg-blue-6';
			case 'course':
				return 'bg-rose-6';
			default:
				return 'bg-slate';
		}
	};
	const filterSubject = (value: string) => {
		isFiltered = true;
		subjectState = value;
		filteredCollection = subjectResults?.filter((val) => {
			console.log('val.disciplineCode:' + val.disciplineCode);
			console.log('val params' + value);
			return val?.disciplineCode === value;
		});
	};
</script>

<section>
	<h2 class="dfTx">{name}</h2>
	<div class="my-4">
		<a class="btn dfBg" href="/manage/collection/new">+ New Subject</a>
	</div>

	<h4>Filter:</h4>
	<div class="flex gap-2">
		<button class="btn" class:dfBg={!isFiltered} on:click={() => (isFiltered = false)}>Semua</button
		>
		{#each disciplineList as disc}
			<button
				class="btn"
				class:dfBg={disc.code === subjectState && isFiltered}
				on:click={() => filterSubject(disc.code)}
			>
				{disc.disciplineName}
			</button>
		{/each}
	</div>

	{#if isFiltered}
		<div>
			{#if filteredCollection?.length || [].length > 0}
				<div class="grid grid-cols-4 gap-3 my-5">
					{#each filteredCollection || [] as subject}
						<div class=" dfBgSecond p-5 flex flex-col justify-between">
							<div class="flex items-start justify-between">
								<h5>{subject.title}</h5>
								<div class={badgeColor(subject.type) + ' badge'}>{subject.type}</div>
							</div>

							<div class="my-2">
								<span class="italic dfTx font-semibold">{subject.disciplineName}</span>
							</div>

							<p class="italic text-sm text-justify">{trimText(subject.description, 130)}</p>

							<div class="my-2 text-sm font-bold">
								Subject Specialist: <span class="badge dfBg">{subject.specialist}</span>
							</div>

							<div class="flex w-full gap-3 mt-4">
								<a href="{$page.url.pathname}/{subject.slug}" class="w-full">
									<button class="default-button">Lihat</button>
								</a>
								<a href="{$page.url.pathname}/{subject.slug}/edit" class="w-full">
									<button class="btn dfBgThird dfTx border dfBorder w-full">Edit</button>
								</a>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="flex flex-col items-center">
					<img src="/illust/undraw_Void.png" alt="Warning" class="w-sm" />
					<h4 class="text-red">Tidak ada Koleksi Subjek!</h4>
					<p>Silahkan tambahkan koleksi Subjek dengan klik tombol New Subject</p>
				</div>
			{/if}
		</div>
	{:else}
		<div>
			{#if subjectResults?.length || [].length > 0}
				<div class="grid grid-cols-4 gap-3 my-5">
					{#each subjectResults || [] as subject}
						<div class=" dfBgSecond p-5 flex flex-col justify-between">
							<div class="flex items-start justify-between">
								<h5>{subject.title}</h5>
								<div class={badgeColor(subject.type) + ' badge'}>{subject.type}</div>
							</div>

							<div class="my-2">
								<span class="italic dfTx font-semibold">{subject.disciplineName}</span>
							</div>

							<p class="italic text-sm text-justify">{trimText(subject.description, 130)}</p>

							<div class="my-2 text-sm font-bold">
								Subject Specialist: <span class="badge dfBg">{subject.specialist}</span>
							</div>

							<div class="flex w-full gap-3 mt-4">
								<a href="{$page.url.pathname}/{subject.slug}" class="w-full">
									<button class="default-button">Lihat</button>
								</a>
								<a href="{$page.url.pathname}/{subject.slug}/edit" class="w-full">
									<button class="btn dfBgThird dfTx border dfBorder w-full">Edit</button>
								</a>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="flex flex-col items-center">
					<img src="/illust/undraw_Void.png" alt="Warning" class="w-sm" />
					<h4 class="text-red">Tidak ada Koleksi Subjek!</h4>
					<p>Silahkan tambahkan koleksi Subjek dengan klik tombol New Subject</p>
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	.badge {
		--at-apply: px-4 py-1 text-white font-semibold text-xs rounded-full;
	}
</style>
