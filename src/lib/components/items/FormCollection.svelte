<script lang="ts">
	export let subjectName: string;
	export let subjectSlug: string;
	export let status: string | null;
	export let description: string | null;
	export let keywords: string | null;
	export let subjectType: string | null;

	let slugValue: HTMLInputElement;
	let keyword: string;
	let keywordList = keywords === null ? [] : keywords?.split(',');

	const handleSlug = () => {
		const value = slugValue.value;
		const modifiedValue = value.toLocaleLowerCase().replace(/\s/g, '-');
		slugValue.value = modifiedValue;
	};

	const enterKey = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			keywordList.push(keyword);
			if (keywordList[0] === '') keywordList.shift();
			keywordList = keywordList;
			keywords = keywordList.join(',');
			keyword = '';
		}
	};

	const deleteKeyword = (iteration: number) => {
		keywordList?.splice(iteration, 1);
		keywordList = keywordList;
		keywords = keywordList?.join(',');
	};
</script>

<section class="flex flex-col gap-4">
	<div class="div-form">
		<label for="title">Subject Name:</label>
		<input type="text" name="title" id="title" bind:value={subjectName} required />
	</div>
	<div class="div-form">
		<label for="slug">Subject Slug:</label>
		<input
			type="text"
			name="slug"
			id="slug"
			bind:value={subjectSlug}
			bind:this={slugValue}
			on:input={handleSlug}
			required
		/>
	</div>
	<div class="div-form">
		<label for="status">Status:</label>
		<select name="status" id="status" bind:value={status} required>
			<option value="active">Active</option>
			<option value="inactive">Inactive</option>
			<option value="pending">Pending</option>
		</select>
	</div>
	<div class="div-form">
		<label for="description">Description:</label>
		<textarea name="description" id="description" bind:value={description} rows="10" required />
	</div>
	<div class="div-form">
		<label for="keywords">Keywords:</label>
		<input
			type="text"
			name="keyword"
			id="keyword"
			bind:value={keyword}
			on:keypress|stopPropagation={enterKey}
		/>
		<div class="flex gap-2 my-2">
			{#each keywordList as val, i}
				<button class="keyword-label" on:click|preventDefault={() => deleteKeyword(i)}>{val}</button
				>
			{/each}
		</div>
		{#if keywordList.length > 0}
			<p class="italic text-sm text-red-6">Klik label untuk menghapus keyword</p>
		{/if}

		<input type="hidden" name="keywords" bind:value={keywords} />
	</div>
	<div class="div-form">
		<label for="typesubject">Subject Type:</label>
		<select name="typesubject" id="typesubject" bind:value={subjectType} required>
			<option value="topic">Topic</option>
			<option value="guide">Guide</option>
			<option value="course">Course</option>
		</select>
	</div>
</section>

<style>
	label {
		--at-apply: font-semibold;
	}

	.keyword-label {
		--at-apply: bg-blue px-3 rounded text-white hover:(bg-red);
	}
</style>
