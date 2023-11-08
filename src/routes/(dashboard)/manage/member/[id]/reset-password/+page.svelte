<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { getUserData } = data;
	let password = '';
	let passwordConfirm = '';

	let isSame = false;

	const checkPassword = () => {
		if (password === passwordConfirm && password !== '' && passwordConfirm !== '') {
			isSame = true;
		} else {
			isSame = false;
		}
	};
	const back = backButton($page);
</script>

<section>
	<h4>Reset Password <span class="">{getUserData[0].username}</span></h4>
	<div class="my-5">
		<a href={back} class="btn bg-gray-2 dfTx">&leftarrow;Kembali</a>
	</div>
	<form action="?/updatePassword" method="POST" use:enhance>
		<div class="div-form">
			<label for="password">Password Baru:</label>
			<input
				type="password"
				name="password"
				id="password"
				bind:value={password}
				on:input={checkPassword}
			/>
			{#if !isSame && password.length > 0}
				<p class="text-red">Password belum sama & tidak sesuai</p>
			{/if}
		</div>
		<div class="div-form">
			<label for="confirm">Konfirmasi Password Baru:</label>
			<input
				type="password"
				name="confirm"
				id="confirm"
				bind:value={passwordConfirm}
				on:input={checkPassword}
			/>
			{#if !isSame && passwordConfirm.length > 0}
				<p class="text-red">Password belum sama & tidak sesuai</p>
			{/if}
		</div>
		{#if isSame && password.length > 0 && passwordConfirm.length > 0}
			<p class="text-green-6">Password telah sesuai silahkan update.</p>
		{/if}

		<button
			type="submit"
			class="btn dfBg w-full mt-3 py-2"
			class:disabled-btn={!isSame}
			disabled={!isSame}>Update</button
		>
	</form>
</section>

<style>
	p {
		--at-apply: italic;
	}

	.disabled-btn {
		--at-apply: bg-gray-2 text-dark cursor-not-allowed;
	}
</style>
