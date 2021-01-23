import Swal from 'sweetalert2'
import history from '../history'

const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                {
                    id: action.id,
                    email: action.email,
                    password: action.password,
                    retypepassword: action.retypepassword,
                },
                ...state,
            ]
        case 'ADD_USER_SUCCESS':
            return state.map(item => {
                // return console.log(item.email)
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successfully!',
                    text: `${action.user.data.email}`
                }).then(function () {
                    localStorage.setItem("token", action.user.token);
                    history.push('/home')
                });
                return item
            });

        case 'ADD_USER_FAILURE':
            return state.map((item) => {
                return item
            });

        case 'LOGIN_USER':
            return [
                {
                    email: action.email,
                    password: action.password,
                },
                ...state,
            ]
        case 'LOGIN_SUCCESS':
            return state.map(item => {
                localStorage.setItem("token", action.user.token);
                history.push('/home')
                return item
            });

        case 'LOGIN_FAILURE':
            return state.map((item) => {
                return item
            });

        default:
            return state
    }
}

export default users