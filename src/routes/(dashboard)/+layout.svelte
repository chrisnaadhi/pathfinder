<script>
	let news = 'Sekilas berita dan informasi terbaru akan tampil disini';

	export let data;
</script>

<main class="w-full min-h-150 flex">
	<section class="bg-violet-50 text-violet-8 min-h-full w-60 px-4 py-2">
		<div class="flex flex-col items-center">
			<img src="/img/no-image.jpg" alt="foto" class="h-18 rounded-full" />
			{#if data.user}
				<p>Hello, {data.user.email.split('@')[0]}!</p>
			{/if}
		</div>
		<p class="font-bold">Main Menu Here</p>
		<div class="flex flex-col">
			<a href="/manage/#">Dashboard</a>
			<a href="/manage/collection">Collection</a>
			<a href="/manage/profile">Profile</a>
			<a href="/manage/#">Guides</a>
			<a href="/manage/#">Member</a>
			<a href="/manage/#">Help</a>
		</div>
	</section>
	<section class="w-full">
		<div class=" bg-violet-3 text-center text-xs font-bold py-1">
			<p>{news}</p>
		</div>
		<div class="p-2">
			<slot />
		</div>
	</section>
</main>
