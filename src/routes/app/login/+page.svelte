<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<form method="POST" action="?/login">
	<input type="email" name="email" required />
	<input type="password" name="password" required />
	<button type="submit">login</button>
</form>
