import axios from 'axios';

const token = localStorage.getItem('token')
const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: { 'token': 'Bearer ' + token }
});

//start create user 
export const addUserSuccess = (user) => ({
    type: 'ADD_USER_SUCCESS',
    user
})

export const addUserFailure = (id) => ({
    type: 'ADD_USER_FAILURE',
    id
})

export const addUserView = (id, email, password, retypepassword) => ({
    type: 'ADD_USER',
    id, email, password, retypepassword
})

export const addUser = (email, password, retypepassword) => {
    let id = Date.now()
    return dispatch => {
        dispatch(addUserView(id, email, password, retypepassword))
        return request.post('/api/users/register', {
            id, email, password, retypepassword
        }).then(response => {
            dispatch(addUserSuccess(response.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(addUserFailure(id))
        })
    }
};
//end create user

//login user 
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    user
})

export const loginFailure = (email) => ({
    type: 'LOGIN_FAILURE',
    email
})

export const loginView = (email, password) => ({
    type: 'LOGIN_USER',
    email, password
})

export const loginUser = (email, password) => {
    return dispatch => {
        dispatch(loginView(email, password))
        return request.post('/api/users/login', {
            email, password
        }).then(response => {
            dispatch(loginSuccess(response.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(loginFailure(email))
        })
    }
}
//end login user

//login user 
export const addDataSuccess = (data) => ({
    type: 'ADD_DATA_SUCCESS',
    data
})

export const addDataFailure = (id) => ({
    type: 'ADD_DATA_FAILURE',
    id
})

export const addDataView = (id, letter, frequency) => ({
    type: 'ADD_DATA',
    id, letter, frequency
})

export const addData = (letter, frequency) => {
    let id = Date.now()
    return dispatch => {
        dispatch(addDataView(letter, frequency))
        return request.post('/api/data', {
            id, letter, frequency
        }).then(response => {
            console.log(response.data.data)
            dispatch(addDataSuccess(response.data.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(addDataFailure(id))
        })
    }
}
//end login user

//load data 
export const loadDataSuccess = (data) => ({
    type: 'LOAD_DATA_SUCCESS',
    data
})

export const loadDataFailure = () => ({
    type: 'LOAD_DATA_FAILURE'
})

export const loadData = () => {
    return dispatch => {
        return request.get('/api/data')
        .then(response => {
            dispatch(loadDataSuccess(response.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(loadDataFailure())
        })
    }
}
//end load data