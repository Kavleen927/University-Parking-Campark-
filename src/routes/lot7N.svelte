<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7JRxMXgvVfLQd8K-Mg5f2dxYpzbMN8Ec&callback=initMap">
    import { onMount } from 'svelte';
    onMount( () => { 
    
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 18,
            center: { lat: 33.678, lng: -116.243 },
            mapTypeId: "terrain",
        });
        const rectangle = new google.maps.Rectangle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map,
            bounds: {
            north: 33.6851,
            south: 33.6852,
            east: -116.231,
            west: -116.232,
            },
        });
    })
</script>
<body>
    <div id="title">
        <br><br><br>
        <h1>Parking Lot 7N</h1>
        <p>This is lot 7N</p>
    </div>
    <div id="map"></div>
</body>

<style lang="postcss">
    #title{ text-align: center; font-weight: 700; }
    h1{
        @apply font-semibold text-xl;
    }
    /* button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    } */
    /* body{
        @apply flex flex-col place-items-center place-content-center;
    }
    div{
        @apply w-full flex flex-col gap-2;
    } */
    #map {
        height: 100%;
    }
</style>