<script>
    import Map from './../maps/7N_Map.svelte';
    import { getDoc, doc, collection, deleteDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    var checkedIn = false;
    var estimatedTimeOut;
    
    getDoc(doc(db, "Lot 7N", $session.user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                estimatedTimeOut = docSnap.get("estimateTime");
                checkedIn = true;
                
                // console.log(estimatedTimeOut+":00");
                // console.log(new Date().toLocaleTimeString('en-GB'));
                // // if(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'}) == estimatedTimeOut){ checkOut(); }
            } else {
                console.log("No such document!");
            }
         });
    function checkOut(){
        //alert("checkedout")
        deleteDoc(doc(db, "Lot 7N", $session.user.uid));
        window.location.replace("/lot7N")
        return window.location.replace("/lot7N");
    }
    //console.log(new Date().toLocaleTimeString('en-GB'));
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7JRxMXgvVfLQd8K-Mg5f2dxYpzbMN8Ec&callback=initMap">
	</script>
</svelte:head>



<body>
    <div id="title">
        <br>
        <h1>Parking Lot 7N</h1>
        <p>This is lot 7N</p><br>
        {#if checkedIn == true} 
            <div id="CheckedIn">
                Estimated Check Out: {estimatedTimeOut}<button on:click={checkOut}>Check Out</button>
            </div>
        {/if}
    </div>
    <div id="map">
        <Map />
    </div>
</body>
        

<style lang="postcss">
    #title{ text-align: center; font-weight: 700;  background-color: #ce2c76; }
    h1{
        @apply font-semibold text-xl; 
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    }
    #map{ 
        width: 100vw;
        height: 100vh; 
        background-color: pink;
    }
    :global(body) {
	    padding: 0;
    }
</style>
