<script>
	export let data;

	const { userId } = data;
	let placeholder = `Reset Password ${userId}`;
</script>

<section>
	<p>{placeholder}</p>
	<form action="?/updatePassword">
		<div class="div-form">
			<label for="password">Password Baru:</label>
			<input type="password" name="password" id="password" />
		</div>
		<button type="submit" class="btn dfBg w-full mt-3 py-2">Update</button>
	</form>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
