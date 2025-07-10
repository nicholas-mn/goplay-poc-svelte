import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const data = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {
					id: 1,
					name: 'Location 1',
					description: 'Random point in Denmark #1'
				},
				geometry: {
					type: 'Point',
					coordinates: [10.237654, 56.123456]
				}
			},
			{
				type: 'Feature',
				properties: {
					id: 2,
					name: 'Location 2',
					description: 'Random point in Denmark #2'
				},
				geometry: {
					type: 'Point',
					coordinates: [9.562341, 55.789012]
				}
			},
			{
				type: 'Feature',
				properties: {
					id: 3,
					name: 'Location 3',
					description: 'Random point in Denmark #3'
				},
				geometry: {
					type: 'Point',
					coordinates: [12.345678, 55.456789]
				}
			},
			{
				type: 'Feature',
				properties: {
					id: 4,
					name: 'Location 4',
					description: 'Random point in Denmark #4'
				},
				geometry: {
					type: 'Point',
					coordinates: [11.876543, 56.654321]
				}
			},
			{
				type: 'Feature',
				properties: {
					id: 5,
					name: 'Location 5',
					description: 'Random point in Denmark #5'
				},
				geometry: {
					type: 'Point',
					coordinates: [8.765432, 54.987654]
				}
			}
		]
	};

	return { geojson: data };
}) satisfies PageServerLoad;

