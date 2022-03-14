<script>
    //import { session } from "$app/stores";
    const gotolot7N = async () => {
        window.location.replace("/lot7N")
    };
    const gotolot6 = async () => {
        window.location.replace("/lot6")
    };


    
</script>
<body>
    <div>
        <br><br><br>
        <h1 id="title">Parking Lots</h1> 
        <button on:click={gotolot7N}>7N</button>
        <button on:click={gotolot6}>6</button>  
    </div>
</body>

<style lang="postcss">
        #title{ text-align: center; font-weight: 700; }
    h1{
        @apply font-semibold text-xl;
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    }
    body{
        @apply flex flex-col place-items-center place-content-center;
    }
    div{
        @apply w-full max-w-xs flex flex-col gap-2;
    }
</style>