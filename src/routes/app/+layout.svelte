<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import AppNav from '$lib/components/app-nav.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<svelte:head>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	/>
</svelte:head>

<div class="mx-auto flex h-dvh max-w-lg flex-col justify-between gap-2 p-2.5">
	<main class="h-full rounded-2xl border p-2.5">
		{@render children()}
	</main>

	<nav class="flex w-full justify-center">
		<AppNav />
	</nav>
</div>
