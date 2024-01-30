import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaults = {
	strikePrice: 20.79,
	initialInvestment: 21675,
	dividendRate: 0.203,
	weeklyReinvestment: 200,
	startDate: '2022-02-06',
	years: 20,
	annualIncreasePercent: 0.03
};

const stored = browser ? localStorage.settings : undefined;

export const settings = writable(browser && stored !== undefined ? JSON.parse(stored) : defaults);

settings.subscribe((value) => {
	if (browser) localStorage.settings = JSON.stringify(value);
});
