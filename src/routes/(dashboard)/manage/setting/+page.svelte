<script lang="ts">
	import { onMount } from 'svelte';
	import Application from '$lib/components/settings/Tabs/Tab1.svelte';
	import Subjects from '$lib/components/settings/Tabs/Tab2.svelte';
	import Faculty from '$lib/components/settings/Tabs/Tab3.svelte';
	import Others from '$lib/components/settings/Tabs/Tab4.svelte';
	import FacultyCard from '$lib/components/settings/FacultyCard.svelte';
	import EditModal from '$lib/components/generic/EditModal.svelte';
	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';

	export let activeTab: number = 1;
	export let data;

	let tabLocal = '';
	let items = [
		{ label: 'Applications', value: 1 },
		{ label: 'Subjects', value: 2 },
		{ label: 'Faculty', value: 3 },
		{ label: 'Other Settings', value: 4 }
	];
	const { getFaculty } = data;

	const changeTab = (tabValue: number) => {
		activeTab = tabValue;
		if (tabLocal === '') {
			localStorage.setItem('tab', tabValue.toString());
		}
	};

	onMount(() => {
		const tab = localStorage.getItem('tab');
		activeTab = Number(tab);
	});

	let placeholder = 'Setting';
</script>

<section>
	<h2 class="dfTx">{placeholder}</h2>
	<div class="flex w-full mt-5">
		{#each items as item}
			<button
				class="tabs"
				class:tab-active={activeTab === item.value}
				on:click={() => changeTab(item.value)}
			>
				{item.label}
			</button>
		{/each}
	</div>
	<div>
		{#if activeTab === 1}
			<Application />
		{:else if activeTab === 2}
			<Subjects />
		{:else if activeTab === 3}
			<Faculty>
				<div class="flex flex-col my-3 gap-3 md:(grid grid-cols-4)">
					{#each getFaculty as faculty}
						<FacultyCard facultyName={faculty.facultyName} facultyValue={faculty.facultyValue}>
							<div class="flex gap-2">
								<EditModal>
									<h5>Update Fakultas</h5>
									<form action="?/editFakultas" method="POST">
										<div class="div-form">
											<label for="namafakultas">Nama Fakultas:</label>
											<input
												type="text"
												name="namafakultas"
												id="namafakultas"
												value={faculty.facultyName}
											/>
										</div>
										<div class="div-form">
											<label for="slug">Identifier Fakultas:</label>
											<input type="text" name="slug" id="slug" value={faculty.facultyValue} />
											<p class="text-xs">
												Diisi dengan Unique Identifier Fakultas (tidak boleh duplikat), Contoh: 210
											</p>
										</div>
										<input type="hidden" name="idfakultas" value={faculty.id} />
										<div class="my-3">
											<button type="submit" class="dfBg btn">Update</button>
										</div>
									</form>
								</EditModal>
								<DeleteModal idData={faculty.id}>
									<h5 class="text-center">Hapus Data</h5>
									<p class="pb-3 text-center">Anda yakin ingin menghapus Fakultas ini ?</p>
								</DeleteModal>
							</div>
						</FacultyCard>
					{/each}
				</div>
			</Faculty>
		{:else if activeTab === 4}
			<Others />
		{/if}
	</div>
</section>

<style>
	h2 {
		--at-apply: py-1;
	}

	.tabs {
		--at-apply: bg-gray-3 py-1 px-6 rounded-tr-xl rounded-tl-xl w-full;
	}

	.tab-active {
		--at-apply: dfBgSecond dfTx font-semibold;
	}
</style>
