<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { enhance } from '$app/forms';

	export let data;

	let account = 'login';
</script>

<main>
	{#if account === 'login'}
		<section
			class="py-15"
			in:slide={{ delay: 100, duration: 500, axis: 'x' }}
			out:fade={{ delay: 0, duration: 100, easing: sineOut }}
		>
			<div class="account-block">
				<h2>Login</h2>
				<form action="?/signin" method="POST" use:enhance>
					{#if data.loginStatus === 'AUTH_INVALID_PASSWORD'}
						<div class="bg-red text-white rounded">
							<p>Password Salah</p>
						</div>
					{:else if data.loginStatus === 'AUTH_INVALID_KEY_ID'}
						<div class="bg-red text-white rounded">
							<p>Akun ini tidak ditemukan</p>
						</div>
					{/if}
					<div class="input-block">
						<label for="username">Username:</label>
						<input type="username" name="username" id="username" required />
					</div>
					<div class="input-block">
						<label for="password-login">Password:</label>
						<input type="password" name="password-login" id="password-login" required />
					</div>
					<button class="btn-account" type="submit">Login</button>
				</form>
				<div class="flex justify-between mt-2">
					<div>
						<button class="link" on:click={() => (account = 'register')}>Create Account</button>
					</div>
					<div>
						<a href="#top">Forgot Password</a>
					</div>
				</div>
			</div>
		</section>
	{:else if account === 'register'}
		<section
			class="py-15"
			in:slide={{ delay: 100, duration: 500, axis: 'x' }}
			out:fade={{ delay: 0, duration: 100, easing: sineOut }}
		>
			<div class="account-block">
				<h2>Register</h2>
				<!-- <form action="?/signup" method="POST" use:enhance>
					<div class="input-block">
						<label for="nama-lengkap">Nama Lengkap:</label>
						<input type="text" name="nama-lengkap" id="nama-lengkap" />
					</div>
					<div class="input-block">
						<label for="email-regis">E-Mail: </label>
						<input type="text" name="email-regis" id="email-regis" />
					</div>
					<div class="input-block">
						<label for="password-regis">Password: </label>
						<input type="password" name="password-regis" id="password-regis" />
					</div>
					<button type="submit" class="btn-account">Register</button>
				</form> -->
				<h4>Pembuatan Akun ditutup sementara.</h4>
				<div class="flex justify-between mt-2">
					<div>
						<button class="link" on:click={() => (account = 'login')}>Login</button>
					</div>
					<div>
						<a href="#top">Forgot Password</a>
					</div>
				</div>
			</div>
		</section>
	{/if}
</main>

<style>
	main {
		--at-apply: min-h-full;
	}

	form {
		--at-apply: flex flex-col gap-3;
	}

	h2 {
		--at-apply: py-5;
	}

	.account-block {
		--at-apply: dfBgSecond max-w-sm pb-10 px-10 rounded-lg ma;
	}

	.input-block {
		--at-apply: flex flex-col gap-1 text-left;
	}

	input {
		--at-apply: text-sm;
	}

	a, .link {
		--at-apply: text-sm bg-transparent dfTx hover:underline;
	}

	.btn-account {
		--at-apply: btn dfBg mt-3 w-full;
	}
</style>
