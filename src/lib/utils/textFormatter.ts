import type { Page } from '@sveltejs/kit';

export const formatDescription = (text?: string | null) => {
	if (text?.length! < 55) {
		return text;
	}
	return text?.substring(0, 55) + '...';
};

export const trimText = (text: string | null, limit: number) => {
	if (text?.length! < limit) {
		return text;
	}
	return text?.substring(0, limit) + '...';
};

export const slugifyText = (valElement: HTMLInputElement) => {
	const value = valElement.value;
	const modifiedValue = value.toLocaleLowerCase().replace(/\s/g, '-');
	valElement.value = modifiedValue;
};

export const backButton = (page: Page<Record<string, string>, string | null>) => {
	const mainUrl = page.url.toString().split('/');
	mainUrl.pop();
	const backUrl = mainUrl.join('/');

	return backUrl;
};

export const checkRole = (value: number) => {
	let role: string;
	switch (value) {
		case 1:
			role = 'Administrator';
			break;
		case 2:
			role = 'Subject Librarian';
			break;
		case 3:
			role = 'Lecturer';
			break;
		case 4:
			role = 'Registered User';
			break;
		default:
			role = 'Tidak Tersedia';
			break;
	}
	return role;
};

export const formatTanggal = (dateTime: Date | null | undefined) => {
	let formatted = new Intl.DateTimeFormat('id-ID', {
		dateStyle: 'full',
		timeStyle: 'long'
	}).format(dateTime!);

	return formatted;
};

export const bulletType = (typeValue: string) => {
	switch (typeValue) {
		case 'guide':
			return 'bg-emerald-6 text-white px-2 py-1 text-xs rounded';
		case 'course':
			return 'bg-red-6 text-white px-2 py-1 text-xs rounded';
		case 'topic':
			return 'bg-blue-6 text-white px-2 py-1 text-xs rounded';
		default:
			return 'dfBg';
	}
};
