import User from "../models/User";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export const checkLogin = () => {
    if ( localStorage.getItem("loggedInUser")) {
        return true;
    } else {
        return false;
    }
}

export const login = async () => {
    localStorage.clear();

    // const mockUserData = {
    //     "uid": "42",
    //     "firstName": "Arthur",
    //     "lastName": "Dent",
    //     "email": "arthur.dent@hh-guide.com",
    //     "photoURL": "https://upload.wikimedia.org/wikipedia/en/e/eb/Arthur_Dent_Livid.jpg"
    // }

    const result = await signInWithPopup(auth, provider);
    console.log(result);

    const userData= {
        "uid": result.user.uid,
        "firstName": result.user.displayName.split(" ")[0],
        "lastName": result.user.displayName.split(" ")[1],
        "email": result.user.email,
        "photoURL": result.user.photoURL
    }

    const loggedInUser = new User(userData);

    //TODO add authentication logic with Firebase

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    return true;
}

export const logout = () => {
    localStorage.clear();
}

export const getLoggedInUser = () => {
    if (checkLogin()) {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        return user;
    } else {
        return null;
    }
}