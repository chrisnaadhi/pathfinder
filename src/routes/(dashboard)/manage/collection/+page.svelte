<script lang="ts">
	import { page } from '$app/stores';
	import { trimText } from '$lib/utils/textFormatter';

	export let data;

	const { results, subjectResults } = data;
	let name = 'Subjects';
	let displayCard = ['One', 'Two', 'Three', 'Four'];

	let badgeColor = (value: string | null) => {
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
</script>

<section>
	<h2 class="dfTx">{name}</h2>
	<div class="my-4">
		<a class="btn dfBg" href="/manage/collection/new">+ New Subject</a>
	</div>
	<div class="grid grid-cols-3 gap-3 my-5">
		{#each subjectResults as subject}
			<div class=" dfBgSecond p-5">
				<div class="flex items-center justify-between">
					<h5>{subject.title}</h5>
					<div class={badgeColor(subject.type) + ' badge'}>{subject.type}</div>
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
						<button class="btn bg-orange-2 text-dark w-full">Edit</button>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.badge {
		--at-apply: px-4 py-1 text-white font-semibold text-xs rounded-full;
	}
</style>
