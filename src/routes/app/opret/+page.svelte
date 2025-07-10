<script lang="ts">
	import Map from '$lib/components/map.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	let { data }: { data: PageData } = $props();

	let searchPosition: string[] = $state([]);
</script>

<div class="flex h-full flex-col">
	<p>Skriv addressen her, eller tryk på kortet</p>

	<form
		method="post"
		class="my-2 flex gap-1"
		action="?/search"
		use:enhance={() => {
			return async ({ result }) => {
				console.log(result);
				const data = result as unknown as { data: string[]; status: number };
				console.log(data.data);
				searchPosition = data.data;
			};
		}}
	>
		<Input type="text" placeholder="addresse..." name="address" />
		<Button type="submit">Find</Button>
	</form>

	<div class="h-[100%]">
		<Map {searchPosition} />
	</div>
</div>
