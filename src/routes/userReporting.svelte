<script>
    
    import { db } from "$lib/firebase";
    import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"; 
    import { request } from "$lib/fetch.js";
    import { session } from "$app/stores";
    
    let title, plateNumReporting, reportDetails; //all values strings//resolved is a bool


    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup.svelte';
    import {fly, fade } from 'svelte/transition';  //this block is for form making sure all fields complete
    let hasError = false;
    let isSuccessVisible = false;
    let submitted = false;
    const errMessage = "All the fields are mandatory";  ////////
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, { message: errorCode }));
    function generateUID() {    //this function is to generate a uniqueuid for each complaint for database storage  
        //don't use this function because it does it by itself now
        // generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        firstPart = ("000" + firstPart.toString(36)).slice(-3);
        secondPart = ("000" + secondPart.toString(36)).slice(-3);
        return firstPart + secondPart;
    }
    const makeUserComplaint = async () => {
        //         await setDoc(doc(db, "cities", "LA"), {  used this to help with setDOc to push data to database
        //   name: "Los Angeles",
        //   state: "CA",
        //   country: "USA"
        // });  
        //await setDoc(doc(db,"complaints",generateUID()), {
        await setDoc(doc(collection(db, "complaints"), $session.user.uid), {
            date: Timestamp.fromDate(new Date()),
            title:title,
            plateNumReporting: plateNumReporting,
            reportDetails: reportDetails,
            resolved: false,     //initially false, admin will resolve it to true later
        });
        //await updateProfile(userRecord.user, { displayName: username });
        
        //errorCode = "Complaint Report sent!";   don't think I need this
        await new Promise(resolve => setTimeout(resolve, 2500)); //delays for some time before rerouting to homepage
        window.location.replace("/");
            
    };
    
    
    
    const handleSubmit = async () => {
        isSuccessVisible = true;
        submitted = true;
        currvalue = novalue;
        setTimeout(function(){       //this is with the if statements shows message for a duration
            isSuccessVisible = false;
        }, 4000);
        //window.location.replace("/userReporting")
    } 
        
</script>



<body>
    
    <div>
        <h1 id="title">Report a Complaint</h1>            <!--todo: user input should be in specific format-->      
        <!--<p>Date</p>    //don't need
        <input type="text" placeholder="--/--/----" bind:value={date} required/>-->

        {#if hasError == true}
            <p class="error-alert">{errMessage}</p>
        {:else}
            {#if isSuccessVisible}  
                <p class="error-alert" transition:fade={{duration:150}}>Complaint Report sent!</p>
            {/if}
        {/if}

        <div class="container">
            <form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <p>Title</p>
                    <input type="text" class="form-control" bind:value={title} required/>
                </div>

                <div class="form-group">
                    <p>What is the license plate number of the vehicle you are reporting? </p>
                    <input type="text" class="form-control" maxlength="6" placeholder="ABC123" bind:value={plateNumReporting} required/>
                </div> 

                <div class="form-group">
                    <p>State the details of the issue </p>
                    <input type="text" id="detailbox"  class="form-control" maxlength="1000"  bind:value={reportDetails} required/>
                </div> 
                <button on:click={makeUserComplaint}>SUBMIT REPORT</button>
            </form>
        </div>





        
        <!--<button on:click={makeUserComplaint}>SUBMIT REPORT</button>-->
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