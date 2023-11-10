<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { getLibrarian } = data;
	const back = backButton($page);
	let placeholder = 'Hello, svelte!';
</script>

<div class="dfBgSecond mt--5 py-10">
	<p class="font-semibold">Subject Specialist</p>
	<h4>Profil dari <span class="dfTx">{getLibrarian?.name}</span></h4>
</div>
<section>
	<div class="my-5 max-w-3xl">
		<div class="flex items-center gap-4">
			<img
				src={getLibrarian?.photo ?? '/img/default.jpg'}
				alt={getLibrarian?.name}
				class="w-32 h-32 rounded object-cover"
			/>
			<div class="text-left">
				<h4>{getLibrarian?.name}</h4>
				<h6 class="dfTx">
					{getLibrarian?.title !== '' ? getLibrarian?.title : 'Librarian Subject'}
				</h6>
				<a href="mailto:{getLibrarian?.email}">{getLibrarian?.email}</a>
				<p>{getLibrarian?.department?.departmentName}</p>
			</div>
		</div>
		<div class="text-left mt-5">
			<h6>Bio:</h6>
			<p class="text-gray-5">
				{getLibrarian?.bio === '' || getLibrarian?.bio === null
					? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae culpa sequi deleniti, numquam, minima corporis perferendis, saepe facilis porro quia! Officia recusandae optio molestias fugiat sit, cupiditate suscipit est labore quaerat quidem, similique corrupti ullam dolorem dolorum quibusdam eos exercitationem beatae omnis vitae id, sequi totam. Nihil laboriosam magnam voluptate neque consequatur tempore minus perspiciatis iure culpa expedita assumenda, vitae officia adipisci ipsa. Nesciunt, eligendi quam doloremque, impedit molestias tempore aut dolorem culpa excepturi adipisci libero debitis nisi. Consectetur asperiores hic ipsum reprehenderit, iure quas a officia unde harum aliquam dicta ex, mollitia voluptatem pariatur id labore expedita culpa, amet facere ab illum! Sunt ullam doloremque neque aliquam delectus ratione nam quam odio accusantium voluptatem. Tempora minima sint illum magnam quasi voluptatum officia adipisci error necessitatibus, alias, iusto aliquid corporis quia id iure voluptate quod, dolorum qui ducimus molestias vel illo veritatis corrupti quaerat. Nesciunt minima culpa inventore numquam dignissimos odio voluptates, odit dolor doloremque nihil perspiciatis ducimus harum, est et nisi sed magnam iure quasi. Nihil amet est harum reprehenderit a necessitatibus quod reiciendis, dicta ullam illum animi molestiae, eos odio deleniti laudantium ea dolorum accusamus fugiat expedita, quibusdam officia quas iusto! Non molestiae necessitatibus ab dolore. Quod velit debitis quidem sed corrupti voluptates, facere blanditiis fuga reiciendis temporibus. Recusandae molestias quaerat corrupti tempora eos ducimus excepturi qui, incidunt saepe, ipsa quibusdam reprehenderit ab similique quo maxime? Voluptate, perspiciatis est accusantium itaque sapiente iure amet, vero beatae tempora voluptatum quibusdam harum earum alias ipsa exercitationem, ex repudiandae consectetur?'
					: getLibrarian?.bio}
			</p>
		</div>
	</div>
	<div class="dfBgSecond my-5 p-5 h-full rounded">
		<h5>&bigstar; Daftar Keahlian Subjek &bigstar;</h5>
		{#if getLibrarian?.subjectsInstructor.length || [].length > 0}
			<div class="flex flex-col items-start gap-2 mt-5">
				{#each getLibrarian?.subjectsInstructor || [] as instruct}
					<a href="/subjects/{instruct.subjectSlug}">{instruct.subjectName}</a>
				{/each}
			</div>
		{:else}
			<p>Belum ada Subjek</p>
		{/if}
	</div>
</section>
<div class="flex max-w-6xl ma">
	<a href={back} class="btn w-full dfBg">&leftarrow;Kembali</a>
</div>

<style>
	section {
		--at-apply: max-w-6xl ma flex justify-between;
	}

	p {
		--at-apply: italic;
	}
</style>
