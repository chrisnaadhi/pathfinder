import type { Page } from '@sveltejs/kit';

export const formatDescription = (text?: string | null) => {
	if (text?.length! < 55) {
		return text;
	}
	return text?.substring(0, 55) + '...';
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
