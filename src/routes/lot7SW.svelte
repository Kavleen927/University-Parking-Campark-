<script>
    import Map from './../maps/7SW_Map.svelte';
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7JRxMXgvVfLQd8K-Mg5f2dxYpzbMN8Ec&callback=initMap">
	</script>
</svelte:head>
<body>
    <div id="title">
        <br>
        <h1>Parking Lot 7SW</h1>
        <p>This is lot 7SW</p>
        <br>
    </div>
    <div id="map">
        <Map />
    </div>
</body>

<style lang="postcss">
    #title{ text-align: center; font-weight: 700; background-color: #ce2c76;  }
    h1{
        @apply font-semibold text-xl;
    }
    
</style>