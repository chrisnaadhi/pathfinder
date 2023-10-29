<script lang="ts">
	export let subjectSpecialist: Array<any>;
</script>

<section class="w-full my-5 flex flex-col items-center">
	<h4>Subject Specialists</h4>
	<div class="librarian-list">
		{#each subjectSpecialist as specialist}
			<div class="flex flex-row items-center my-2">
				<img
					src={specialist.photo ?? '/img/default.jpg'}
					alt="foto"
					class="h-16 w-16 object-cover mx-2 rounded-full"
				/>
				<div class="text-left">
					<h5>{specialist.name}</h5>
					<span class="flex gap-2 text-xs text-dark-50 italic">
						{#each specialist.subjectsInstructor as sub}
							<p class=" dfTx">{sub.subjectName}</p>
						{/each}
					</span>
					<p>{specialist.email}</p>
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
