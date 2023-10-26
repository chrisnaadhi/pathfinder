export const specialist = () => {
	const data = [
		{
			nama: 'Chrisna',
			subject: 'Computer and Electronical Stuff',
			email: 'chrisna@pathfinderkit.net'
		},
		{
			nama: 'Adhi',
			subject: 'Alchemist and other stuff',
			email: 'adhi@pathfinderkit.net'
		},
		{
			nama: 'Pranoto',
			subject: 'Communication & Social Studies',
			email: 'pranoto@pathfinderkit.net'
		}
	];

	return data;
};

export const userRole = () => {
	const role = [
		{
			id: 1,
			typeName: 'Super Admin',
			description: 'Super Administrator PathfinderKit',
			typeRole: 'admin'
		},
		{
			id: 2,
			typeName: 'Subject Librarian',
			description: 'Subject Librarian',
			typeRole: 'subjectlib'
		},
		{
			id: 3,
			typeName: 'Lecturer',
			description: 'Lecturer and Teacher',
			typeRole: 'lecturer'
		},
		{
			id: 4,
			typeName: 'Registered User',
			description: 'User that has registered to PathfinderKit',
			typeRole: 'user'
		}
	];

	return role;
};

export const departmentList = () => {
	const department = [
		{
			departmentName: 'Kandaga Library',
			departmentDescription: 'Perpustakaan Pusat Pengelolaan Pengetahuan'
		},
		{
			departmentName: 'FIKOM Library',
			departmentDescription: 'Perpustakaan Fakultas Ilmu Komunikasi'
		}
	];

	return department;
};

export const facultyName = () => {
	const faculty = [
		{
			facultyName: 'Fakultas Hukum',
			facultyValue: '110'
		},
		{
			facultyName: 'Fakultas Ekonomi dan Bisnis',
			facultyValue: '120'
		},
		{
			facultyName: 'Fakultas Kedokteran',
			facultyValue: '130'
		},
		{
			facultyName: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
			facultyValue: '140'
		},
		{
			facultyName: 'Fakultas Pertanian',
			facultyValue: '150'
		},
		{
			facultyName: 'Fakultas Kedokteran Gigi',
			facultyValue: '160'
		},
		{
			facultyName: 'Fakultas Ilmu Sosial dan Ilmu Politik',
			facultyValue: '170'
		},
		{
			facultyName: 'Fakultas Ilmu Budaya',
			facultyValue: '180'
		},
		{
			facultyName: 'Fakultas Psikologi',
			facultyValue: '190'
		},
		{
			facultyName: 'Fakultas Peternakan',
			facultyValue: '200'
		},
		{
			facultyName: 'Fakultas Ilmu Komunikasi',
			facultyValue: '210'
		},
		{
			facultyName: 'Fakultas Keperawatan',
			facultyValue: '220'
		},
		{
			facultyName: 'Fakultas Perikanan dan Ilmu Kelautan',
			facultyValue: '230'
		},
		{
			facultyName: 'Fakultas Teknologi Industri Pertanian',
			facultyValue: '240'
		},
		{
			facultyName: 'Sekolah Pascasarjana',
			facultyValue: '250'
		},
		{
			facultyName: 'Fakultas Farmasi',
			facultyValue: '260'
		},
		{
			facultyName: 'Fakultas Teknik Geologi',
			facultyValue: '270'
		}
	];

	return faculty;
};
