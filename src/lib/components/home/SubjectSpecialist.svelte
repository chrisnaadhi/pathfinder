<script lang="ts">
	import { base } from '$app/paths';

	export let subjectSpecialist: Array<any>;

	const limitSubject = (list: Array<any>) => {
		return list.slice(0, 1);
	};
</script>

<section class="max-w-md ma my-5 flex flex-col items-center">
	<h4>Subject Specialists</h4>
	<div class="librarian-list">
		{#each subjectSpecialist as specialist}
			<div class="flex flex-row items-center my-2">
				<img
					src={specialist.photo === null ? 'img/default.jpg' : `${base}${specialist.photo}`}
					alt="foto"
					class="h-24 w-24 object-cover mx-2 rounded-full"
				/>
				<div class="text-left">
					<h5>{specialist.name}</h5>
					<div class="flex flex-row">
						<p class="dfBg rounded-lg text-xs font-semibold py-1 px-3">
							{specialist.userType?.typeName}
						</p>
					</div>

					<div class="flex flex-col">
						{#if specialist.subjectsInstructor.length > 0}
							<span class="text-xs text-dark-50 italic">
								{#each limitSubject(specialist.subjectsInstructor) as sub}
									{sub.subjectName}
								{/each}
								&ThickSpace;dan
								<a href="{base}/librarian/{specialist.username}">&ThickSpace;lainnya.</a>
							</span>
							<a href={'mailto:' + specialist.email} class="text-sm text-gray italic hover:(dfTx)">
								{specialist.email}
							</a>
						{:else}
							<span>Belum ada subjek.</span>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div>
		<a class="btn dfBg" href="{base}/librarian">Lihat semua SS</a>
	</div>
</section>

<style>
	.librarian-list {
		--at-apply: m-5;
	}
</style>
