<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';

	// Define the map syle (OpenStreetMap raster tiles)
	const style: maplibregl.StyleSpecification = {
		version: 8,
		sources: {
			osm: {
				type: 'raster',
				tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
				tileSize: 256,
				attribution: '&copy; OpenStreetMap Contributors',
				maxzoom: 19
			}
		},
		layers: [
			{
				id: 'osm',
				type: 'raster',
				source: 'osm' // This must match the source key above
			}
		]
	};

	onMount(() => {
		// Initialise the map
		const map = new maplibregl.Map({
			container: 'map',
			style: style,
			center: [10, 56],
			zoom: 5
		});

		// Add the navigation control
		map.addControl(new maplibregl.NavigationControl());

		let geolocate = new maplibregl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});
		// Add the control to the map.
		map.addControl(geolocate);

		map.on('load', async () => {
			const image = await map.loadImage('/marker.png');
			map.addImage('marker', image.data);
			map.addSource('lege', {
				type: 'geojson',
				data: data.geojson as any
			});

			map.addLayer({
				id: 'lege',
				type: 'symbol',
				source: 'lege',
				layout: {
					'icon-image': 'marker',
					'icon-size': 0.05
				}
			});

			map.on('click', 'lege', (e: any) => {
				map.flyTo({
					center: e.features[0].geometry.coordinates
				});
			});

			// Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
			map.on('mouseenter', 'lege', () => {
				map.getCanvas().style.cursor = 'pointer';
			});

			// Change it back to a pointer when it leaves.
			map.on('mouseleave', 'lege', () => {
				map.getCanvas().style.cursor = '';
			});

			geolocate.trigger();
		});
	});
</script>

<div class="flex h-full flex-col">
	<h1>Find leg</h1>
	<div class="h-[100%]">
		<div id="map" class="h-full rounded-2xl"></div>
	</div>
</div>
