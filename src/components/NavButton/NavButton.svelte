<script>
	import { twMerge } from 'tailwind-merge';
	import { A, Icon } from '$components';
	import { Bars2 } from '$icons';
	import { theme } from '$stores';
	import { page } from '$app/stores';

	// props (external)
	export let href = '/';
	export let src = Bars2;
	export let title = 'Button';
</script>

<A
	class={twMerge(
		$theme.button,
		$page.url.pathname === href
			? undefined
			: 'bg-transparent text-current hover:bg-transparent focus:bg-transparent focus:ring-neutral-900/30 dark:focus:ring-neutral-100',
		'flex-grow rounded-none pb-[max(.75rem,_env(safe-area-inset-bottom))]'
	)}
	{href}
>
	<slot>
		<div class="flex flex-col items-center">
			<Icon {src} />
			<div class="text-[.625rem] uppercase leading-[.625rem]">{title}</div>
		</div>
	</slot>
</A>
