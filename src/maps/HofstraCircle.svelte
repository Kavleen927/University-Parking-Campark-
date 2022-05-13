<script>
let container;
	let map;
	let zoom = 20;
    let center = {lat: 40.713008, lng:-73.602535}; //40.713008,-73.602535
    import { onMount } from 'svelte';
    
	onMount(async () => {

		map = new google.maps.Map(container, {
            zoom,
            center,
        }) 
    var myCoordinates = [
            new google.maps.LatLng(40.718117,-73.602870),
            new google.maps.LatLng(40.718062,-73.603689),
            new google.maps.LatLng(40.717901,-73.604484),
            new google.maps.LatLng(40.717638,-73.605229),
            new google.maps.LatLng(40.717280,-73.605903),
            new google.maps.LatLng(40.716839,-73.606485),
            new google.maps.LatLng(40.716328,-73.606957),
            new google.maps.LatLng(40.715763,-73.607304),
            new google.maps.LatLng(40.715161,-73.607517),
            new google.maps.LatLng(40.714540,-73.607589),
            new google.maps.LatLng(40.713919,-73.607517),
            new google.maps.LatLng(40.713317,-73.607304),
            new google.maps.LatLng(40.712752,-73.606956),
            new google.maps.LatLng(40.712241,-73.606485),
            new google.maps.LatLng(40.711800,-73.605903),
            new google.maps.LatLng(40.711443,-73.605229),
            new google.maps.LatLng(40.711179,-73.604484),
            new google.maps.LatLng(40.711018,-73.603689),
            new google.maps.LatLng(40.710963,-73.602870),
            new google.maps.LatLng(40.711018,-73.602051),
            new google.maps.LatLng(40.711179,-73.601256),
            new google.maps.LatLng(40.711443,-73.600511),
            new google.maps.LatLng(40.711800,-73.599837),
            new google.maps.LatLng(40.712241,-73.599255),
            new google.maps.LatLng(40.712752,-73.598784),
            new google.maps.LatLng(40.713317,-73.598436),
            new google.maps.LatLng(40.713919,-73.598223),
            new google.maps.LatLng(40.714540,-73.598151),
            new google.maps.LatLng(40.715161,-73.598223),
            new google.maps.LatLng(40.715763,-73.598436),
            new google.maps.LatLng(40.716328,-73.598783),
            new google.maps.LatLng(40.716839,-73.599255),
            new google.maps.LatLng(40.717280,-73.599837),
            new google.maps.LatLng(40.717638,-73.600511),
            new google.maps.LatLng(40.717901,-73.601256),
            new google.maps.LatLng(40.718062,-73.602051)
        ];
        var polyOptions = {
            path: myCoordinates,
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 3
        }
        function haversine_distance(mk1, mk2) {
            var R = 3958.8; // Radius of the Earth in miles
            var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
            var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
            var difflat = rlat2-rlat1; // Radian difference (latitudes)
            var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

            var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
            return d;
        }
        var it = new google.maps.Polyline(polyOptions);
        it.setMap(map);
        const dakota = {lat: 40.716232, lng: -73.598493}; //40.716232,-73.598493
        const frick = {lat: 40.712914, lng: -73.607247}; //40.712914,-73.607247
        var mk1 = new google.maps.Marker({position: dakota, map: map});
        var mk2 = new google.maps.Marker({position: frick, map: map});
        var distance = haversine_distance(mk1, mk2); //0.5125819981348695/2
        //alert(distance)
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
        function showPosition(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            return mk3 = new google.maps.Marker({position: {lat: lat, lng: lng}, map:map});
        }
        var mk4 = new google.maps.Marker({position: {lat: 40.71454012328766, lng: -73.60308454897283}, map:map}) //40.71454012328766, -73.60308454897283
        function hofCheck(){
            if(haversine_distance(getLocation(),mk4) < 0.25629099906){ return true;}
            else{ return false;}
        }
        
    });
    export const Vicinity = hofCheck();
</script>