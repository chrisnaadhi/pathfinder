<script>
	import GenericBaseCard from '$lib/components/generic/BaseCard.svelte';
</script>

<section>
	<h1>Hubungi Kami</h1>
	<div class="person-group">
		<div class="person">
			<p>Koordinator Pathfinder :</p>

			<GenericBaseCard>
				<div class="person">
					<h4>Yulianti, S.Sos., M.I.Kom.</h4>
					<a href="mailto:yulianti18@unpad.ac.id" target="_blank" class="italic"
						>yulianti18@unpad.ac.id</a
					>
				</div>
			</GenericBaseCard>
		</div>
		<div>
			<p>System Administrator Pathfinder :</p>
			<GenericBaseCard>
				<div class="person">
					<h4>Chrisna Adhi Pranoto, S.S.I.</h4>
					<a href="mailto:chrisna.adhi@unpad.ac.id" target="_blank" class="italic"
						>chrisna.adhi@unpad.ac.id</a
					>
				</div>
			</GenericBaseCard>
		</div>
	</div>
</section>

<style>
	section {
		--at-apply: max-w-6xl ma pb-10;
	}

	.person-group {
		--at-apply: flex items-center justify-center gap-5 w-full my-5;
	}

	.person {
		--at-apply: py-6 px-12;
	}

	p {
		--at-apply: font-semibold;
	}
</style>
