import { writable } from 'svelte/store';

export const filterData = writable(0);
export const firstAccess = writable(false);
export const contentTipTap = writable(null);
export const searchValue = writable('');
export const searchResults = writable();

export const groupByFaculty = (arr: Object[]) => {
	return arr.reduce(function (r: any, a: any) {
		r[a.faculty] = r[a.faculty] || [];
		r[a.faculty].push(a);
		return r;
	}, Object.create([]));
};

export const getFacultyName = (arr: any, value: number) => {
	const searchFaculty = arr.find((el: { id: number }) => el.id === value);
	return searchFaculty.facultyName;
};

export function groupBy(list: any[], keyGetter: (arg0: any) => any) {
	const map = new Map();
	list.forEach((item: any) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}
