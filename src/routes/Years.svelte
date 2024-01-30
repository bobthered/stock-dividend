<script lang="ts">
	import { H1, H6 } from '$components';
	import { weeks } from '$stores';
	import { format } from '$utilities';
	import Card from './Card.svelte';
</script>

<Card class="col-span-2 aspect-[2/1] space-y-3" theme="subtleColored">
	<H1 class="text-center">
		{format.integer(Math.floor($weeks[$weeks.length - 1].age), { maximumFractionDigits: 0 })}
	</H1>
	<H6>Years Old</H6>
</Card>
