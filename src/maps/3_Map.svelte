
<script>
    import {Coord1, Coord2, Coord3, Coord4, Coord5, Coord6, Coord7, Coord8, Coord9, Coord10,
        Coord11, Coord12, Coord13, Coord14, Coord15, Coord16, Coord17, Coord18, Coord19, Coord20,
        Coord21, Coord22, Coord23, Coord24, Coord25, Coord26, Coord27, Coord28, Coord29, Coord30,   
    } from "./PolyCoords/3_Coords";
	let container;
	let map;
	let zoom = 20;
    let center = {lat: 40.713008, lng:-73.602535}; //40.713008,-73.602535

    //import {Parked} from "./db_maps/3_db";
    //console.log(Parked);
    //modal
    let x = 0;
    let lot = "Lot 3";
    import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup2.svelte';
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, {message: lot, Spot: x }));
    
    import { getDocs, doc, collection, setDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    let Parked = [];
    getDocs(collection(db, "Lot 3")).then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            Parked.push(doc.id);
        });
        return Parked;
    });
    import { onMount } from 'svelte';
    
	onMount(async () => {

		map = new google.maps.Map(container, {
            zoom,
            center,
		});
            
		const Spot1 = new google.maps.Polygon({ paths: Coord1, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot1.setMap(map);
		Spot1.addListener("click", () => {
            x = 1;
            for(let i=0;i<Parked.length;i++){ 
                if(Parked[i] == "Spot1"){
                    Spot1.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
                }else{
                    showModal();
                }
            }
            //checkin(x);
		});
        
        const Spot2 = new google.maps.Polygon({ paths: Coord2, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot2.setMap(map);
		Spot2.addListener("click", () => {
            x = 2;
            showModal();
		});

        const Spot3 = new google.maps.Polygon({ paths: Coord3, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot3.setMap(map);
		Spot3.addListener("click", () => {
            x = 3;
            showModal();
            if(check){
                Spot3.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});

        const Spot4 = new google.maps.Polygon({ paths: Coord4, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot4.setMap(map);
		Spot4.addListener("click", () => {
            x = 4;
            showModal();
            if(check){
                Spot4.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        
        const Spot5 = new google.maps.Polygon({ paths: Coord5, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot5.setMap(map);
		Spot5.addListener("click", () => {
            x = 5;
            showModal();
            if(check){
                Spot5.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot6 = new google.maps.Polygon({ paths: Coord6, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot6.setMap(map);
		Spot6.addListener("click", () => {
            x = 6;
            showModal();
            if(check){
                Spot6.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot7 = new google.maps.Polygon({ paths: Coord7, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot7.setMap(map);
		Spot7.addListener("click", () => {
            x = 7;
            showModal();
            if(check){
                Spot7.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot8 = new google.maps.Polygon({ paths: Coord8, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot8.setMap(map);
		Spot8.addListener("click", () => {
            x = 8;
            showModal();
            if(check){
                Spot8.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot9 = new google.maps.Polygon({ paths: Coord9, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot9.setMap(map);
		Spot9.addListener("click", () => {
            x = 9;
            showModal();
            
		});
        const Spot10 = new google.maps.Polygon({ paths: Coord10, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot10.setMap(map);
		Spot10.addListener("click", () => {
            x = 10;
            showModal();
            if(check){
                Spot10.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot11 = new google.maps.Polygon({ paths: Coord11, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot11.setMap(map);
		Spot11.addListener("click", () => {
            x = 11;
            showModal();
            if(check){
                Spot11.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot12 = new google.maps.Polygon({ paths: Coord12, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot12.setMap(map);
		Spot12.addListener("click", () => {
            x = 12;
            showModal();
            if(check){
                Spot12.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot13 = new google.maps.Polygon({ paths: Coord13, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot13.setMap(map);
		Spot13.addListener("click", () => {
            x = 13;
            showModal();
            if(check){
                Spot13.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot14 = new google.maps.Polygon({ paths: Coord14, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot14.setMap(map);
		Spot14.addListener("click", () => {
            x = 14;
            showModal();
            if(check){
                Spot14.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot15 = new google.maps.Polygon({ paths: Coord15, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot15.setMap(map);
		Spot15.addListener("click", () => {
            x = 15;
            showModal();
            if(check){
                Spot15.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot16 = new google.maps.Polygon({ paths: Coord16, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot16.setMap(map);
		Spot16.addListener("click", () => {
            x = 16;
            showModal();
            if(check){
                Spot16.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot17 = new google.maps.Polygon({ paths: Coord17, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot17.setMap(map);
		Spot17.addListener("click", () => {
            x = 17;
            showModal();
            if(check){
                Spot17.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot18 = new google.maps.Polygon({ paths: Coord18, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot18.setMap(map);
		Spot18.addListener("click", () => {
            x = 18;
            showModal();
            if(check){
                Spot18.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot19 = new google.maps.Polygon({ paths: Coord19, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot19.setMap(map);
		Spot19.addListener("click", () => {
            x = 19;
            showModal();
            if(check){
                Spot19.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot20 = new google.maps.Polygon({ paths: Coord20, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot20.setMap(map);
		Spot20.addListener("click", () => {
            x = 20;
            showModal();
            if(check){
                Spot20.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot21 = new google.maps.Polygon({ paths: Coord21, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot21.setMap(map);
		Spot21.addListener("click", () => {
            x = 21;
            showModal();
            if(check){
                Spot21.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot22 = new google.maps.Polygon({ paths: Coord22, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot22.setMap(map);
		Spot22.addListener("click", () => {
            x = 22;
            showModal();
            if(check){
                Spot22.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot23 = new google.maps.Polygon({ paths: Coord23, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot23.setMap(map);
		Spot23.addListener("click", () => {
            x = 23;
            showModal();
            if(check){
                Spot23.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot24 = new google.maps.Polygon({ paths: Coord24, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot24.setMap(map);
		Spot24.addListener("click", () => {
            x = 24;
            showModal();
            if(check){
                Spot24.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot25 = new google.maps.Polygon({ paths: Coord25, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot25.setMap(map);
		Spot25.addListener("click", () => {
            x = 25;
            showModal();
            if(check){
                Spot25.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot26 = new google.maps.Polygon({ paths: Coord26, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot26.setMap(map);
		Spot26.addListener("click", () => {
            x = 26;
            showModal();
            if(check){
                Spot26.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot27 = new google.maps.Polygon({ paths: Coord27, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot27.setMap(map);
		Spot27.addListener("click", () => {
            x = 27;
            showModal();
            if(check){
                Spot27.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot28 = new google.maps.Polygon({ paths: Coord28, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot28.setMap(map);
		Spot28.addListener("click", () => {
            x = 28;
            showModal();
            if(check){
                Spot28.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot29 = new google.maps.Polygon({ paths: Coord29, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot29.setMap(map);
		Spot29.addListener("click", () => {
            x = 29;
            showModal();
            if(check){
                Spot29.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
		});
        const Spot30 = new google.maps.Polygon({ paths: Coord30, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#FF0000", fillOpacity: 0.35, clickable: true, });
		Spot30.setMap(map);
		Spot30.addListener("click", () => {
            x = 30;
            showModal();
            if(check){
                Spot30.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
            }
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