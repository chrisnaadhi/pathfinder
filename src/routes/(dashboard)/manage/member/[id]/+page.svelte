<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { userProfile, type } = data;
	const back = backButton($page);
</script>

<section>
	<h3>{userProfile.username}'s Profile</h3>
	<div class="p-5 flex gap-5 w-full rounded my-5">
		<div class="w-full md:w-45">
			<img
				src={userProfile.photo === null ? '/img/default.jpg' : '/pathfinder' + userProfile.photo}
				class="w-32 h-32 rounded-full object-cover"
				alt={userProfile.fullName}
			/>
		</div>
		<div class="flex flex-col gap-5 md:(grid grid-cols-2) w-full">
			<div>
				<h6>Nama Lengkap:</h6>
				<p class="content-paragraph">{userProfile.fullName}</p>
			</div>
			<div>
				<h6>Email:</h6>
				<p class="content-paragraph">{userProfile.email}</p>
			</div>
			<div>
				<h6>Role:</h6>
				<p class="content-paragraph">{userProfile.role}</p>
			</div>
			<div>
				<h6>Jabatan:</h6>
				<p class="content-paragraph">{userProfile.title}</p>
			</div>
			<div>
				<h6>Departemen:</h6>
				<p class="content-paragraph">{userProfile.departmentName}</p>
			</div>
			<div>
				<h6>Biografi:</h6>
				<p class="content-paragraph">{userProfile.bio ?? 'Tidak ada Bio untuk saat ini'}</p>
			</div>
		</div>
	</div>
	<div class="mb-5">
		{#if type === 1}
			<div class="mb-5">
				<a href={$page.url.pathname + '/edit'} class="btn dfBg">Edit Profil</a>
				<a href={$page.url.pathname + '/reset-password'} class="btn bg-orange text-white"
					>Reset Password</a
				>
			</div>
		{/if}
		<a href={back} class="btn bg-gray-2">&leftarrow;Kembali</a>
	</div>
</section>

<style>
	.content-paragraph {
		--at-apply: text-lg;
	}
</style>
