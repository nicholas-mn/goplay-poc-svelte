<script lang="ts">
	import Map from '$lib/components/map.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-full flex-col">
	<h1>Find leg</h1>
	<div class="h-[100%]">
		<Map />
	</div>
</div>
