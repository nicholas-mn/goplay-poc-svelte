<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex h-dvh w-full flex-col items-center justify-center">
	<Card.Root>
		<Card.Header>
			<Card.Title>Login / Register</Card.Title>
		</Card.Header>
		<Card.Content>
			<form method="POST" action="?/login" class="flex flex-col gap-3">
				<Input type="email" name="email" required placeholder="email" />
				<Input type="password" name="password" required placeholder="password" />
				<Button type="submit">login</Button>
				<Button type="submit" formaction="?/register">register</Button>
			</form>
		</Card.Content>
	</Card.Root>
	<Button variant="link" href="/">Go to homepage</Button>
</div>
