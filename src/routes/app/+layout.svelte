<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>

	<nav>hello</nav>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}
</style>
