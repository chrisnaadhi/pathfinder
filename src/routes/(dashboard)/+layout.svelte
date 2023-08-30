<script>
	import { fade, fly } from 'svelte/transition';

	let news = 'Sekilas berita dan informasi terbaru akan tampil disini';

	export let data;
</script>

<main class="w-full flex" in:fade={{ delay: 100, duration: 500 }}>
	<section class="bg-violet-50 text-violet-8 w-60 px-4 py-2">
		<div class="flex flex-col items-center">
			<img src="/img/no-image.jpg" alt="foto" class="h-18 rounded-full" />
		</div>
		<h5 class="font-bold text-center text-violet-5">PathfinderKit</h5>
		<div class="flex flex-col justify-between h-screen">
			<div class="flex flex-col gap-4">
				<a href="/manage/#" class="menu-item">
					<div class="i-mdi-home w-5 h-5" />
					<p>Dashboard</p>
				</a>
				<a href="/manage/profile" class="menu-item">
					<div class="i-mdi-account-edit w-5 h-5" />
					Profile
				</a>
				<a href="/manage/subjects" class="menu-item">
					<div class="i-mdi-bookshelf w-5 h-5" />
					Subjects
				</a>
				<a href="/manage/member" class="menu-item">
					<div class="i-mdi-account-group w-5 h-5" />
					Member
				</a>
				<a href="/manage/#" class="menu-item">
					<div class="i-mdi-folder-information w-5 h-5" />
					Guides
				</a>
				<a href="/manage/setting" class="menu-item">
					<div class="i-mdi-cog w-5 h-5" />
					Setting
				</a>
				<a href="/" class="btn text-center bg-violet-5 text-white font-semibold">Exit Dashboard</a>
			</div>
		</div>
	</section>
	<section class="w-full">
		<div class=" bg-violet-3 text-center text-xs font-bold py-1">
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
		--at-apply: flex items-center gap-1;
	}
</style>
