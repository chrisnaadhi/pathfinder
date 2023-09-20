<script>
	import { enhance } from '$app/forms';

	export let data;
	let { userData, departmentList } = data;

	const name = 'Profile';
	const authorizedExtension = ['.jpg', '.jpeg', '.png', '.webp'];
</script>

<section>
	<h1 class="text-violet-5">{name}</h1>
	<img
		src={userData?.photo}
		class="w-32 h-32 object-cover bg-violet-6 rounded-full border border-violet"
		alt={userData?.fullName}
	/>
	<form method="POST" action="?/updateProfile" use:enhance>
		<div class="div-form">
			<label for="nama">Nama Lengkap: </label>
			<input type="text" value={userData?.fullName} name="nama-lengkap" id="nama" />
		</div>
		<div class="div-form">
			<label for="email">Email: </label>
			<input
				type="text"
				value={userData?.email}
				name="email"
				id="email"
				disabled
				autocomplete="off"
			/>
		</div>
		<div class="div-form">
			<label for="title">Title: </label>
			<input type="text" value={userData?.title} name="title" id="title" />
		</div>
		<div class="div-form">
			<label for="department">Department: </label>
			<select name="department" id="department">
				{#each departmentList as item}
					<option value={item.id} selected={userData?.department === item.id}>
						{item.departmentName}
					</option>
				{/each}
			</select>
		</div>
		<div class="div-form">
			<label for="role">Role</label>
			<input type="text" value={userData?.userType} name="role" id="role" disabled />
		</div>
		<div class="div-form">
			<label for="bio">Biodata: </label>
			<textarea value={userData?.bio} name="bio" id="bio" />
		</div>
		<div class="div-form">
			<label for="photo">Photo Profile: </label>
			<input type="file" name="photo" id="photo" accept={authorizedExtension.join(',')} />
		</div>
		<div>
			<button type="submit" class="btn bg-violet-6 py-2 px-2 text-white w-full">Update</button>
		</div>
	</form>
</section>

<style>
	form {
		--at-apply: grid grid-cols-2 gap-5;
	}
</style>
