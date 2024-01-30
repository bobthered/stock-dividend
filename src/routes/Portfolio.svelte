<script lang="ts">
	import { H1 } from '$components';
	import { weeks } from '$stores';
	import { format } from '$utilities';
	import Card from './Card.svelte';
</script>

<Card class="col-span-2 aspect-[2/1]">
	<H1>
		{format.currency($weeks[$weeks.length - 1].portfolio, { maximumFractionDigits: 0 })}
	</H1>
</Card>
