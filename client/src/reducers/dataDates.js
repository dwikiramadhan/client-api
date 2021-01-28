import Swal from 'sweetalert2';

const dataDates = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATA_DATE':
            return [
                ...state,
                {
                    id: action.id,
                    letter: action.letter,
                    frequency: action.frequency
                }
            ]

        case 'ADD_DATA_DATE_SUCCESS':
            return state.map(item => {
                // return console.log(item)
                Swal.fire({
                    icon: 'success',
                    title: 'Data has been Add!',
                    text: ''
                }).then(function () {
                    // history.push('/home')
                });
                item.sent = true
                return item
            });

        case 'ADD_DATA_DATE_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            });

        case 'LOAD_DATA_DATE_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                item.isBtnSave = false;
                return item
            })

        case 'LOAD_DATA_DATE_FAILURE':
            return state

        case 'UPDATE_DATA_DATE':
            return state.map(item => {
                if (item.id === action.id) {
                    return (
                        {
                            id: action.id,
                            letter: action.letter,
                            frequency: action.frequency
                        }
                    )
                }
                return item
            })

        case 'UPDATE_DATA_DATE_SUCCESS':
            return state;

        case 'UPDATE_DATA_DATE_FAILURE':
            return state;

        case 'DELETE_DATA_DATE':
            console.log(state.filter(item => item._id !== action.id))
            return state.filter(item => item._id !== action.id)

        case 'DELETE_DATA_DATE_SUCCESS':
            return state

        case 'DELETE_DATA_DATE_FAILURE':
            return state;

        default:
            return state;
    }
}

export default dataDates