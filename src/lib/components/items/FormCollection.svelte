<script lang="ts">
	export let subjectName: string;
	export let subjectSlug: string;
	export let status: string;
	export let description: string;
	export let keywords: string;
	export let subjectType: string;
</script>

<section>
	<div class="flex flex-col">
		<label for="subject">Subject Name:</label>
		<input type="text" name="title" id="title" bind:value={subjectName} />
	</div>
	<div class="flex flex-col">
		<label for="subject-slug">Subject Slug:</label>
		<input type="text" name="slug" bind:value={subjectSlug} />
	</div>
	<div class="flex flex-col">
		<label for="status">Status:</label>
		<select name="status" id="status" bind:value={status}>
			<option value="active">Active</option>
			<option value="inactive">Inactive</option>
			<option value="pending">Pending</option>
		</select>
	</div>
	<div class="flex flex-col">
		<label for="description">Description:</label>
		<textarea name="description" id="description" bind:value={description} />
	</div>
	<div class="flex flex-col">
		<label for="keywords">Keywords:</label>
		<input type="text" name="keywords" id="keywords" bind:value={keywords} />
	</div>
	<div class="flex flex-col">
		<label for="type">Subject Type:</label>
		<select name="typesubject" id="typesubject" bind:value={subjectType}>
			<option value="guide">Guide</option>
			<option value="course">Course</option>
			<option value="topic">Topic</option>
		</select>
	</div>
</section>

<style>
	input,
	textarea,
	select {
		--at-apply: max-w-md p-2;
	}
</style>
