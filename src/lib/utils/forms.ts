export const slugLimit = (value: string, limit: number) => {
	if (value.length < limit) return value.toLowerCase().split(' ').join('-');
	const slugify = value.toLowerCase().split(' ').join('-');
	return slugify;
};
