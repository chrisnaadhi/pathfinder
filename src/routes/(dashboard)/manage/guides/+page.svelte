<script>
	let placeholder = 'Tata cara penggunaan Pathfinder';
</script>

<section>
	<h3>{placeholder}</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, magnam quasi magni
		exercitationem dignissimos necessitatibus consequatur vel amet blanditiis possimus quam illo
		ratione laborum eius.
	</p>
	<h4 class="my-5">Hierarki Data dalam <span class="dfTx">Pathfinder</span></h4>
	<div class="flex gap-4">
		<div class="flex flex-col max-w-40 gap-1 text-center">
			<div class="dfBg p-5 rounded">
				<h5>Faculty</h5>
			</div>
			<div class="font-semibold text-5xl m-0">&DownArrow;</div>
			<div class="dfBg p-5 rounded">
				<h5>Discipline</h5>
			</div>
			<div class="font-semibold text-5xl m-0">&DownArrow;</div>
			<div class="dfBg p-5 rounded">
				<h5>Subjects</h5>
			</div>
			<div class="font-semibold text-5xl m-0">&DownArrow;</div>
			<div class="dfBg p-5 rounded">
				<h5>Collections</h5>
			</div>
			<div class="font-semibold text-5xl m-0">&DownArrow;</div>
			<div class="dfBg p-5 rounded">
				<h5>Contents</h5>
			</div>
		</div>
		<div class="w-full">
			<div class="px-5">
				<h5 class="dfTx">Faculty</h5>
				<p>
					Merupakan komponen kelompok paling atas untuk menampung setiap disiplin keilmuan yang
					berada dalam satu rumpun. Contohnya adalah Fakultas Ilmu Komunikasi yang berada di
					Universitas Padjadjaran
				</p>
			</div>
			<div class="font-semibold text-4xl m-0 text-transparent">&UpArrow;</div>
			<div class="px-5">
				<h5 class="dfTx">Discipline</h5>
				<p>
					Merupakan komponen terkait disiplin keilmuan yang merujuk pada kumpulan subjek satu
					rumpun. Disiplin merupakan konsentrasi studi yang merinci dan mengelompokkan berbagai
					subjek dalam satu disiplin keilmuan. Contohnya adalah <span class="highlight"
						>Ilmu Perpustakaan</span
					>.
				</p>
			</div>
			<div class="font-semibold text-5xl m-0 text-transparent">&UpArrow;</div>
			<div class="px-5">
				<h5 class="dfTx">Subjects</h5>
				<p>
					Merupakan komponen kelompok dari Subjek sebuah keilmuan. Subjek ini merupakan salah satu
					konsentrasi keilmuan dalam membahas topik tertentu dari sebuah disiplin ilmu. Contohnya
					adalah
					<span class="highlight">Klasifikasi</span> dalam Disiplin Ilmu Perpustakaan.
				</p>
			</div>
			<div class="font-semibold text-5xl m-0 text-transparent">&UpArrow;</div>
			<div class="px-5">
				<h5 class="dfTx">Collections</h5>
				<p>
					Merupakan kumpulan koleksi yang ada dalam sebuah subjek. Koleksi bisa ditentukan dari tipe
					masing-masing koleksi ataupun media format yang disajikan. Contohnya adalah <span
						class="highlight">Koleksi Buku</span
					> dalam Klasifikasi.
				</p>
			</div>
			<div class="font-semibold text-5xl m-0 text-transparent">&UpArrow;</div>
			<div class="px-5">
				<h5 class="dfTx">Contents</h5>
				<p>
					Contents merupakan salah satu koleksi yang ada dalam kumpulan koleksi di Subjek. Contents
					dapat berisi satu atau lebih informasi mengenai koleksi yang ada di masing-masing Subjek.
					Contohnya adalah <span class="highlight">Buku E-DDC Edisi 23</span> yang berada dalam Koleksi
					Buku Fisik dari Klasifikasi.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}

	.highlight {
		--at-apply: font-semibold dfTx underline;
	}
</style>
