// import history from './history';
// import jwt_decode from "jwt-decode";

class Auth {
    constructor() {
        this.authenticated = false
    }

    isAuthenticated() {
        const token = localStorage.getItem('token')
        if (token) {
            this.authenticated = true
        }
        return this.authenticated;
    }
    // const token = localStorage.getItem('token')
    // if (token) {
    //     var decoded = jwt_decode(token);
    //     // console.log(decoded)
    //     return decoded
    // }else{
    //     history.push('/login')
    // }
}

export default new Auth();