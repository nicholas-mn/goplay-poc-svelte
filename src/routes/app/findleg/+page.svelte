<script lang="ts">
	import Map from '$lib/components/map.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="h-[95%]">
	Find Leg
	<Map />
</div>
