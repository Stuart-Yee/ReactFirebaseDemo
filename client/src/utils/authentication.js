import User from "../models/User";

export const checkLogin = () => {
    if ( localStorage.getItem("loggedInUser")) {
        return true;
    } else {
        return false;
    }
}

export const login = async () => {
    localStorage.clear();

    const mockUserData = {
        "uid": "42",
        "firstName": "Arthur",
        "lastName": "Dent",
        "email": "arthur.dent@hh-guide.com",
        "photoURL": "https://upload.wikimedia.org/wikipedia/en/e/eb/Arthur_Dent_Livid.jpg"
    }

    const loggedInUser = new User(mockUserData);

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