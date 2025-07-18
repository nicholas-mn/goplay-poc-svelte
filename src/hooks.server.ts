// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let isLoggedIn = false;

	event.locals.pb = new PocketBase('https://api.goplay.nich.dk');

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		const record = await event.locals.pb.collection('users').authRefresh();
		isLoggedIn = true;
		event.locals.user = structuredClone(record.record)
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
		isLoggedIn = false;
		event.locals.user = null
	}

	const path = event.url.pathname;

	if ((path.startsWith("/app")) && !isLoggedIn) {
		redirect(303, '/login');
	}

	// redirect to app if already logged in
	if (path === "/login" && isLoggedIn) {
		redirect(303, '/app');
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
}
