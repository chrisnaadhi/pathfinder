<script lang="ts">
	interface TabItems {
		label: string;
		value: number;
		component: any;
	}

	export let items: TabItems[] = [];
	export let activeTab = 1;

	const changeTab = (tabValue: number) => {
		activeTab = tabValue;
	};
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
