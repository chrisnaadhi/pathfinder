<script>
	import { enhance } from '$app/forms';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let name = 'Dashboard';
	export let data;

	const { subjectList, subjectNumber, disciplineNumber, contentNumber, facultyNumber } = data;
</script>

<section>
	<h1 class="dfTx">{name}</h1>
	<BaseCard>
		<div class="text-center">
			<h3>{subjectNumber}</h3>
			<p>total subjek</p>
		</div>
	</BaseCard>
	<div class="flex flex-col my-3 gap-3 md:(grid grid-cols-3)">
		<BaseCard>
			<div class="text-center">
				<h3>{disciplineNumber}</h3>
				<p>total disiplin ilmu</p>
			</div>
		</BaseCard>
		<BaseCard>
			<div class="text-center">
				<h3>{facultyNumber}</h3>
				<p>total fakultas</p>
			</div>
		</BaseCard>
		<BaseCard>
			<div class="text-center">
				<h3>{contentNumber}</h3>
				<p>total konten</p>
			</div>
		</BaseCard>
	</div>
	<form action="?/signOut" method="POST" use:enhance>
		<button type="submit" class="btn bg-red text-white">Sign Out</button>
	</form>
</section>

<style>
	button {
		--at-apply: mt-5;
	}
</style>
