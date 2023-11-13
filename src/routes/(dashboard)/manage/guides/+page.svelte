<script lang="ts">
	import { fade } from 'svelte/transition';

	let placeholder = 'Tata cara penggunaan Pathfinder';
	let tabList = [
		{
			id: 1,
			slug: 'hierarki',
			name: 'Hierarki Data'
		},
		{
			id: 2,
			slug: 'workflow',
			name: 'Workflow Data'
		},
		{
			id: 3,
			slug: 'typesubject',
			name: 'Subject Type'
		}
	];
	let selectedTab = 'hierarki';

	const selectTab = (value: string) => {
		selectedTab = value;
	};
</script>

<section>
	<h3>{placeholder}</h3>
	<p>
		Tata cara dan panduan dalam menggunakan Lantera Pathfinder. Tata cara ini disusun berdasarkan
		hierarki data dalam subject yang menyusun setiap konten dalam sebuah subjek disusun berdasarkan
		kelompoknya masing-masing, mulai dari jenis koleksi, subjek, disiplin ilmu hingga fakultas.
	</p>

	<section class="flex gap-2 mt-5">
		{#each tabList as tab}
			<button
				class="btn"
				class:active-btn={selectedTab === tab.slug}
				on:click={() => selectTab(tab.slug)}
			>
				<h6>{tab.name}</h6>
			</button>
		{/each}
	</section>

	{#if selectedTab === 'hierarki'}
		<section transition:fade={{ delay: 150, duration: 300 }}>
			<h4 class="my-5">Hierarki Data dalam <span class="dfTx">Pathfinder</span></h4>
			<div class="flex flex-col gap-1">
				<div class="flex">
					<div class="text-center">
						<div class="dfBg w-50 p-5 rounded">
							<h5>Faculty</h5>
						</div>
						<div class="font-semibold text-5xl m-0">&DownArrow;</div>
					</div>

					<div class="px-5">
						<h5 class="dfTx">Faculty</h5>
						<p>
							Merupakan komponen kelompok paling atas untuk menampung setiap disiplin keilmuan yang
							berada dalam satu rumpun. Contohnya adalah
							<span class="highlight"> Fakultas Ilmu Komunikasi </span> yang berada di Universitas Padjadjaran
						</p>
					</div>
				</div>

				<div class="flex">
					<div class="text-center">
						<div class="dfBg w-50 p-5 rounded">
							<h5>Discipline</h5>
						</div>
						<div class="font-semibold text-5xl m-0">&DownArrow;</div>
					</div>
					<div class="px-5">
						<h5 class="dfTx">Discipline</h5>
						<p>
							Merupakan komponen terkait disiplin keilmuan yang merujuk pada kumpulan subjek satu
							rumpun. Disiplin merupakan konsentrasi studi yang merinci dan mengelompokkan berbagai
							subjek dalam satu disiplin keilmuan. Contohnya adalah
							<span class="highlight"> Ilmu Perpustakaan </span>
							yang berada di Fakultas Ilmu Komunikasi Universitas Padjadjaran.
						</p>
					</div>
				</div>

				<div class="flex">
					<div class="text-center">
						<div class="dfBg w-50 p-5 rounded">
							<h5>Subjects</h5>
						</div>
						<div class="font-semibold text-5xl m-0">&DownArrow;</div>
					</div>
					<div class="px-5">
						<h5 class="dfTx">Subjects</h5>
						<p>
							Merupakan komponen kelompok dari Subjek sebuah keilmuan. Subjek ini merupakan salah
							satu konsentrasi keilmuan dalam membahas topik tertentu dari sebuah disiplin ilmu.
							Contohnya adalah
							<span class="highlight">Klasifikasi</span> dalam Disiplin Ilmu Perpustakaan.
						</p>
					</div>
				</div>

				<div class="flex">
					<div class="text-center">
						<div class="dfBg w-50 p-5 rounded">
							<h5>Collections</h5>
						</div>
						<div class="font-semibold text-5xl m-0">&DownArrow;</div>
					</div>
					<div class="px-5">
						<h5 class="dfTx">Collections</h5>
						<p>
							Merupakan kumpulan koleksi yang ada dalam sebuah subjek. Koleksi bisa ditentukan dari
							tipe masing-masing koleksi ataupun media format yang disajikan. Contohnya adalah <span
								class="highlight">Koleksi Buku</span
							> dalam Klasifikasi.
						</p>
					</div>
				</div>

				<div class="flex">
					<div class="text-center">
						<div class="dfBg w-50 p-5 rounded">
							<h5>Contents</h5>
						</div>
					</div>
					<div class="px-5">
						<h5 class="dfTx">Contents</h5>
						<p>
							Contents merupakan salah satu koleksi yang ada dalam kumpulan koleksi di Subjek.
							Contents dapat berisi satu atau lebih informasi mengenai koleksi yang ada di
							masing-masing Subjek. Contohnya adalah <span class="highlight"
								>Buku E-DDC Edisi 23</span
							> yang berada dalam Koleksi Buku Fisik dari Klasifikasi.
						</p>
					</div>
				</div>
			</div>
		</section>
	{:else if selectedTab === 'workflow'}
		<section transition:fade={{ delay: 150, duration: 300 }}>
			<h4 class="my-4">Workflow <span class="dfTx">Pathfinder</span></h4>
			<p>
				Alur Kerja dari penyediaan Subjek dan Konten yang ada dalam Sistem Lantera Pathfinder. Alur
				ini diperuntukkan untuk Koordinator Subjek dan Subjek Spesialis, setiap langkah didasarkan
				pada hierarki data yang sudah tersedia dalam sistem. Urutan pembuatan konten dan data subjek
				yang dilakukan oleh sistem Pathfinder diurutkan oleh masing-masing subjek spesialis dan
				dilakukan secara berurutan dengan memperhatikan setiap langkah yang tersedia dalam gambar
				berikut.
			</p>
			<div class="my-5">
				<img src="/img/workflow.webp" alt="Workflow of Pathfinder" />
			</div>
		</section>
	{:else if selectedTab === 'typesubject'}
		<section
			class="flex flex-col gap-3 my-5 text-center md:(grid grid-cols-3)"
			transition:fade={{ delay: 150, duration: 300 }}
		>
			<div class="flex flex-col">
				<div class="bg-blue-6 text-white p-5 rounded">
					<h5>Topic</h5>
				</div>
				<div>
					<p>
						Topic merupakan tipe subjek yang berkaitan dengan topik dari subjek tersebut yang
						bersifat umum dan universal. Tipe Topic merupakan standar dari kebanyakan Subjek, karena
						membahas keseluruhan topik dari masing-masing konten secara umum. Contohnya adalah <span
							class="highlight"
						>
							Klasifikasi
						</span>
						dapat menjadi <span class="highlight">Topic</span> karena hal yang dibahas adalah topik terkait
						Klasifikasi dalam Ilmu Perpustakaan secara keseluruhan.
					</p>
				</div>
			</div>
			<div>
				<div class="bg-emerald-6 text-white p-5 rounded">
					<h5>Guide</h5>
				</div>
				<div>
					<p>
						Guide merupakan tipe subjek yang berkaitan dengan tata cara dan petunjuk dalam melakukan
						sesuatu yang berkaitan dengan subjek tersebut. Guide berisi tentang petunjuk dan
						langkah-langkah yang dilakukan dalam subjek tertentu. Contohnya adalah <span
							class="highlight">Langkah-langkah Klasifikasi</span
						> yang berisi tentang aturan dan alur mengenai bagaimana melakukan Klasifikasi.
					</p>
				</div>
			</div>
			<div>
				<div class="bg-rose-6 text-white p-5 rounded">
					<h5>Course</h5>
				</div>
				<div>
					<p>
						Course merupakan tipe subjek yang digunakan untuk menampung dan mengoleksi kumpulan
						kursus serta pelatihan yang berkaitan dengan subjek tersebut. Course diisi dengan
						kumpulan materi pelatihan yang bersifat step-by-step dalam melakukan sesuatu hingga
						setiap individu yang mempelajarinya dapat memahami materi dari subjek tersebut.
						Contohnya adalah <span class="highlight">Kursus Klasifikasi</span> yang berisi tentang kursus
						dan pelatihan step-by-step secara terperinci disertai dengan praktik dan output yang dapat
						dilihat secara langsung.
					</p>
				</div>
			</div>
		</section>
	{/if}
</section>

<style>
	p {
		--at-apply: italic;
	}

	.active-btn {
		--at-apply: dfBg;
	}

	.highlight {
		--at-apply: font-semibold dfTx underline;
	}
</style>
