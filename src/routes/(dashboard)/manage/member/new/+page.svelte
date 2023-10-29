<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	let placeholder = 'Tambah Anggota';
	let email = '';
	let username = '';
	let slugValue: HTMLInputElement;
	const { getDepartment, userRole } = data;
	const back = backButton($page);

	const generateUsername = () => {
		username = email.split('@')[0];
	};

	const handleSlug = () => {
		const value = slugValue.value;
		const modifiedValue = value
			.toLocaleLowerCase()
			.replace(/[^\w\s]/gi, '')
			.replace(/\s/g, '_');
		slugValue.value = modifiedValue;
	};
</script>

<section>
	<h3 class="dfTx">{placeholder}</h3>
	<a href={back}>&leftarrow;Kembali</a>
	<form action="?/addUser" method="POST" use:enhance class="flex flex-col gap-3">
		<div class="div-form">
			<label for="name">Nama Lengkap:</label>
			<input type="text" name="name" id="name" required />
		</div>
		<div class="div-form">
			<label for="email">E-Mail:</label>
			<input
				type="email"
				name="email"
				id="email"
				bind:value={email}
				on:input={generateUsername}
				on:change={handleSlug}
				required
			/>
		</div>
		<div class="div-form">
			<label for="username">Username:</label>
			<input
				type="text"
				name="username"
				id="username"
				bind:value={username}
				bind:this={slugValue}
				on:input={handleSlug}
				required
			/>
		</div>
		<div class="div-form">
			<label for="password">Password:</label>
			<input type="password" name="password" id="password" required />
		</div>
		<div class="div-form">
			<label for="role">Role:</label>
			<select name="role" id="role" required>
				<option value="" disabled selected>Pilih Role</option>
				{#if userRole === 1}
					<option value="1">Super Admin</option>
				{/if}
				<option value="2">Subject Librarian</option>
				<option value="3">Lecturer(Dosen)</option>
				<option value="4">User</option>
			</select>
		</div>
		<div class="div-form">
			<label for="title">Posisi/Jabatan:</label>
			<input type="text" name="title" id="title" />
		</div>
		<div class="div-form">
			<label for="department">Departemen:</label>
			<select name="department" id="department">
				<option disabled>Pilih Departemen</option>
				{#each getDepartment as department}
					<option value={department.id}>{department.departmentName}</option>
				{/each}
			</select>
		</div>
		<div>
			<button type="submit" class="btn dfBg">Buat</button>
		</div>
	</form>
</section>

<style>
</style>
