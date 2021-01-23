import Swal from 'sweetalert2';

const datas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [
                {
                    id: action.id,
                    letter: action.letter,
                    frequency: action.frequency
                },
                ...state
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
                return item
            });

        case 'ADD_DATA_FAILURE':
            return state.map((item) => {
                return item
            });
        
        case 'LOAD_DATA_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                return item
            })

        default:
            return state;
    }
}

export default datas