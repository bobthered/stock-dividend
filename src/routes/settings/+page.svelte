<script lang="ts">
	import { Fieldset, H1, Input } from '$components';
	import { settings } from '$stores';
</script>

<div
	class="flex max-h-full flex-grow flex-col space-y-6 overflow-auto px-6 pt-[max(1.5rem,_env(safe-area-inset-top))]"
>
	<H1>Settings</H1>
	<div class="-mx-6 flex flex-grow flex-col space-y-3 overflow-auto px-6 pb-6">
		<Fieldset legend="Strike Price">
			<Input bind:value={$settings.strikePrice} pattern="\d*" type="number" />
		</Fieldset>
		<Fieldset legend="Initial Investment">
			<Input bind:value={$settings.initialInvestment} pattern="\d*" type="number" />
		</Fieldset>
		<Fieldset legend="Dividend Rate">
			<Input bind:value={$settings.dividendRate} pattern="\d*" type="number" />
		</Fieldset>
		<Fieldset legend="Weekly Reinvestment">
			<Input bind:value={$settings.weeklyReinvestment} pattern="\d*" type="number" />
		</Fieldset>
		<Fieldset legend="Annual Increase %">
			<Input bind:value={$settings.annualIncreasePercent} pattern="\d*" type="number" />
		</Fieldset>
		<Fieldset legend="Start Date">
			<Input bind:value={$settings.startDate} type="date" />
		</Fieldset>
		<Fieldset legend="Years">
			<Input bind:value={$settings.years} pattern="\d*" type="number" />
		</Fieldset>
	</div>
</div>
