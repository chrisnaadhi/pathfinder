<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Hello, svelte!';
	const backUrl = backButton($page);

	export let data;
</script>

<section>
	<div class="text-center max-w-xl ma">
		<h3>{data.collectionItem.name}</h3>
		<pre>{data.collectionItem.slug}</pre>
		<p class="text-sm">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque minus expedita error rem
			tempora dolores quis asperiores sed nisi consectetur earum modi veniam sapiente voluptates
			vitae, magnam omnis nesciunt. Recusandae neque nam autem! Cumque blanditiis adipisci minima
			iste voluptas voluptatem! Laudantium perferendis tenetur asperiores dolorem debitis hic saepe,
			nam fuga.
		</p>
	</div>
	<div class="flex justify-between">
		<a href={backUrl} class="text-violet-5">&leftarrow;Kembali</a>
		<a href={$page.url.toString() + '/new'} class="text-violet-5">Tambah Konten&rightarrow;</a>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each Array(5) as _, i}
			<div class="box">
				<h4>{i + 1}</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid.</p>
			</div>
		{/each}
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}

	.box {
		--at-apply: bg-violet-50 p-5 rounded;
	}
</style>
