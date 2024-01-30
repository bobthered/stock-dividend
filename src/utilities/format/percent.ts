export const percent = (value: number, options: { [key: string]: any } = {}) => {
	const defaults = {
		style: 'percent',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	};
	const { format } = new Intl.NumberFormat('en-US', Object.assign(defaults, options));

	return format(value);
};
