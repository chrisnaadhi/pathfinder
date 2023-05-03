<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
	$: isLinkActive = (/** @type {string} */ val) => {
		return path === val ? 'menu-active menu-link' : 'menu-link';
	};
</script>

<nav class="fixed top-0 w-full z-5">
	<a href="/" class={isLinkActive('/')}>Home</a>
	<a href="/about" class={isLinkActive('/about')}>About</a>
	<a href="/guides" class={isLinkActive('/guides')}>Guide</a>
	<a href="/librarian" class={isLinkActive('/librarian')}>Librarian</a>
	<a href="/contacts" class={isLinkActive('/contacts')}>Ask us!</a>
</nav>

<style>
	nav {
		--at-apply: flex items-center justify-center gap-5 py-2 bg-fuchsia-1;
	}

	.menu-link {
		--at-apply: relative py-2 font-500;
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
		--at-apply: bg-fuchsia-5;
	}

	.menu-link:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.menu-active {
		--at-apply: text-fuchsia-5;
	}
</style>
