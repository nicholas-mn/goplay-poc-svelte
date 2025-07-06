<script lang="ts">
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

		map.on('load', () => {
			geolocate.trigger();
		});
	});
</script>

<div id="map" class="h-full rounded-2xl"></div>
