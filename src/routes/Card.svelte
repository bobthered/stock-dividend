<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { Card } from '$components';

	// props (external)
	export let theme: 'colored' | 'contrast' | 'subtle' | 'subtleColored' = 'colored';

	// props (internal)
	let themeClasses: string | undefined;

	// props (dynamic)
	$: if (theme === 'colored') themeClasses = 'bg-violet-500 text-white dark:bg-violet-500';
	$: if (theme === 'contrast')
		themeClasses = 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900';
	$: if (theme === 'subtle') themeClasses = 'bg-neutral-200 dark:bg-neutral-800';
	$: if (theme === 'subtleColored') themeClasses = 'bg-violet-100 dark:bg-violet-900';
</script>

<Card class={twMerge('aspect-square items-center justify-center', themeClasses, $$props.class)}>
	<slot />
</Card>
