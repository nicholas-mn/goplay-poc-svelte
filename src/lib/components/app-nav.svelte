<script lang="ts">
	import { page } from '$app/state';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="/app" class={page.url.pathname === '/app' ? 'bg-accent' : ''}
				>Opret</NavigationMenu.Link
			>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href="/app/findleg"
				class={page.url.pathname === '/app/findleg' ? 'bg-accent' : ''}
				>Find leg</NavigationMenu.Link
			>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href="/app/profil"
				class={page.url.pathname === '/app/profil' ? 'bg-accent' : ''}>Profil</NavigationMenu.Link
			>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
