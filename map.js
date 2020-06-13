"use strict";

mapboxgl.accessToken =
	"pk.eyJ1IjoicWFzaW01NyIsImEiOiJjanZzMTN4YmYwbTJoNDRtc3lveTUycjR5In0.NHo5uv7_XQpM7fPEus_M-w";
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/light-v10",
	center: [-122.2835803195, 37.8845714294],
	zoom: 13,
});

map.on("load", function () {
	fetch("./visited.geojson")
		.then((result) => result.json())
		.then((data) => {
			map.addSource("visited", {
				type: "geojson",
				data,
			});

			map.addLayer({
				id: "visited",
				type: "line",
				source: "visited",
				layout: {
					"line-join": "round",
					"line-cap": "round",
				},
				paint: {
					"line-color": "#888",
					"line-width": 6,
				},
			});
		});
});
