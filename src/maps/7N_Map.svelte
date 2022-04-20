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

	import { getDocs, doc, collection, setDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    let Parked = [];
    let spotPark;
    getDocs(collection(db, "Lot 7N")).then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            // Parked.push(doc.id);
            let checkCheck = doc.get("checkedIn");
            if (checkCheck == true){ 
                spotPark = "Spot" + doc.get("Spot"); 
                console.log(doc.id, " => ", doc.data(), spotPark);
                Parked.push(spotPark);
            }
        });
        return Parked;
    });
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});
        
		const Spot1 = new google.maps.Polygon({ paths: FirstCoords, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot1.setMap(map);
		Spot1.addListener("click", () => {
			x = 1;
			for(let i=0;i<Parked.length;i++){ 
                if(Parked[i] == "Spot1"){
                    Spot1.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
                }
            };
            if (Spot1.clickable){showModal();};
		});
        
        const Spot2 = new google.maps.Polygon({ paths: SecCoords, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot2.setMap(map);
		Spot2.addListener("click", () => {
			x = 2;
			for(let i=0;i<Parked.length;i++){ 
                if(Parked[i] == "Spot2"){
                    Spot2.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
                }
            };
            if (Spot2.clickable){showModal();};
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