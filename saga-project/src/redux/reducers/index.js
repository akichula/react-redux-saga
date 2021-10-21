
const initialState = {
    users: [],
    todos: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS': {
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.payload
                ]
            }
        }
        case 'SET_TODOS': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload
                ]
            }
        }
        default: return state;
    }
}
