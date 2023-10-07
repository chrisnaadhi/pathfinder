<script lang="ts">
	import { enhance } from '$app/forms';

	let heading = 'PathfinderKit!';
	let email = '';
	let username = '';
	let usernameValue: HTMLInputElement;

	const generateUsername = () => {
		username = email.split('@')[0];
	};

	const handleSlug = () => {
		const value = usernameValue.value;
		const modifiedValue = value
			.toLocaleLowerCase()
			.replace(/[^\w\s]/gi, '')
			.replace(/\s/g, '_');
		usernameValue.value = modifiedValue;
	};

	export let data;
</script>

<main>
	<h2>{heading}</h2>
	{#if data.isAvailable}
		<div>
			<p class="mb-5">
				Look like you already have an Administrator Account. Try to login with this link instead.
			</p>
			<a href="/account" class="default-button">Login</a>
		</div>
	{:else}
		<div>
			<p>
				if you're on this page then you want to seed database, click the button below to seed it
			</p>
			<p>Status: {data.status}</p>
			<p>{data.isAvailable}</p>
			<form method="post" use:enhance>
				<div class="div-form">
					<label for="email">Email:</label>
					<input
						type="text"
						name="email"
						id="email"
						bind:value={email}
						on:input={generateUsername}
						on:change={handleSlug}
						required
					/>
					<p class="text-xs italic">Email institusi yang valid</p>
				</div>
				<div class="div-form">
					<label for="username">Username:</label>
					<input
						type="text"
						name="username"
						id="username"
						bind:value={username}
						bind:this={usernameValue}
						on:input={handleSlug}
						required
					/>
					<p class="text-xs italic">
						Tidak boleh menggunakan karakter spesial, hanya karakter _ (underscore) yang
						diperbolehkan
					</p>
				</div>
				<div class="div-form">
					<label for="password">Password: </label>
					<input type="password" name="password" id="password" required />
				</div>
				<button type="submit" class="default-button">Create PathfinderKit</button>
			</form>
		</div>
	{/if}
</main>

<style>
	main {
		--at-apply: flex flex-col items-center justify-center;
	}

	form {
		--at-apply: dfBgSecond px-20 py-10 rounded-lg flex flex-col gap-3 max-w-md ma;
	}

	p {
		--at-apply: italic;
	}
</style>
