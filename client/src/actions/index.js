import request from './connect';

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
            if (response.data.msg) {
                dispatch(loginSuccess(response.data))
            }else{
                dispatch(loginFailure(email))
            }
        }).catch(function (error) {
            console.log(error);
            dispatch(loginFailure(email))
        })
    }
}
//end login user