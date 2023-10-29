<script lang="ts">
	import { page } from '$app/stores';

	export let state: string | undefined;
	export let userData = '';

	$: path = $page.url.pathname;
	$: isLinkActive = (val: string) => {
		return path === val ? 'menu-active menu-link' : 'menu-link';
	};
</script>

<nav class="fixed top-0 w-full z-5 bg-white shadow-md">
	<section class="nav-section">
		<div>
			<a href="/">
				<h5>PathfinderKit</h5>
			</a>
		</div>
		<div class="hidden md:(flex items-center gap-5)">
			<a href="/" class={isLinkActive('/')}>Home</a>
			<a href="/about" class={isLinkActive('/about')}>About</a>
			<a href="/guides" class={isLinkActive('/guides')}>Guide</a>
			<a href="/subjects" class={isLinkActive('/subjects')}>Subjects</a>
			<a href="/librarian" class={isLinkActive('/librarian')}>Librarian</a>
			<a href="/contacts" class={isLinkActive('/contacts')}>Ask us!</a>
		</div>
		<div>
			{#if state === 'active' || state === 'idle'}
				<a href="/manage">Manage</a>
			{:else}
				<a href="/account">Account</a>
			{/if}
			{userData}
		</div>
	</section>
</nav>

<style>
	.nav-section {
		--at-apply: max-w-6xl ma flex items-center justify-between gap-5 py-4 px-5;
	}

	.menu-link {
		--at-apply: relative font-500 hover:dfTx6;
	}

	.menu-link::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
		--at-apply: dfBg;
	}

	.menu-link:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.menu-active {
		--at-apply: dfTx;
	}
</style>
