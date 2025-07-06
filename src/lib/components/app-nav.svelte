<script lang="ts">
	import { page } from '$app/state';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
</script>

<div class="m flex w-full justify-center rounded-2xl border py-1.5">
	<NavigationMenu.Root>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Link
					href="/app"
					class={(page.url.pathname === '/app' ? 'bg-accent' : '') +
						' scroll-m-20 text-xl font-semibold tracking-tight'}>Opret</NavigationMenu.Link
				>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Link
					href="/app/findleg"
					class={(page.url.pathname === '/app/findleg' ? 'bg-accent' : '') +
						' scroll-m-20 text-xl font-semibold tracking-tight'}>Find leg</NavigationMenu.Link
				>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Link
					href="/app/profil"
					class={(page.url.pathname === '/app/profil' ? 'bg-accent' : '') +
						' scroll-m-20 text-xl font-semibold tracking-tight'}>Profil</NavigationMenu.Link
				>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
</div>
