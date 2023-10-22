<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';

	export let data;

	const { content } = data;
	const back = backButton($page);
</script>

<section>
	<div class="dfBgSecond p-5 my-5">
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
		<a class="dfBg" href={back}>Kembali</a>
		<a class="bg-orange text-white" href={$page.url.pathname + '/edit'}>Edit</a>
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
