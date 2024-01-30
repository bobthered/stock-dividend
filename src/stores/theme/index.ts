import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);

theme.set({
	buttonIcon: 'px-3',
	card: 'bg-neutral-100 dark:bg-neutral-900',
	input:
		'dark:text-neutral-900 focus:ring-offset-indigo-500 focus:ring-indigo-500/30 hover:ring-offset-indigo-500 ring-offset-neutral-300 text-current',
	nav: 'flex-row',
	overlay: 'fixed'
});

export { theme };
