<script>
	let placeholder = 'Hello, Member!';
	export let data;

	const { listUsers } = data;
</script>

<section>
	<p>{placeholder}</p>
	<div>
		{#each listUsers as user}
			<pre>{user.typeName}. {user.email} - {user.username} - {user.fullName}</pre>
		{/each}
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
