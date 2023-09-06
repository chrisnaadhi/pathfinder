<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="text-center text-violet-5">
	<h1>{$page.status}: {$page.error?.message}</h1>
</main>
