<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import { base } from '$app/paths';
	import SubmitButton from '$lib/components/generic/SubmitButton.svelte';
	import { checkRole } from '$lib/utils/textFormatter';

	export let data;
	let { userData, departmentList } = data;

	const name = 'Profile';
	const authorizedExtension = ['.jpg', '.jpeg', '.png', '.webp'];
	const uploadPhoto = (event) => {
		const target = event.target;
		if (target.files[0].size > 1 * 1024 * 1024) {
			alert('Maksimal Ukuran Foto 1Mb!');
			target.value = '';
		}
	};
</script>

<section>
	<h2 class="dfTx">{name}</h2>
	<img
		src={userData?.photo === null ? base + `/img/default.jpg` : base + userData?.photo}
		class="w-32 h-32 object-cover rounded-full dfBorder"
		alt={userData?.username}
	/>
	<form method="POST" action="?/updateProfile" use:enhance>
		<div class="div-form">
			<label for="nama">Nama Lengkap: </label>
			<input type="text" value={userData?.fullName} name="nama-lengkap" id="nama" />
		</div>
		<div class="div-form">
			<label for="title">Title: </label>
			<input type="text" value={userData?.title} name="title" id="title" />
		</div>
		<div class="div-form">
			<label for="username">Username:</label>
			<input type="text" value={userData?.username} name="username" id="username" disabled />
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
			<label for="role">Role:</label>
			<input type="text" value={checkRole(userData?.userType)} name="role" id="role" disabled />
		</div>
		<div class="div-form">
			<label for="bio">Biodata: </label>
			<textarea value={userData?.bio} name="bio" id="bio" rows="5" />
		</div>
		<div class="div-form">
			<label for="photo">Photo Profile: </label>
			<input
				type="file"
				name="photo"
				id="photo"
				enctype="multipart/form-data"
				accept={authorizedExtension.join(',')}
				on:change={uploadPhoto}
			/>
		</div>
		<div>
			<SubmitButton btnValue="Update" btnColor="dfBg" />
		</div>
	</form>
</section>

<style>
	form {
		--at-apply: grid grid-cols-2 gap-3;
	}
</style>
