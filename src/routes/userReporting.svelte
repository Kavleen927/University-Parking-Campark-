<script context="module">     //jumana made to test connection with database got ;ayout from signup.svelte
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
    


    let date, title, plateNumReporting, reportDetails, resolved; //all values strings//resolved is a bool

    import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup.svelte';

    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, { message: errorCode }));


    function generateUID() {    //this function is to generate a uniqueuid for each complaint for database storage
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


        await setDoc(doc(db,"complaints",generateUID()), {
            date: Timestamp.fromDate(new Date()),
            title:title,
            plateNumReporting: plateNumReporting,
            reportDetails: reportDetails,
            resolved: false,     //should be false when complaint initially made, admin will resolve it to true later
        });

        //await updateProfile(userRecord.user, { displayName: username });
        
        errorCode = "Complaint Report sent!";
            
        

        const idToken = await getIdToken(userRecord.user, true);
       // await request("/auth", "POST", { idToken });
        window.location.replace("/login")
    };
    

</script>



<body>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div>
        <h1 id="title">Report a Complaint</h1>            <!--todo: user input should be in specific format-->      
        <p>Date</p>
        <input type="text" placeholder="--/--/----" required bind:value={date} />
        <p>Title</p>
        <input type="text" required bind:value={title} />
        <p>What is the license plate number of the vehicle you are reporting? </p>
        <input type="text" required bind:value={plateNumReporting} />
        <p>State the details of the issue </p>
        <input type="text" id="detailbox" required maxlength="1000"  bind:value={reportDetails} />

        
        <button on:click={makeUserComplaint}>SUBMIT REPORT</button>
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
