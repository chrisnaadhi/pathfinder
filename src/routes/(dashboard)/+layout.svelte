<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let news = 'Sekilas berita dan informasi terbaru akan tampil disini';

	export let data;
	const { userData } = data;
	$: activeUrl = (path: string) => {
		return $page.url.pathname.includes(path) ? true : false;
	};
</script>

<main class="w-full flex" in:fade={{ delay: 100, duration: 500 }}>
	<section class="dfBgThird dfTx w-60 px-4 py-2">
		<div class="flex flex-col items-center">
			<img
				src={userData?.photo === null ? '/img/default.jpg' : userData?.photo}
				alt="foto"
				class="rounded-full w-20 h-20 object-cover"
			/>
		</div>
		<h5 class="font-bold text-center dfTx">PathfinderKit</h5>
		<div class="flex flex-col justify-between h-screen">
			<nav class="flex flex-col gap-4 my-4">
				<a
					href="/manage"
					class="menu-item"
					class:active-menu={$page.url.pathname === '/manage'}
					data-sveltekit-preload-data="tap"
				>
					<div class="i-mdi-home w-5 h-5" />
					<p>Dashboard</p>
				</a>
				<a
					href="/manage/profile"
					class="menu-item"
					class:active-menu={activeUrl('/profile')}
					data-sveltekit-preload-data="tap"
				>
					<div class="i-mdi-account-edit w-5 h-5" />
					Profile
				</a>
				<a
					href="/manage/discipline"
					class="menu-item"
					class:active-menu={activeUrl('/discipline')}
					data-sveltekit-preload-data="tap"
				>
					<div class="i-mdi-school w-5 h-5" />
					Discipline
				</a>
				<a
					href="/manage/collection"
					class="menu-item"
					class:active-menu={activeUrl('/collection')}
					data-sveltekit-preload-data="tap"
				>
					<div class="i-mdi-bookshelf w-5 h-5" />
					Subjects
				</a>
				<a
					href="/manage/member"
					class="menu-item"
					class:active-menu={activeUrl('/member')}
					data-sveltekit-preload-data="tap"
				>
					<div class="i-mdi-account-group w-5 h-5" />
					Member
				</a>
				<a
					href="/manage/#"
					class="menu-item"
					class:active-menu={activeUrl('/guides')}
					data-sveltekit-preload-data="tap"
				>
					<div class="i-mdi-folder-information w-5 h-5" />
					Guides
				</a>
				{#if userData?.userType === 1}
					<a
						href="/manage/setting"
						class="menu-item"
						class:active-menu={activeUrl('/setting')}
						data-sveltekit-preload-data="tap"
					>
						<div class="i-mdi-cog w-5 h-5" />
						Setting
					</a>
				{/if}

				<a
					href="/"
					class="btn text-center bg-red text-white font-semibold"
					data-sveltekit-preload-data="tap">Exit Dashboard</a
				>
			</nav>
		</div>
	</section>
	<section class="w-full">
		<div class=" dfBgSecond text-center text-xs font-bold py-1">
			<p>{news}</p>
		</div>
		{#key data.url}
			<div class="p-2" in:fade={{ delay: 500, duration: 500 }} out:fly={{ y: 50, duration: 400 }}>
				<slot />
			</div>
		{/key}
	</section>
</main>

<style>
	.menu-item {
		--at-apply: flex items-center gap-1 p-1 rounded hover:dfBg;
	}

	.active-menu {
		--at-apply: dfBg;
	}
</style>
