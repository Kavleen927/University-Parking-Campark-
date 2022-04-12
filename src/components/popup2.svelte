<script>
    export let message;
    export let Spot;
    import { getDoc, doc, collection, setDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    let userType, username, estimate;
    getDoc(doc(db, "users", $session.user.uid)).then(docSnap => {
        if (docSnap.exists()) {
            userType = docSnap.get("userType");
            username = docSnap.get("username");
            return userType, username;
        } else {
            console.log("No such document!");
        }
    });
    let checkExists = false;
    getDoc(doc(db, message, $session.user.uid)).then(docSnap2 => {
        if (docSnap2.exists()) {
            checkExists = true;
            return checkExists;
        } else {
            console.log("No such document!");
        }
    });
    const checkIn = async () => {
       // alert("Hi")
        await setDoc(doc(collection(db, message), $session.user.uid), { //("Spot"+ Spot)
            userType: userType,
            username: username,
            Spot: Spot,
            checkedIn: true,
            estimateTime: 0,
        });
        //closeModal();
    };
 </script>
     <div id="main">
        <h1>Parking Spot</h1>
        <p id="spot">{message} Parking Spot {Spot}</p>
    </div> 
{#if message == "Lot 3" && (userType == "faculty" || userType == "Guest" || userType == "Admin") && checkExists == false}
    <p>Expected Check Out Time:</p>
    <button on:click={checkIn}>Check In</button>
{:else if checkExists == true}
    <br><p id="Warn">You already checked into a spot! Check out first!</p><br>
{:else}
    <br><p id="Warn">You cannot park here! You are a {userType}!</p><br>
{/if}

<style lang="postcss">
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    } 
    h1{
        @apply font-semibold text-xl;
    }
    #main, #Warn{
        text-align: center;
    }
    #spot{
        font-weight: 400; font-style: italic;
    }
</style>