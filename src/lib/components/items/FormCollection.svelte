<script>
	import { enhance } from '$app/forms';

	export let componentName = 'Form Collection';
</script>

<section>
	<h4>{componentName}</h4>
	<div>
		<form action="/manage/collection/new" method="POST" use:enhance>
			<div class="flex flex-col">
				<label for="title">Title:</label>
				<input type="text" name="title" id="title" />
			</div>
			<div class="flex flex-col">
				<label for="description">Description:</label>
				<textarea name="description" id="description" />
			</div>
			<div class="flex gap-1 items-baseline">
				<input type="checkbox" name="agreement" id="agreement" />
				<p>Agree to Terms and Conditions</p>
			</div>
			<button type="submit" class="btn bg-violet-5 text-white">Submit</button>
		</form>
	</div>
</section>

<style>
	input,
	textarea {
		--at-apply: max-w-md p-2;
	}

	button {
		--at-apply: my-3;
	}
</style>
