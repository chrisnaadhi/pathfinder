<script>
	import { enhance } from '$app/forms';
	import { groupByFaculty } from '$lib/utils/dataStore';
	import FormCollection from '$lib/components/items/FormCollection.svelte';

	export let data;

	let newObj = {
		subjectName: '',
		subjectSlug: '',
		status: 'pending',
		description: '',
		keywords: '',
		subjectType: 'guide'
	};
	let { getDiscipline, getLibrarian } = data;

	let instructor = '';
	/** @type {string | undefined} */
	let instructorName = '';
	let dropdownInstructor = false;

	const grouped = groupByFaculty(getDiscipline);

	/** @param {string} value */
	const chooseInstructor = (value) => {
		instructor = value;
		let chosen = getLibrarian.find((lib) => lib.id === value);
		instructorName = chosen?.name;
	};

	const viewDropdown = () => {
		dropdownInstructor = !dropdownInstructor;
	};
</script>

<section>
	<h3 class="dfTx">Subjects</h3>
	<div class="my-1">
		<a class="dfTx" href="/manage/collection">&leftarrow;Back</a>
	</div>
	<form method="POST" use:enhance>
		<FormCollection {...newObj} />
		<div class="div-form max-w-full">
			<label for="instructor">Subject Specialist: </label>
			<input type="hidden" name="instructor" bind:value={instructor} />
			<input type="text" bind:value={instructorName} on:click|preventDefault={viewDropdown} />
			<div
				class="flex flex-col w-full max-w-280 gap-2 dfBgSecond absolute mt-17 overflow-y-scroll max-h-25"
				tabindex="0"
				role="button"
			>
				{#if dropdownInstructor}
					{#each getLibrarian as instructor}
						<button
							class="flex items-center gap-2 dfBgSecond my-2 px-3"
							on:click|preventDefault={() => chooseInstructor(instructor.id)}
							on:click|preventDefault={viewDropdown}
						>
							<img src={instructor.photo} class="w-12 h-12 object-cover rounded" alt="" />
							<p>{instructor.name}</p>
						</button>
					{/each}
				{/if}
			</div>
		</div>
		<div class="div-form">
			<label for="disiplin">Discipline</label>
			<select name="disiplin" id="disiplin">
				{#each Object.entries(grouped) as [groups, data]}
					<optgroup label={groups}>
						{#each data as group}
							<option value={group.id}>{group.disciplineName}</option>
						{/each}
					</optgroup>
				{/each}
			</select>
		</div>
		<button type="submit" class="default-button my-5">Create</button>
	</form>
</section>
