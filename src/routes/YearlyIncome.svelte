<script lang="ts">
	import { H1, H6 } from '$components';
	import { weeks } from '$stores';
	import { format } from '$utilities';
	import Card from './Card.svelte';
</script>

<Card class="space-y-3 p-0" theme="contrast">
	<H1 class="text-center">
		{format.currency($weeks[$weeks.length - 1].dividendPayout * 12, { maximumFractionDigits: 0 })}
	</H1>
	<H6 class="text-center">Yearly Income</H6>
</Card>
