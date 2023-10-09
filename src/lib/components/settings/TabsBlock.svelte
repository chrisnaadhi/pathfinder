<script lang="ts">
	import { onMount } from 'svelte';
	import Application from '$lib/components/settings/Tabs/Tab1.svelte';
	import Subjects from '$lib/components/settings/Tabs/Tab2.svelte';
	import Faculty from '$lib/components/settings/Tabs/Tab3.svelte';
	import Others from '$lib/components/settings/Tabs/Tab4.svelte';

	interface TabItems {
		label: string;
		value: number;
		component: any;
	}

	export let items: TabItems[] = [];
	export let activeTab: number = 1;

	let tabLocal = '';

	const changeTab = (tabValue: number) => {
		activeTab = tabValue;
		if (!tabLocal) {
			localStorage.setItem('tab', tabValue.toString());
		}
	};

	onMount(() => {
		const tab = localStorage.getItem('tab');
		activeTab = Number(tab);
	});
</script>

<section class="flex w-full mt-5">
	{#each items as item}
		<button
			class="tabs"
			class:tab-active={activeTab === item.value}
			on:click={() => changeTab(item.value)}
		>
			{item.label}
		</button>
	{/each}
</section>
<section>
	{#each items as item}
		{#if activeTab === item.value}
			<svelte:component this={item.component} />
		{/if}
	{/each}
</section>

<style>
	.tabs {
		--at-apply: bg-gray-3 py-1 px-6 rounded-tr-xl rounded-tl-xl w-full;
	}

	.tab-active {
		--at-apply: dfBgSecond dfTx font-semibold;
	}
</style>
