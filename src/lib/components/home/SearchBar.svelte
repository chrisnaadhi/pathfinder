<section>
	<div class="relative max-w-xl ma">
		<input type="search" name="searchbox" placeholder="Find your path.." />
		<button type="submit">Cari</button>
	</div>
</section>

<style>
	section {
		--at-apply: w-full px-2 md:px-0;
	}

	input {
		--at-apply: pl-4 pr-17 py-4 min-w-full rounded-lg;
	}

	input:focus {
		--at-apply: outline-none;
	}

	button {
		--at-apply: btn bg-violet text-white absolute top-2 right-2;
	}
</style>
