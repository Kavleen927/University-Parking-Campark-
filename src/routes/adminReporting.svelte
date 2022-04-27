<script>
    import { db } from "$lib/firebase";
    import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"; 
    import { request } from "$lib/fetch.js";
    import { session } from "$app/stores";
    
    let title, plateNumReporting, reportDetails; //all values strings//resolved is a bool


    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup.svelte';

</script>
    
<body>
    
    <div>
        <h1 id="title">Admin Reporting System</h1>                  
        
    </div>
    
</body>

<style lang="postcss">
    #title{ text-align: center; font-weight: 700; }
    h1{
        @apply font-semibold text-xl;
    }
    
    body{
        @apply flex flex-col place-items-center place-content-center h-screen w-screen;
    }
    div{
        @apply w-full max-w-xs flex flex-col gap-2;
    }
   
</style>