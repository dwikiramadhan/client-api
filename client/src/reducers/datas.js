import Swal from 'sweetalert2';

const datas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [
                ...state,
                {
                    id: action.id,
                    letter: action.letter,
                    frequency: action.frequency
                }
            ]

        case 'ADD_DATA_SUCCESS':
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

        case 'ADD_DATA_EXISTS':
            return state.map(item => {
                // return console.log(item)
                Swal.fire({
                    icon: 'error',
                    title: 'Title is already exists!',
                    text: ''
                }).then(function () {
                    // history.push('/home')
                });
                return item
            });

        case 'ADD_DATA_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            });

        case 'LOAD_DATA_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                item.isBtnSave = false;
                return item
            })

        case 'LOAD_DATA_FAILURE':
            return state;

        case 'UPDATE_DATA':
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

        case 'UPDATE_DATA_SUCCESS':
            return state;

        case 'UPDATE_DATA_FAILURE':
            return state;

        case 'DELETE_DATA':
            return state.filter(item => item._id !== action.id)

        case 'DELETE_DATA_SUCCESS':
            return state

        case 'DELETE_DATA_FAILURE':
            return state;

        default:
            return state;
    }
}

export default datas