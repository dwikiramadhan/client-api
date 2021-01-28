import request from './connect';

//login user 
export const addDataDateSuccess = (data) => ({
    type: 'ADD_DATA_DATE_SUCCESS',
    data
})

export const addDataDateFailure = (id) => ({
    type: 'ADD_DATA_DATE_FAILURE',
    id
})

export const addDataDateView = (id, letter, frequency) => ({
    type: 'ADD_DATA_DATE',
    id, letter, frequency
})

export const addDataDate = (letter, frequency) => {
    let id = Date.now()
    return dispatch => {
        dispatch(addDataDateView(id, letter, frequency))
        return request.post('/api/dataDate', {
            letter, frequency
        }).then(response => {
            console.log(response.data.data)
            dispatch(addDataDateSuccess(response.data.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(addDataDateFailure(id))
        })
    }
}
//end login user

//load data 
export const loadDataDateSuccess = (data) => ({
    type: 'LOAD_DATA_DATE_SUCCESS',
    data
})

export const loadDataDateFailure = () => ({
    type: 'LOAD_DATA_DATE_FAILURE'
})

export const loadDataDate = () => {
    return dispatch => {
        return request.get('/api/dataDate')
        .then(response => {
            dispatch(loadDataDateSuccess(response.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(loadDataDateFailure())
        })
    }
}
//end load data


//Edit data 
export const updateDataDateSuccess = (data) => ({
    type: 'UPDATE_DATA_DATE_SUCCESS',
    data
})

export const updateDataDateFailure = (id) => ({
    type: 'UPDATE_DATA_DATE_FAILURE',
    id
})

export const updateDataDateView = (id, letter, frequency) => ({
    type: 'UPDATE_DATA_DATE',
    id, letter, frequency
})

export const updateDataDate = (id, letter, frequency) => {
    return dispatch => {
        dispatch(updateDataDateView(id, letter, frequency))
        return request.put(`/api/dataDate/${id}`, {
            id, letter, frequency
        }).then(response => {
            dispatch(updateDataDateSuccess(response.data.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(updateDataDateFailure(id))
        })
    }
}
//end update data

//delete data 
export const deleteDataDateSuccess = (data) => ({
    type: 'DELETE_DATA_DATE_SUCCESS',
    data
})

export const deleteDataDateFailure = () => ({
    type: 'DELETE_DATA_DATE_FAILURE'
})

export const deleteDataDateView = (id) => ({
    type: 'DELETE_DATA_DATE',
    id
})

export const deleteDataDate = (id) => {
    return dispatch => {
        dispatch(deleteDataDateView(id))
        return request.delete(`/api/dataDate/${id}`)
        .then(response => {
            dispatch(deleteDataDateSuccess(response.data.data))
        }).catch(function (error) {
            dispatch(deleteDataDateFailure())
        })
    }
}
//end update data

//start resend data
export const resendDataDate = (id, letter, frequency) => {
    return dispatch => {
        return request.post('/api/dataDate', { id, letter, frequency })
            .then(function (response) {
                dispatch(addDataDateSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(addDataDateFailure(id))
            });
    }
}