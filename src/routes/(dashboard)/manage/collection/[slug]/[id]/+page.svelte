<script lang="ts">
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	// MeltUI
	import { createDialog, melt } from '@melt-ui/svelte';
	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog();

	const backUrl = backButton($page);

	export let data;
</script>

<section>
	<div use:melt={$portalled}>
		{#if $open}
			<div use:melt={$overlay} class="fixed inset-0 z-3 bg-black/50" />
			<div
				class="fixed left-[50%] top-[50%] z-4 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-6 shadow-lg"
				use:melt={$content}
			>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi voluptatibus at
						eveniet voluptas voluptates facilis fugit nesciunt quia officiis, facere odit libero
						neque nihil veritatis praesentium incidunt dolorem. Repudiandae.
					</p>
				</div>
				<button use:melt={$close} class="btn dfBg">Close</button>
			</div>
		{/if}
	</div>

	<div class="text-center max-w-xl ma">
		<h3>{data.collectionItem.name}</h3>
		<pre>{data.collectionItem.slug}</pre>
		<p class="text-sm">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque minus expedita error rem
			tempora dolores quis asperiores sed nisi consectetur earum modi veniam sapiente.
		</p>
		<button use:melt={$trigger} class="btn dfBg text-sm">Edit</button>
	</div>
	<div class="flex justify-between">
		<a href={backUrl} class="dfTx">&leftarrow;Kembali</a>
		<a href={$page.url.toString() + '/new'} class="dfTx">Tambah Konten&rightarrow;</a>
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
