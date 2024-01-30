import { DateTime } from 'luxon';
import { derived } from 'svelte/store';
import { settings } from '$stores';

export const weeks = derived(
	settings,
	($settings) =>
		[...Array(+$settings.years * 52)].reduce(
			({ data, weeks }, _, weekIndex) => {
				data.week = weekIndex + 1;
				data.year = Math.floor(weekIndex / 52) + 1;
				data.date = DateTime.fromISO($settings.startDate).plus({ days: weekIndex * 7 });
				data.age = data.date.diff(DateTime.fromISO('1985-04-11'), 'years').toObject().years;
				data.reinvestment =
					parseFloat($settings.weeklyReinvestment) *
					Math.pow(1 + parseFloat($settings.annualIncreasePercent), data.year - 1);
				data.totalInvested =
					(data?.totalInvested || parseFloat($settings.initialInvestment)) + data.reinvestment;
				data.portfolio = (data?.portfolio || data.totalInvested) + data.reinvestment;
				data.shares = data.portfolio / parseFloat($settings.strikePrice);
				data.lastDayOfMonth = data.date.endOf('month');
				data.isLastWeekOfMonth = data.lastDayOfMonth.diff(data.date, 'days').days < 7;
				data.dividendPayout = data.isLastWeekOfMonth
					? data.shares * parseFloat($settings.dividendRate)
					: data?.dividendPayout || 0;
				data.portfolio += data.isLastWeekOfMonth ? data.dividendPayout : 0;
				data.profit = data.portfolio - data.totalInvested;

				weeks = [...weeks, { ...data }];
				return { data, weeks };
			},
			{ data: {}, weeks: [] }
		).weeks
);
