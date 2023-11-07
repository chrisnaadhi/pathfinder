<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { userProfile, type } = data;
	const back = backButton($page);

	console.log(userProfile);
</script>

<section>
	<h3>{userProfile.username}'s Profile</h3>
	<div class="p-5 flex gap-5 w-full rounded my-5">
		<img
			src={userProfile.photo ?? '/img/default.jpg'}
			class="w-32 h-32 rounded-full"
			alt={userProfile.fullName}
		/>
		<div class="flex flex-col gap-5">
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
	<div class="my-5">
		<a href={back} class="btn bg-gray-2">&leftarrow;Kembali</a>
		{#if type === 1}
			<a href={$page.url.pathname + '/edit'} class="btn dfBg">Edit</a>
		{/if}
	</div>
</section>

<style>
	.content-paragraph {
		--at-apply: text-lg;
	}
</style>
