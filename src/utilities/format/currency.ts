export const currency = (value: number, options: { [key: string]: any } = {}) => {
	const defaults = {
		style: 'currency',
		currency: 'USD'
	};
	const { format } = new Intl.NumberFormat('en-US', Object.assign(defaults, options));

	return format(value);
};
