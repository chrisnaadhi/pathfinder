import { base } from '$app/paths';
export const load = async ({ fetch, url }) => {
	const getCollectionData = await fetch(`${base}/api/search?q=${url.searchParams.get('q')}`);
	const collectionList = await getCollectionData.json();

	return {
		collectionList
	};
};

export const actions = {};
