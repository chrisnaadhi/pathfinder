<script>
	export let data;

	const { getDepartment } = data;
	let placeholder = 'Hello, svelte!';
</script>

<section>
	<h3>Department List</h3>
	<div>
		{#each getDepartment as department}
			<p>{department.departmentName}</p>
		{/each}
	</div>
	<p>{placeholder}</p>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
