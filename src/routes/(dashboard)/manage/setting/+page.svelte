<script lang="ts">
	import Tab1 from '$lib/components/settings/Tabs/Tab1.svelte';
	import Tab2 from '$lib/components/settings/Tabs/Tab2.svelte';
	import Tab3 from '$lib/components/settings/Tabs/Tab3.svelte';
	import Tab4 from '$lib/components/settings/Tabs/Tab4.svelte';
	import TabsBlock from '$lib/components/settings/TabsBlock.svelte';

	let items = [
		{ label: 'Applications', value: 1, component: Tab1 },
		{ label: 'Subjects', value: 2, component: Tab2 },
		{ label: 'Faculty', value: 3, component: Tab3 },
		{ label: 'Other Settings', value: 4, component: Tab4 }
	];

	let placeholder = 'Setting';
</script>

<section>
	<h2>{placeholder}</h2>
	<TabsBlock {items} />
</section>

<style>
	h2 {
		--at-apply: py-1;
	}
</style>
