export async function GET({ locals }) {
	// Optional: Clear the PocketBase user session server-side
	locals.pb.authStore.clear();

	// Clear the 'pb_auth' cookie by setting it expired
	const headers = new Headers();
	headers.append(
		'Set-Cookie',
		`pb_auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict`
	);

	// Redirect the user to the login page or homepage
	return new Response(null, {
		status: 302,
		headers: new Headers({
			Location: '/app/login',
			'Set-Cookie': headers.get('Set-Cookie')!
		})
	});
}
