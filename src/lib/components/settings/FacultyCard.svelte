<script lang="ts">
	export let facultyName: string | null;
	export let facultyValue: string | null;
</script>

<section class="bg-violet-50 rounded p-3">
	<h6>{facultyName}</h6>
	<p><span class="font-semibold">Kode:</span>{facultyValue}</p>
	<div class="w-full">
		<slot />
	</div>
</section>

<style>
	h6 {
		--at-apply: dfTx;
	}

	p {
		--at-apply: italic;
	}
</style>
