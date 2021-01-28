import Swal from 'sweetalert2';

const maps = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MAPS':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    lat: action.lat,
                    lang: action.lang,
                }
            ]

        case 'ADD_MAPS_SUCCESS':
            return state.map(item => {
                // return console.log(item)
                Swal.fire({
                    icon: 'success',
                    title: 'Maps has been Add!',
                    text: ''
                }).then(function () {
                    // history.push('/home')
                });
                return item
            });

        case 'ADD_MAPS_FAILURE':
            return state.map((item) => {
                return item
            });

        case 'LOAD_MAPS_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                return item
            })

        case 'UPDATE_MAPS':
            return state.map(item => {
                if (item.id === action.id) {
                    return (
                        {
                            id: action.id,
                            title: action.title,
                            lat: action.lat,
                            lang: action.lang,
                        }
                    )
                }
                return item
            })

        case 'UPDATE_MAPS_SUCCESS':
            return state;

        case 'UPDATE_MAPS_FAILURE':
            return state;

        case 'DELETE_MAPS':
            return state.filter(item => item._id !== action.id)

        case 'DELETE_MAPS_SUCCESS':
            return state

        case 'DELETE_MAPS_FAILURE':
            return state;

        default:
            return state;
    }
}

export default maps