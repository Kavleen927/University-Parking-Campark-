<script context="module">
    export const load = async ({ session }) => {
        if (!session.user.exists) return {};
        return {
            status: 302,
            redirect: "/login",
        };
    };
</script>

<script>
    import { auth } from "$lib/firebase";
    import {
        createUserWithEmailAndPassword,
        updateProfile,
        getIdToken,
        sendEmailVerification
    } from "firebase/auth";
     
    import { request } from "$lib/fetch.js"

    let username, email, password, phoneNumber, hofstraID, vehicle, license, userType;

    const signup = async () => {
        const userRecord = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
        await updateProfile(userRecord.user, { displayName: username });
        await sendEmailVerification(userRecord.user)
        .then(() => {
            alert("Email Verification sent!")
        });
        const idToken = await getIdToken(userRecord.user, true);
        await request("/auth", "POST", { idToken });
        window.location.replace("/login")
    };
    
    const login = async () => {
        window.location.replace("/login")
    }
</script>
<body>
    <div>
        <h1 id="title">Create an Account</h1>
        <p>Username</p>
        <input type="text" bind:value={username} />
        <p>Email</p>
        <input type="text" bind:value={email} />
        <p>Password </p>
        <input type="password" bind:value={password} />
        <p>Phone Number</p>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required 
        maxlength="10" bind:value={phoneNumber} />
        <p>Hofstra ID (optional)</p>
        <input type="number" pattern="[0-9]{9}" maxlength="9" bind:value={hofstraID} />
        <p>Vehicle Make, Model, Year</p>
        <input type="text" bind:value={vehicle} />
        <p>License Plate Number</p>
        <input type="text" maxlength="10" bind:value={license} />
        <p>User Type</p>
        <div id="dropdown"><select id="userType" name="userType" bind:value={userType}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
          </select></div>
        <div id="adminAuth"></div>
        <button on:click={signup}>Create Account!</button>
        <button on:click={login}>Already have Account</button>
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
        @apply flex flex-col place-items-center place-content-center h-screen w-screen;
    }
    div{
        @apply w-full max-w-xs flex flex-col gap-2;
    }
    input {
        @apply w-full rounded p-1 border border-pink-500;
    } 
    #dropdown{
        @apply w-full rounded p-1 border border-pink-500;
    }
</style>