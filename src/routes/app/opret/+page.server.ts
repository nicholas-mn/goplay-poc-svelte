import { fail, type Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		const address = data.get('address') as string;

		let coordinates = ['', ''];

		try {
			const { lat, lon } = (
				await (
					await fetch(
						`https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${env.GEOCODE_API_KEY}`
					)
				).json()
			)[0];

			coordinates = [lon, lat];
		} catch (e) {
			return fail(500, {
				message: 'Something went wrong while searching'
			});
		}

		if (coordinates[0] === '' || coordinates[1] === '') {
			return fail(400, {
				message: 'Location not found'
			});
		}

		return coordinates;
	}
} satisfies Actions;
