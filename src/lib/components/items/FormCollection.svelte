<script>
	import { enhance } from '$app/forms';

	export let componentName = 'Form Collection';
</script>

<section>
	<h4>{componentName}</h4>
	<div>
		<form action="/manage/collection/new" method="POST" use:enhance>
			<div class="flex flex-col">
				<label for="subject">Subject Name:</label>
				<input type="text" name="title" id="title" />
			</div>
			<div class="flex flex-col">
				<label for="subject-slug">Subject Slug:</label>
				<input type="text" name="slug" />
			</div>
			<div class="flex flex-col">
				<label for="status">Status:</label>
				<select name="status" id="status">
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
					<option value="pending">Pending</option>
				</select>
			</div>
			<div class="flex flex-col">
				<label for="description">Description:</label>
				<textarea name="description" id="description" />
			</div>
			<div class="flex flex-col">
				<label for="keywords">Keywords:</label>
				<input type="text" name="keywords" id="keywords" />
			</div>
			<div class="flex flex-col">
				<label for="type">Subject Type:</label>
				<select name="typesubject" id="typesubject">
					<option value="guide">Guide</option>
					<option value="course">Course</option>
					<option value="topic">Topic</option>
				</select>
			</div>
			<button type="submit" class="btn bg-violet-5 text-white">Submit</button>
		</form>
	</div>
</section>

<style>
	input,
	textarea,
	select {
		--at-apply: max-w-md p-2;
	}

	button {
		--at-apply: my-3;
	}
</style>
