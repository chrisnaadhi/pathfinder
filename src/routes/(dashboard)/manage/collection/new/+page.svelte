<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import { getFacultyName, groupByFaculty } from '$lib/utils/dataStore';
	import FormCollection from '$lib/components/items/FormCollection.svelte';

	export let data;

	let { getDiscipline, getLibrarian, getFaculty, type, role } = data;

	let newObj = {
		subjectName: '',
		subjectSlug: '',
		status: 'pending',
		description: '',
		keywords: '',
		subjectType: 'topic',
		isAdmin: role === 1 ? true : false
	};

	/** @type {string | null} */
	let instructor = null;
	/** @type {string | undefined} */
	let instructorName = '';
	let dropdownInstructor = false;
	const facultyGrouped = Object.entries(groupByFaculty(getDiscipline));
	const back = backButton($page);

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
		<a class="btn bg-gray-2 text-dark" href={back}>&leftarrow;Back</a>
	</div>
	<form method="POST" use:enhance>
		<FormCollection {...newObj} />
		{#if type === 1}
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
		{/if}
		<div class="div-form">
			<label for="disiplin">Discipline</label>
			<div class="flex flex-col">
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
		</div>
		<button type="submit" class="default-button my-5">Create</button>
	</form>
</section>
