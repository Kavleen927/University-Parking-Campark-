<script>
    import {FirstCoords, SecCoords} from "./PolyCoords/7N_Coords";
	let container;
	let map;
	let zoom = 19;
    let center = {lat: 40.716637, lng:-73.603322}; //40.716637,-73.603322
    
    import { onMount } from 'svelte';
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});
        
		const Spot1 = new google.maps.Polygon({ paths: FirstCoords, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot1.setMap(map);
		Spot1.addListener("click", () => {
			map.setZoom(22);
			map.setCenter(Spot1.getPosition());
		});
        
        const Spot2 = new google.maps.Polygon({ paths: SecCoords, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot2.setMap(map);
		Spot2.addListener("click", () => {
			map.setZoom(22);
			map.setCenter(Spot2.getPosition());
		});
        
	});
</script>

<style>
.full-screen {
    width: 100vw;
    height: 100vh;
}
</style>

<div class="full-screen" bind:this={container}></div>