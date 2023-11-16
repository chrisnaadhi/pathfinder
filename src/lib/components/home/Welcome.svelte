<script lang="ts">
	export let name: string;
	export let description: string | null | undefined;
</script>

<section>
	<div class="flex justify-center">
		<img src="/pathfinder/img/lantera.png" alt="Lantera" class="w-40" />
	</div>

	<h1 class="text-3xl md:text-5xl">Selamat datang di <span class="dfTx">{name}</span></h1>
	<br />
	<p>
		{description ??
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed iste porro nihil officiis repellat atque possimus, veniam quisquam accusamus ad voluptatem aspernatur ab rerum cupiditate odit tempora reprehenderit tenetur esse ut quo incidunt. Earum a quidem neque obcaecati animi voluptatum? Nemo molestiae dolor doloremque odit voluptatem sit, obcaecati distinctio aut!'}
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
