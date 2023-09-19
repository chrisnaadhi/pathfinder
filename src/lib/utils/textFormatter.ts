export const formatDescription = (text?: string | null) => {
	if (text?.length! < 55) {
		return text;
	}
	return text?.substring(0, 55) + '...';
};
