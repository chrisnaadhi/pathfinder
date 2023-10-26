<script>
	import { page } from '$app/stores';

	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	const member = 'Anggota';
	const { userData } = data;

	const isAdmin = () => {
		if (userData?.userType === 1) {
			return true;
		} else if (userData?.userType === 2) {
			return false;
		} else {
			return false;
		}
	};
</script>

<section>
	<h2 class="dfTx">{member}</h2>
	<div class="flex items-center justify-between my-5">
		<h4>Daftar Anggota berdasarkan Role</h4>
		<a href={$page.url.pathname + '/new'} class="btn dfBg">&plus;Tambah Anggota</a>
	</div>
	<div class="card-layer">
		<BaseCard>
			<div class="flex items-center gap-3">
				<div class="i-mdi-account-cog dfTx w-12 h-12" />
				<div>
					<h5>Administrator</h5>
					<p class="text-xs">Daftar Pengelola Admin</p>
				</div>
			</div>
			<div class="mt-2 flex">
				<a
					href={userData?.userType === 1 ? $page.url.pathname + '/admin' : '#'}
					class:cursor-not-allowed={userData?.userType !== 1}
					class="w-full text-white"
				>
					<button
						class:disable-btn={userData?.userType === 2}
						class:lihat-btn={userData?.userType === 1}
						class="w-full"
						disabled={userData?.userType !== 1}
					>
						Lihat
					</button>
				</a>
			</div>
		</BaseCard>
		<BaseCard>
			<div class="flex items-center gap-3">
				<div class="i-mdi-account-star dfTx w-12 h-12" />
				<div>
					<h5>Subject Specialist</h5>
					<p class="text-xs">Daftar Pengelola Subject Specialist</p>
				</div>
			</div>
			<div class="mt-2 flex w-full">
				<a href={$page.url.pathname + '/subject-specialist'} class="lihat-btn">Lihat</a>
			</div>
		</BaseCard>
		<BaseCard>
			<div class="flex items-center gap-3">
				<div class="i-mdi-account-group dfTx w-12 h-12" />
				<div>
					<h5>Users</h5>
					<p class="text-xs">Daftar Anggota, Users atau Pemustaka</p>
				</div>
			</div>
			<div class="mt-2 flex w-full">
				<a href={$page.url.pathname + '/users'} class="lihat-btn">Lihat</a>
			</div>
		</BaseCard>
	</div>
</section>

<style>
	h5 {
		--at-apply: dfTx;
	}

	.card-layer {
		--at-apply: flex flex-col gap-3 md:(grid grid-cols-3);
	}

	.lihat-btn {
		--at-apply: btn dfBg w-full items-center text-center text-sm;
	}

	.disable-btn {
		--at-apply: btn bg-gray-3 text-dark cursor-not-allowed;
	}
</style>
