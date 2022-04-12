<script>
    import {FirstCoords, SecCoords} from "./PolyCoords/7N_Coords";
	let container;
	let map;
	let zoom = 19;
    let center = {lat: 40.716637, lng:-73.603322}; //40.716637,-73.603322
    
    import { onMount } from 'svelte';
	//modal
    let x = 0;
    let lot = "Lot 7N";
    import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup2.svelte';
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, {message: lot, Spot: x }));
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});
        
		const Spot1 = new google.maps.Polygon({ paths: FirstCoords, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot1.setMap(map);
		Spot1.addListener("click", () => {
			x = 1;
			showModal();
		});
        
        const Spot2 = new google.maps.Polygon({ paths: SecCoords, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot2.setMap(map);
		Spot2.addListener("click", () => {
			x = 2;
			showModal();
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
<Modal show={$modal}>
</Modal>