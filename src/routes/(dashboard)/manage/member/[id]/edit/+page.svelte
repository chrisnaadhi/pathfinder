<script>
	export let data;

	let placeholder = 'Edit Profile';
	const { userData, getDepartment, getRole } = data;
</script>

<section>
	<p>{placeholder}</p>
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
			<input type="text" name="username" id="username" value={userData.username} />
		</div>
		<div class="div-form">
			<label for="email">E-Mail:</label>
			<input type="email" name="email" id="email" value={userData.email} />
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
			<select name="role" id="role">
				{#each getRole as role}
					<option value={role.id} selected={userData.type === role.id}>{role.typeName}</option>
				{/each}
			</select>
		</div>
		<div class="flex my-3">
			<button type="submit" class="btn dfBg w-full">Update</button>
		</div>
	</form>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
