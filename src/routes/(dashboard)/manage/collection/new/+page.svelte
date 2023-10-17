<script>
	import { enhance } from '$app/forms';
	import { getFacultyName, groupByFaculty } from '$lib/utils/dataStore';
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
	let { getDiscipline, getLibrarian, getFaculty } = data;

	/** @type {string | null} */
	let instructor = null;
	/** @type {string | undefined} */
	let instructorName = '';
	let dropdownInstructor = false;
	const facultyGrouped = Object.entries(groupByFaculty(getDiscipline));

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
		<div class="div-form w-full">
			<label for="instructor">Subject Specialist: </label>
			<input type="hidden" name="instructor" bind:value={instructor} required />
			<input
				type="text"
				bind:value={instructorName}
				on:click|preventDefault={viewDropdown}
				readonly
				required
			/>
			<div
				class="flex flex-col gap-2 dfBgSecond absolute mt-17 overflow-y-scroll max-h-25"
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
			<select name="disiplin" id="disiplin" required>
				{#if facultyGrouped.length > 0}
					{#each facultyGrouped as [groups, data]}
						<optgroup label={getFacultyName(getFaculty, Number(groups))}>
							{#each data as group}
								<option value={group.id}>{group.disciplineName}</option>
							{/each}
						</optgroup>
					{/each}
				{:else}
					<option disabled selected>Belum ada Disiplin!</option>
				{/if}
			</select>
		</div>
		<button type="submit" class="default-button my-5">Create</button>
	</form>
</section>
