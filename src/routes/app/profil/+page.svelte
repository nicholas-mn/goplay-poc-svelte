<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	import { Button } from '$lib/components/ui/button/index.js';
</script>

PROFIL
<br />
<Button href="/app/logout">logout</Button>
