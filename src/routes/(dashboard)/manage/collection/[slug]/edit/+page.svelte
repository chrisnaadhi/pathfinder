<script>
	import { enhance } from '$app/forms';
	import { getFacultyName, groupByFaculty } from '$lib/utils/dataStore';
	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';
	import FormCollection from '$lib/components/items/FormCollection.svelte';

	export let data;

	let { subjectData, getDiscipline, getLibrarian, getFaculty } = data;

	let instructor = subjectData?.instructor;
	let instructorData = getLibrarian.find((lib) => lib.id === instructor);
	let instructorName = instructorData?.name;
	let dropdownInstructor = false;
	const facultyGrouped = Object.entries(groupByFaculty(getDiscipline));

	/** @param {string} value */
	const chooseInstructor = (value) => {
		let chosen = getLibrarian.find((lib) => lib.id === value);
		instructor = value;
		instructorName = chosen?.name;
		instructorData = chosen;
	};

	const viewDropdown = () => {
		dropdownInstructor = !dropdownInstructor;
	};

	let objData = {
		subjectName: subjectData.subjectName,
		subjectSlug: subjectData.subjectSlug,
		status: subjectData.subjectStatus,
		description: subjectData.subjectDescription,
		keywords: subjectData.keywords,
		subjectType: subjectData.type
	};
</script>

<section>
	<form method="POST" action="?/updateData" use:enhance>
		<h3 class="dfTx">{subjectData.subjectName}</h3>
		<div class="text-white">
			<a href="/manage/collection">
				<button class="dfTx bg-transparent">&leftarrow;Back</button>
			</a>
		</div>
		<FormCollection {...objData} />
		<div class="div-form max-w-full">
			<label for="instructor">Subject Specialist: </label>
			<input type="hidden" name="instructor" id="instructor" bind:value={instructor} />
			<input
				type="text"
				name="viewInstructor"
				id="viewInstructor"
				bind:value={instructorName}
				on:click|preventDefault={viewDropdown}
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
							<p>{instructor.name} - {instructor.email}</p>
						</button>
					{/each}
				{/if}
			</div>
		</div>
		<div class="div-form">
			<label for="disiplin">Discipline: </label>
			<select name="disiplin" id="disiplin">
				{#each facultyGrouped as [groups, data]}
					<optgroup label={getFacultyName(getFaculty, Number(groups))}>
						{#each data as group}
							<option value={group.id} selected={group.id === subjectData.disciplineId}>
								{group.disciplineName}
							</option>
						{/each}
					</optgroup>
				{/each}
			</select>
		</div>
		<div class="flex items-center gap-3">
			<button type="submit" class="default-button">Update</button>
			<DeleteModal>
				<p>Anda yakin ingin menghapus ini ?</p>
			</DeleteModal>
		</div>
	</form>
</section>

<style>
	button {
		--at-apply: my-3;
	}
</style>
