<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	const name = 'Profile';
	export let data;

	const { userdata } = data;
</script>

<section>
	<h1 class="text-violet-5">{name}</h1>
	<form method="POST" action="?/updateProfile" use:enhance>
		<!-- <div>
			<label for="name">Nama Lengkap: </label>
			<input type="text" bind:value={userdata.name} name="nama-lengkap" />
		</div>
		<div>
			<label for="email">Email: </label>
			<input type="text" bind:value={userdata.email} name="email" disabled />
		</div>
		<div>
			<label for="title">Title: </label>
			<input type="text" bind:value={userdata.title} name="title" />
		</div>
		<div>
			<label for="bio">Biodata: </label>
			<textarea type="text" bind:value={userdata.bio} name="bio" />
		</div>
		<button type="submit" class="btn bg-violet-6 py-1 px-2 text-white">Update</button> -->
	</form>
</section>
