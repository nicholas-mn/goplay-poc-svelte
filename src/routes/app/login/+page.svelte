<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<form method="POST" action="?/login">
	<input type="email" name="email" required placeholder="email" />
	<input type="password" name="password" required placeholder="password" />
	<button type="submit">login</button>
	<button type="submit" formaction="?/register">register</button>
</form>
