<script>
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	const { getAllLibrarian } = data;
</script>

<h1>Daftar Subject Specialist</h1>
<p class="mt-5">Anda bisa menemukan dan mencari seluruh Pustakawan Subject Specialist disini</p>
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
					<div class="flex flex-col my-3">
						<a href="/librarian/{librarian.username}">
							<h5>{librarian.name}</h5>
						</a>

						<a
							href="mailto:{librarian.email}"
							class="text-gray-6 text-sm italic transition-all-500 hover:underline"
						>
							{librarian.email}
						</a>
						<p class="font-semibold dfTx">{librarian.department?.departmentName}</p>
					</div>
					<div class="w-full">
						<p class="dfBg rounded">Subjects:</p>
						{#each librarian.subjectsInstructor as subject}
							<p class="text-left text-sm">&star; {subject.subjectName}</p>
						{/each}
					</div>
				</div>
			</BaseCard>
		{/each}
	</div>
</section>

<style>
  .librarian-list {
    --at-apply: flex my-5 gap-3 md:(grid grid-cols-3);
  }

  .librarian-img {
    --at-apply: w-32 h-32 rounded-full object-cover;
  }
</style>
