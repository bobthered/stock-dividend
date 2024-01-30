<script lang="ts">
	import { H1 } from '$components';
	import Portfolio from './Portfolio.svelte';
	import Years from './Years.svelte';
	import MonthlyIncome from './MonthlyIncome.svelte';
	import YearlyIncome from './YearlyIncome.svelte';
	import Profit from './Profit.svelte';
	import Invested from './Invested.svelte';
</script>

<div class="flex flex-grow flex-col space-y-6 p-6 pt-[max(1.5rem,_env(safe-area-inset-top))]">
	<H1>Overall</H1>
	<div class="flex flex-grow flex-col">
		<div class="grid grid-cols-2 gap-3">
			<Portfolio />
			<MonthlyIncome />
			<YearlyIncome />
			<Years />
			<Invested />
			<Profit />
		</div>
	</div>
</div>
