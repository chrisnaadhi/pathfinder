import { base } from '$app/paths';
export const load = async ({ fetch, url }) => {
	let getParameterValue = url.searchParams.get('q');
	if (getParameterValue === null) {
		getParameterValue = 'unpad';
	}
	const getCollectionData = await fetch(`${base}/api/search?q=${url.searchParams.get('q')}`);
	const collectionList = await getCollectionData.json();

	return {
		getParameterValue,
		collectionList
	};
};

export const actions = {};
