<script lang="ts">
	import { H1, Table, Tbody, Td, Th, Thead, Tr } from '$components';
	import { weeks } from '$stores';
	import { format } from '$utilities';
</script>

<div
	class="flex flex-grow flex-col space-y-6 overflow-auto px-6 pt-[max(1.5rem,_env(safe-area-inset-top))]"
>
	<H1>Weeks</H1>
	<div class="relative -mx-6 overflow-auto px-6 pb-6">
		<Table>
			<Thead>
				<Th class="text-right">Week</Th>
				<Th class="text-right">Year</Th>
				<Th class="text-right">Age</Th>
				<Th class="text-right">Date</Th>
				<Th class="text-right">Reinvestment</Th>
				<Th class="text-right">Total Invested</Th>
				<Th class="text-right">Portfolio</Th>
				<Th class="text-right">Shares</Th>
				<Th class="text-right">Dividend Payout</Th>
				<Th class="text-right">Profit</Th>
			</Thead>
			<Tbody>
				{#each $weeks as week}
					<Tr>
						<Td class="text-right">{week.week}</Td>
						<Td class="text-right">{week.year}</Td>
						<Td class="text-right">{format.integer(Math.floor(week.age))}</Td>
						<Td class="text-right">{week.date.toFormat('M/d/yy')}</Td>
						<Td class="text-right"
							>{format.currency(week.reinvestment, { maximumFractionDigits: 0 })}</Td
						>
						<Td class="text-right"
							>{format.currency(week.totalInvested, { maximumFractionDigits: 0 })}</Td
						>
						<Td class="text-right"
							>{format.currency(week.portfolio, { maximumFractionDigits: 0 })}</Td
						>
						<Td class="text-right">{format.integer(week.shares, { maximumFractionDigits: 0 })}</Td>
						<Td class="text-right"
							>{format.currency(week.isLastWeekOfMonth ? week.dividendPayout : 0, {
								maximumFractionDigits: 0
							})}</Td
						>
						<Td class="text-right">{format.currency(week.profit, { maximumFractionDigits: 0 })}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</div>
</div>
