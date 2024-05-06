import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    const signInWithEmail = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (err) {
            console.error(err)
        }
    }

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        }
        catch (err) {
            console.error(err)
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <input 
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick = {signInWithEmail}>Sign In</button>
            <button onClick = {signInWithGoogle}>Sign in with Google</button>
            <button onClick = {logOut}>Logout</button>
        </div>
    )
}