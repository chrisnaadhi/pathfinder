<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { getContent } = data;
	const back = backButton($page);
	let placeholder = getContent?.creator?.name;
</script>

<div class="specialist-background">
	<div class="background-img" />
	<p class="dfBg rounded px-5 mb-3 text-sm">{getContent?.subjects?.subjectName}</p>
	<img
		src={getContent?.creator?.photo ?? '/img/default.jpg'}
		alt={getContent?.creator?.username}
		class="w-16 h-16 rounded-full object-cover"
	/>
	<p>Subject Specialist: <span class="font-semibold">{placeholder}</span></p>
	<p>
		E-mail:
		<a href="mailto:{getContent?.creator?.email}" class="dfTx text-sm">
			{getContent?.creator?.email}
		</a>
	</p>
</div>
<section>
	<div class="dfBgThird p-5 rounded text-left">
		{@html getContent?.contents}
	</div>
	<div class="flex mt-5">
		<a href={back} class="dfBg btn w-full">&leftarrow;Kembali</a>
	</div>
</section>

<style>
	section {
		--at-apply: max-w-5xl ma;
	}

	.specialist-background {
		--at-apply: flex flex-col items-center pb-15 pt-5 mt--5 mb-5;
	}

	.background-img {
		--at-apply: w-full h-60 mt--15 z--1 absolute opacity-15 blur-5;
		background-image: url('/img/lantern-book.jpg');
		background-position: center;
	}

	p {
		--at-apply: italic;
	}
</style>
