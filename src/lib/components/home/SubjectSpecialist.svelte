<script>
	import { specialist } from '$lib/utils/dummyData';

	const listPeople = specialist();
</script>

<section class="w-full my-5 flex flex-col items-center">
	<h4>Subject Specialists</h4>
	<div class="librarian-list">
		{#each listPeople as spec}
			<div class="flex flex-row items-center my-2">
				<img src="/img/no-image.jpg" alt="foto" class="h-18 mx-2 rounded-lg" />
				<div class="text-left">
					<h5>{spec.nama}</h5>
					<p>{spec.subject}</p>
					<p>{spec.email}</p>
				</div>
			</div>
		{/each}
	</div>
	<div>
		<a href="/librarian">Lihat semua SS</a>
	</div>
</section>

<style>
	.librarian-list {
		--at-apply: m-5;
	}

	a {
		--at-apply: btn dfBg;
	}
</style>
