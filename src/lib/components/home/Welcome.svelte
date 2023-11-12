<script lang="ts">
	export let name: string;
	export let description: string | null | undefined;
</script>

<section>
	<div class="flex justify-center">
		<img src="/img/lantera.png" alt="Lantera" class="w-40" />
	</div>

	<h1 class="text-3xl md:text-5xl">Selamat datang di <span class="dfTx">{name}</span></h1>
	<br />
	<p>
		{description}
	</p>
</section>

<style>
	section {
		--at-apply: pt-10 pb-15 max-w-5xl ma px-8;
	}

	h1 {
		--at-apply: text-center;
	}
</style>
