import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);

theme.set({
	buttonIcon: 'px-3',
	card: 'bg-neutral-100 dark:bg-neutral-900',
	input:
		'dark:text-neutral-900 focus:ring-offset-violet-500 focus:ring-violet-500/30 hover:ring-offset-violet-500 ring-offset-neutral-300 text-neutral-900 dark:text-neutral-100',
	nav: 'flex-row',
	overlay: 'fixed',
	table: 'dark:bg-neutral-900',
	th: 'bg-neutral-50 dark:bg-neutral-900',
	tr: 'even:bg-black/[.05] dark:even:bg-white/[.05]'
});

export { theme };
