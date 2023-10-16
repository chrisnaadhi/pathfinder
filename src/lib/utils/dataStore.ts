import { writable } from 'svelte/store';

export const filterData = writable(0);
export const firstAccess = writable(false);
export const contentTipTap = writable(null);

export const groupByFaculty = (arr: Object[]) => {
	return arr.reduce(function (r: any, a: any) {
		r[a.faculty] = r[a.faculty] || [];
		r[a.faculty].push(a);
		return r;
	}, Object.create([]));
};

export const getFacultyName = (arr: any, value: any) => {
	const searchFaculty = arr.find((el: { id: any }) => el.id === value);
	return searchFaculty.facultyName;
};
