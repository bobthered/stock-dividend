export const integer = (value: number, options: { [key: string]: any } = {}) => {
	const defaults = {};
	const { format } = new Intl.NumberFormat('en-US', Object.assign(defaults, options));

	return format(value);
};
