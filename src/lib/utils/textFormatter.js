/**
 * @param {string} text
 * @returns {string}
 */
export const formatDescription = (text) => {
	if (text.length < 55) {
		return text;
	}
	return text.substring(0, 55) + '...';
};
