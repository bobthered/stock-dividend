<script>
	import { Header, Nav, NavButton, Pwa, Title } from '$components';
	import { Bars2, Cog6Tooth } from '$icons';
	import { theme } from '$stores';
	import '../app.pcss';

	// props (internal)
	const navItems = [
		{ href: '/', src: Bars2, title: 'Overall' },
		{ href: '/settings', src: Cog6Tooth, title: 'Settings' }
	];
</script>

<Pwa>
	<link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
	<link rel="alternate icon" href="/icons/icon-16x16.png" />
	<link rel="apple-touch-icon" href="/icons/icon-apple-touch.png" />
	<link rel="manifest" href="/manifest.json" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
	/>
	<slot name="theme">
		<meta name="theme-color" content="#8B5CF6" />
	</slot>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</Pwa>
<Title base="Stock Dividend" />
<div class="pwa:max-h-[100vh] pwa:min-h-[100vh] flex max-h-[100dvh] min-h-[100dvh] flex-col">
	<div class="relative flex flex-grow flex-col overflow-y-auto">
		<slot />
	</div>
	<Header>
		<Nav>
			{#each navItems as { href, src, title }}
				<NavButton {href} {src} {title} />
			{/each}
		</Nav>
	</Header>
</div>
