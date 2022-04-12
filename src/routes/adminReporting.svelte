+<script context="module">     //jumana made to test connection with database got layout from userReporting
    export const load = async ({ session }) => {
        if (!session.user.exists) return {};
        return {
            status: 302,
            redirect: "/login",     //see what this does again
        };
    };
</script>

<script>
    import { db } from "$lib/firebase";
    import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"; 
    import { request } from "$lib/fetch.js";

    import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup.svelte';

    import {fly, fade } from 'svelte/transition';  


    const showAllComplaints = async () => {
		
	} 

    const resolveComplaint = async () => {
         
     
    
    };
    
    
        
</script>



<body>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div>
        <h1 id="title">Complaints Reported</h1>     
        
        <br><br><br><br><br>
    </div>
    
</body>


<Modal show={$modal}>
</Modal>
<style lang="postcss">
    #title{ text-align: center; font-weight: 700; }
    h1{
        @apply font-semibold text-xl;
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    }
    body{
        @apply flex flex-col place-items-center place-content-center h-screen w-screen;
    }
    div{
        @apply w-full max-w-xs flex flex-col gap-2;
    }
    input {
        @apply w-full rounded p-1 border border-pink-500;
    } 
    #detailbox {
        height:max-content;
        overflow:auto;
    }
</style>