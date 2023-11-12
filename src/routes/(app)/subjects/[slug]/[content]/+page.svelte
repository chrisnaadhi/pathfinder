<script>
	import { page } from '$app/stores';
	import { backButton, formatTanggal } from '$lib/utils/textFormatter';

	export let data;

	const { getContent } = data;
	const back = backButton($page);
	let placeholder = getContent?.creator?.name;
</script>

<div class="specialist-background">
	<div class="background-img" />
	<div class="bg-white h-50 z--1 opacity-50 mt--5 w-full absolute blur-25" />
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
	<div class="mb-3">
		<h3 class=" dfTx">
			{getContent?.title}
		</h3>
		<p class="text-xs">Dibuat pada: {formatTanggal(getContent?.createdAt)}</p>
	</div>

	<div class="dfBgThird p-5 rounded text-left">
		<div class="text-center">
			<p>Pembuat: <span class="dfBg px-3 py-1 rounded">{getContent?.creator?.name}</span></p>
		</div>
		{@html getContent?.contents}
		<div class="mt-10 text-xs">
			<p>Dibuat oleh: <span class="font-semibold">{getContent?.creator?.name}</span></p>
			<p>Diperbarui: {formatTanggal(getContent?.updatedAt)}</p>
		</div>
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
		--at-apply: flex flex-col items-center pb-15 pt-5 mt--5;
	}

	.background-img {
		--at-apply: w-full h-60 mt--15 z--1 absolute opacity-50 blur-8;
		background-image: url('/img/lantern-book.jpg');
		background-position: center;
	}

	p {
		--at-apply: italic;
	}
</style>
