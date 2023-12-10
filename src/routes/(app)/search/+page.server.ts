import { base } from '$app/paths';

export const load = async ({ fetch, url }) => {
	let getParameterValue = url.searchParams.get('q');

	const getCollectionData = await fetch(`${base}/api/search?q=${url.searchParams.get('q')}`);
	const collectionResults = await getCollectionData.json();
	const collectionList = collectionResults.results;
	const specialistList = collectionResults.subjectSpecialist;

	return {
		getParameterValue,
		collectionList,
		specialistList
	};
};
