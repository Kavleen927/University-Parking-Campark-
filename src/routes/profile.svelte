<script>
    import { auth } from "$lib/firebase";
    import { request } from "$lib/fetch.js";
    import { getDoc, doc, updateDoc, collection, setDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import { db } from "$lib/firebase";
    import Popup from './../components/popup.svelte';
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, { message: errorCode }));

    
    import Hidden from "../components/Hidden.svelte"; //this is to hide/show div w/ buttonclick
    let numedit,vehicleedit,licenseedit;
    var errorCode;

    let showfullname, showhofstraid, showemail, shownumber, showvehicle, 
    showusername, showsecurityQ, showlicense, showsecurityA;  //vars holding current content on database
    
    let newnumber, newvehicle, newlicense;  //vars for updating content in database

    getDoc(doc(db, "users", $session.user.uid)).then(docSnap => {
        if (docSnap.exists()) {
            showfullname = docSnap.get("fullname");   //vars made to be used in html body to show content
            showusername = docSnap.get("username");
            showhofstraid = docSnap.get("hofstraID");
            showemail = docSnap.get("email");
            shownumber = docSnap.get("phoneNumber");
            showvehicle = docSnap.get("vehicleMakeModelYear");
            showlicense = docSnap.get("licenseNumber");
            showsecurityQ = docSnap.get("securityQuestion");
            showsecurityA = docSnap.get("securityAnswer");
            return showemail, shownumber, showvehicle, showlicense;
        } else {
            console.log("No such document!");
        }
    });

    const userRef = doc(db, "users", $session.user.uid);
    
    function changeNumber () {
        updateDoc(userRef, {
            phoneNumber: newnumber
        });
        errorCode = "Profile has been updated.";
        showModal();
        return window.location.replace("/");
    }

    async function changeVehicle () {
        await updateDoc(userRef, {
            vehicleMakeModelYear: newvehicle
        });
        errorCode = "Profile has been updated.";
        showModal();
        return window.location.replace("/");
    }

    async function changeLicense () {
        await updateDoc(userRef, {
            licenseNumber: newlicense
        });
        errorCode = "Profile has been updated.";
        showModal();
        window.location.replace("/");
    }
</script>

<body>
    <div>
        <br><br><br>
        <h1 id="title">Profile</h1> 
        <p>Full Name: {showfullname}</p>
        <p>Username: {showusername}</p>
        <p>Hofstra ID: {showhofstraid}</p>
        <p>Email: {showemail}</p> 

        <p>Phone Number: {shownumber}</p>
        <button on:click={numedit.show} class = "editBtn">Edit</button>
        <Hidden bind:this={numedit}>
            <div>
                <input type="text" class = "newdatabox" bind:value={newnumber}>
                <button on:click={changeNumber}>Submit</button>
            </div>
        </Hidden>

        <p>Vehicle: {showvehicle}</p>
        <button on:click={vehicleedit.show} class = "editBtn">Edit</button> <!--todo: make editbtn float right of text-->
        <Hidden bind:this={vehicleedit}>
            <div>
                <input type="text" class = "newdatabox" bind:value={newvehicle}> 
                <button on:click={changeVehicle}>Submit</button>
            </div>
        </Hidden>
        
        <p>License Plate Number: {showlicense}</p>
        <button on:click={licenseedit.show} class = "editBtn">Edit</button>
        <Hidden bind:this={licenseedit}>
            <div>
                <input type="text"  class = "newdatabox" bind:value={newlicense}>
                <button on:click={changeLicense}>Submit</button>
            </div>
        </Hidden>

        <p>Security Question Chosen: {showsecurityQ}</p>
        <p>Answer to security question given: {showsecurityA}</p>
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
        @apply flex flex-col place-items-center place-content-center;
        
    } 
     div{
        @apply w-full max-w-xs flex flex-col gap-1;
        overflow: hidden;
    }
    button.editBtn {
        width:40px;
        float: right !important;
    }
    .newdatabox {
        border-color: #ce2c76;
        border-width: 2px;
    }
</style>