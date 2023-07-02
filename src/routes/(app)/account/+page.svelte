<script>
	import { enhance } from '$app/forms';
	let account = 'login';

	const changeForm = () => {
		account === 'login' ? (account = 'register') : (account = 'login');
	};
</script>

<main>
	{#if account === 'login'}
		<section class="py-15">
			<div class="account-block">
				<h2>Login</h2>
				<form action="?/signin" method="POST" use:enhance>
					<div class="input-block">
						<label for="email-login">E-Mail:</label>
						<input type="email" name="email-login" id="email-login" />
					</div>
					<div class="input-block">
						<label for="password-login">Password:</label>
						<input type="password" name="password-login" id="password-login" />
					</div>
					<button class="btn-account" type="submit">Login</button>
				</form>
				<div class="flex justify-between mt-2">
					<div>
						<button class="link" on:click={changeForm}>Create Account</button>
					</div>
					<div>
						<a href="#top">Forgot Password</a>
					</div>
				</div>
			</div>
		</section>
	{:else if account === 'register'}
		<section class="py-15">
			<div class="account-block">
				<h2>Register</h2>
				<form action="?/signup" method="POST" use:enhance>
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
				</form>
				<div class="flex justify-between mt-2">
					<div>
						<button class="link" on:click={changeForm}>Login</button>
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

	h2 {
		--at-apply: py-5;
	}

	.account-block {
		--at-apply: bg-violet-1 max-w-sm pb-10 px-10 rounded-lg ma;
	}

	.input-block {
		--at-apply: flex flex-col gap-2 text-left;
	}

	input {
		--at-apply: text-sm;
	}

	a, .link {
		--at-apply: text-sm text-violet-5 hover:underline;
	}

	.btn-account {
		--at-apply: btn bg-violet-5 mt-3 text-white w-full;
	}
</style>
