
const initialState = {
    users: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS': {
            return {
                ...state,
                user: [
                    ...state.users,
                    ...action.payload
                ]
            }
        }
        default: return state;
    }
}
