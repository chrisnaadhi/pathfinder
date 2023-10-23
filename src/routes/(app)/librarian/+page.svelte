<script>
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	const { getAllLibrarian } = data;
</script>

<h1>List of our Librarian</h1>
<p>You can find more about our Librarian and their specialist in subjects</p>
<section class="max-w-4xl ma">
	<div class="librarian-list">
		{#each getAllLibrarian as librarian}
			<BaseCard>
				<div class="flex flex-col items-center">
					<img
						src={librarian.photo ?? '/img/default.jpg'}
						class="librarian-img"
						alt={librarian.name}
					/>
					<div class="flex flex-col mt-3">
						<h6>{librarian.name}</h6>
						<p>{librarian.email}</p>
						<p>{librarian.departmentId}</p>
					</div>
				</div>
			</BaseCard>
		{/each}
	</div>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in laborum tenetur quis
		eaque assumenda deserunt perferendis vero culpa debitis et cum praesentium officiis quaerat,
		modi facere consequuntur optio amet?
	</p>
</section>

<style>
  .librarian-list {
    --at-apply: flex my-5 gap-3 md:(grid grid-cols-3);
  }

  .librarian-img {
    --at-apply: w-32 h-32 rounded-full object-cover;
  }
</style>
