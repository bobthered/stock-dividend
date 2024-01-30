<script lang="ts">
	import { H1, Table, Tbody, Td, Th, Thead, Tr } from '$components';
	import { weeks } from '$stores';
	import { format } from '$utilities';
</script>

<div
	class="flex flex-grow flex-col space-y-6 overflow-auto p-6 pt-[max(1.5rem,_env(safe-area-inset-top))]"
>
	<H1>Weeks</H1>
	<div class="relative overflow-auto">
		<Table>
			<Thead>
				<Th>Week</Th>
				<Th>Year</Th>
				<Th>Age</Th>
				<Th>Date</Th>
				<Th>Reinvestment</Th>
				<Th>Total Invested</Th>
				<Th>Portfolio</Th>
				<Th>Shares</Th>
				<Th>Dividend Payout</Th>
				<Th>Profit</Th>
			</Thead>
			<Tbody>
				{#each $weeks as week}
					<Tr>
						<Td>{week.week}</Td>
						<Td>{week.year}</Td>
						<Td>{format.integer(Math.floor(week.age))}</Td>
						<Td>{week.date.toFormat('M/d/yy')}</Td>
						<Td>{format.currency(week.reinvestment, { maximumFractionDigits: 0 })}</Td>
						<Td>{format.currency(week.totalInvested, { maximumFractionDigits: 0 })}</Td>
						<Td>{format.currency(week.portfolio, { maximumFractionDigits: 0 })}</Td>
						<Td>{format.integer(week.shares, { maximumFractionDigits: 0 })}</Td>
						<Td>{format.currency(week.dividendPayout, { maximumFractionDigits: 0 })}</Td>
						<Td>{format.currency(week.profit, { maximumFractionDigits: 0 })}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</div>
</div>
