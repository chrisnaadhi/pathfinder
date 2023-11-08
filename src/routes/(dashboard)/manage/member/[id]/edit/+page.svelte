<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	export let data;

	let placeholder = 'Edit Profile';
	const { userData, getDepartment, getRole } = data;
	const back = backButton($page);
</script>

<section>
	<h4>{placeholder}</h4>
	<form action="?/updateData" method="POST">
		<div class="div-form">
			<label for="nama">Nama Lengkap: </label>
			<input type="text" name="nama" id="nama" value={userData.name} />
		</div>
		<div class="div-form">
			<label for="title">Title:</label>
			<input type="text" name="title" id="title" value={userData.title} />
		</div>
		<div class="div-form">
			<label for="username">Username:</label>
			<input type="text" name="username" id="username" value={userData.username} disabled />
		</div>
		<div class="div-form">
			<label for="email">E-Mail:</label>
			<input type="email" name="email" id="email" value={userData.email} disabled />
		</div>
		<div class="div-form">
			<label for="department">Department:</label>
			<select name="department" id="department">
				{#each getDepartment as department}
					<option value={department.id} selected={userData.departmentId === department.id}>
						{department.departmentName}
					</option>
				{/each}
			</select>
		</div>
		<div class="div-form">
			<label for="role">Role:</label>
			<select name="role" id="role" disabled={userData.type === 1}>
				{#each getRole as role}
					<option value={role.id} selected={userData.type === role.id}>{role.typeName}</option>
				{/each}
			</select>
		</div>
		<div class="flex my-3 text-center gap-3">
			<a href={back} class="back">&leftarrow;Kembali</a>
			<button type="submit" class="btn dfBg w-full">Update</button>
		</div>
	</form>
</section>

<style>
	.back {
		--at-apply: btn bg-gray-3 text-dark w-full;
	}
</style>
