import { writable } from 'svelte/store';

export const filterData = writable(0);
export const firstAccess = writable(false);
export const contentTipTap = writable(null);
