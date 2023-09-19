<script>
	import { enhance } from '$app/forms';

	export let data;
	let { userData } = data;

	const name = 'Profile';
	const authorizedExtension = ['.jpg', '.jpeg', '.png', '.webp'];
</script>

<section>
	<h1 class="text-violet-5">{name}</h1>
	<pre>
		{userData?.fullName}
	</pre>
	<img src={userData?.photo} class="w-32 h-32" alt={userData?.photo} />
	<form method="POST" action="?/updateProfile" use:enhance>
		<div class="div-form">
			<label for="name">Nama Lengkap: </label>
			<input type="text" value={userData?.fullName} name="nama-lengkap" />
		</div>
		<div class="div-form">
			<label for="email">Email: </label>
			<input type="text" value={userData?.email} name="email" disabled />
		</div>
		<div class="div-form">
			<label for="title">Title: </label>
			<input type="text" value={userData?.title} name="title" />
		</div>
		<div class="div-form">
			<label for="department">Department: </label>
			<input type="text" value={userData?.department} name="department" />
		</div>
		<div class="div-form">
			<label for="type">Role</label>
			<input type="text" value={userData?.userType} name="role" disabled />
		</div>
		<div class="div-form">
			<label for="bio">Biodata: </label>
			<textarea value={userData?.bio} name="bio" />
		</div>
		<div class="div-form">
			<label for="photo">Photo Profile: </label>
			<input type="file" name="photo" id="photo" accept={authorizedExtension.join(',')} />
		</div>
		<div class="my-5">
			<button type="submit" class="btn bg-violet-6 py-1 px-2 text-white">Update</button>
		</div>
	</form>
</section>
