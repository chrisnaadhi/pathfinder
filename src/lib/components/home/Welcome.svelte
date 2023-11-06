<script lang="ts">
	import { formatDescription } from '$lib/utils/textFormatter';

	export let name: string;
	const description =
		"The Web doesn't have a changelog, but MDN can help. You can personalize and filter compatibility changes based on browsers or the tech category you are interested in whether that is JavaScript, CSS, etc.";
</script>

<section>
	<div class="flex justify-center">
		<img src="/img/lantera.png" alt="Lantera" class="w-40" />
	</div>

	<h1 class="text-3xl md:text-5xl">Selamat datang di <span class="dfTx">{name}</span></h1>
	<br />
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et amet provident nesciunt deserunt
		quae, maiores temporibus architecto ab ullam harum culpa possimus, repellendus inventore illum
		omnis laboriosam! Ratione hic qui autem mollitia? Dignissimos, alias voluptatum distinctio
		beatae a adipisci, iusto inventore ipsam quaerat asperiores, quos natus aliquid incidunt fugiat
		quasi.
	</p>
	<p>{formatDescription(description)}</p>
</section>

<style>
	section {
		--at-apply: pt-10 pb-15 max-w-5xl ma px-8;
	}

	h1 {
		--at-apply: text-center;
	}
</style>
