<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import AppNav from '$lib/components/app-nav.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="m-4 mx-auto flex h-[95vh] max-w-lg flex-col justify-between rounded-2xl border-1 p-2.5">
	<main>
		{@render children()}
	</main>

	<nav class="flex w-full justify-center">
		<AppNav />
	</nav>
</div>
