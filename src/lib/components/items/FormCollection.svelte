<script lang="ts">
	export let subjectName: string;
	export let subjectSlug: string;
	export let status: string | null;
	export let description: string | null;
	export let keywords: string | null;
	export let subjectType: string | null;
</script>

<section class="flex flex-col gap-4">
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
		<textarea name="description" id="description" bind:value={description} rows="10" />
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
	label {
		--at-apply: font-semibold;
	}
</style>
