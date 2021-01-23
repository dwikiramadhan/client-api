import history from './history';
import jwt_decode from "jwt-decode";

const auth = () => {
    const token = localStorage.getItem('token')
    if (token) {
        var decoded = jwt_decode(token);
        // console.log(decoded)
        return decoded
    }else{
        history.push('/login')
    }
}

export default auth