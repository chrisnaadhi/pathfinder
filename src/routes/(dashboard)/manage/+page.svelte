<script>
	import { enhance } from '$app/forms';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let name = 'Dashboard';
	export let data;

	const { userData, subjectNumber, disciplineNumber, contentNumber, facultyNumber } = data;
</script>

<section>
	<div class="mb-3">
		<h1 class="dfTx">{name}</h1>
		<h5>Halo, {userData?.fullName}!</h5>
	</div>

	<BaseCard>
		<div class="text-center">
			<h1>{subjectNumber}</h1>
			<p>total subjek</p>
		</div>
	</BaseCard>
	<div class="flex flex-col my-3 gap-3 md:(grid grid-cols-3)">
		<BaseCard>
			<div class="text-center">
				<h2>{disciplineNumber}</h2>
				<p>total disiplin ilmu</p>
			</div>
		</BaseCard>
		<BaseCard>
			<div class="text-center">
				<h2>{facultyNumber}</h2>
				<p>total fakultas</p>
			</div>
		</BaseCard>
		<BaseCard>
			<div class="text-center">
				<h2>{contentNumber}</h2>
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
