class User {
    constructor (attributes) {
        this.uid = attributes.id;
        this.firstName = attributes.firstName;
        this.lastName = attributes.lastName;
        this.email = attributes.email;
        this.photoURL = attributes.photoURL;
    }
}

export default User;