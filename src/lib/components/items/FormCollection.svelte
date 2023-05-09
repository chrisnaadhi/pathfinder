<script>
	let componentName = 'Form Collection';
</script>

<section>
	<h4>{componentName}</h4>
	<div>
		<form action="">
			<div class="flex flex-col">
				<label for="title">Title:</label>
				<input type="text" name="title" id="title" />
			</div>
			<div class="flex flex-col">
				<label for="description">Description:</label>
				<textarea name="description" id="description" />
			</div>
		</form>
	</div>
</section>

<style>
	input {
		--at-apply: max-w-md p-2;
	}
</style>
