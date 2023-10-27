<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';

	export let data;

	const { content } = data;
	const back = backButton($page);
</script>

<section>
	<div class="dfBgSecond rounded p-5 my-5">
		<div class="dfBg ma max-w-lg py-2 text-center rounded">
			<h4>{content.title}</h4>
		</div>
		<div class="text-center">
			<p>Pembuat: <span class="font-semibold">{content.creator}</span></p>
			<p class="text-xs">Tgl dibuat: {content.createdAt}</p>
		</div>
		<div class="mt-5">
			{@html content.contentsFull}
		</div>
	</div>

	<div class="flex gap-2">
		<a class="dfBg" href={back}>&leftarrow;Kembali</a>
		<a
			class="btn dfBgSecond dfTx w-full flex gap-1 items-center justify-center"
			href={$page.url.pathname + '/edit'}
		>
			<div class="i-mdi-pencil-box w-4 h-4" />
			Edit
		</a>
		<DeleteModal>
			<p>Ingin meghapus data ?</p>
		</DeleteModal>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}

	a {
		--at-apply: btn w-full text-center;
	}
</style>
