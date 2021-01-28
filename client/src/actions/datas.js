import request from './connect';

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
export const addDataExists = (letter) => ({
    type: 'ADD_DATA_EXISTS',
    letter
})

export const addData = (letter, frequency) => {
    let id = Date.now()
    return dispatch => {
        request.post('/api/checkdata', {
            letter
        }).then(response => {
            if (response.data) {
                dispatch(addDataExists(letter));
            } else {
                dispatch(addDataView(id, letter, frequency))
                return request.post('/api/data', {
                    id, letter, frequency
                }).then(response => {
                    dispatch(addDataSuccess(response.data.data))
                }).catch(function (error) {
                    console.log(error);
                    dispatch(addDataFailure(id))
                })
            }
        }).catch(function (error) {
            console.log(error);
            dispatch(addDataView(id, letter, frequency))
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


//Edit data 
export const updateDataSuccess = (data) => ({
    type: 'UPDATE_DATA_SUCCESS',
    data
})

export const updateDataFailure = (id) => ({
    type: 'UPDATE_DATA_FAILURE',
    id
})

export const updateDataView = (id, letter, frequency) => ({
    type: 'UPDATE_DATA',
    id, letter, frequency
})

export const updateData = (id, letter, frequency) => {
    return dispatch => {
        dispatch(updateDataView(id, letter, frequency))
        return request.put(`/api/data/${id}`, {
            id, letter, frequency
        }).then(response => {
            dispatch(updateDataSuccess(response.data.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(updateDataFailure(id))
        })
    }
}
//end update data

//delete data 
export const deleteDataSuccess = (data) => ({
    type: 'DELETE_DATA_SUCCESS',
    data
})

export const deleteDataFailure = () => ({
    type: 'DELETE_DATA_FAILURE'
})

export const deleteDataView = (id) => ({
    type: 'DELETE_DATA',
    id
})

export const deleteData = (id) => {
    return dispatch => {
        dispatch(deleteDataView(id))
        return request.delete(`/api/data/${id}`)
            .then(response => {
                dispatch(deleteDataSuccess(response.data.data))
            }).catch(function (error) {
                dispatch(deleteDataFailure())
            })
    }
}
//end delete data

//start resend data
export const resendData = (id, letter, frequency) => {
    return dispatch => {
        return request.post('/api/data', { id, letter, frequency })
            .then(function (response) {
                dispatch(addDataSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(addDataFailure(id))
            });
    }
}