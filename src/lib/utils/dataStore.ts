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
