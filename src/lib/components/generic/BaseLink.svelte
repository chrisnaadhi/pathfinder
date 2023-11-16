<script lang="ts">
	import { base } from '$app/paths';

	let classComponent: any;

	export let urlPath: string = '/';
	export let urlName: string = 'Klik Disini';
	export { classComponent as class };
</script>

<a href="{base}{urlPath}" class={`${classComponent || ''}`}>{urlName}</a>
