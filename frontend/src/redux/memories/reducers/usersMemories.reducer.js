import CONST from "../memories.constants"

const USER_MEMORIES_INITIAL_STATE = {
    pending: false,
    errors: null,
    memories: []
}


const userMemoriesReducer = (state = USER_MEMORIES_INITIAL_STATE, action) => {
    switch(action.type){

        case CONST.GET_USER_MEMORIES_START:
            return {...state, pending: true}
        case CONST.GET_USER_MEMORIES_ERROR:
            return {...state, pending: false, errors: action.payload.errors}
        case CONST.GET_USER_MEMORIES_SUCCESS:
            return {...state, pending: false, errors: null, memories: action.payload.memories.map(memory => memory.id)}
            

        default:
            return state
    }
}

const usersMemoriesReducer = (state = {}, action) => {
    switch(action.type){

        case CONST.GET_USER_MEMORIES_START:
        case CONST.GET_USER_MEMORIES_ERROR:
        case CONST.GET_USER_MEMORIES_SUCCESS:
            return {...state, [action.payload.userid]: userMemoriesReducer(state[action.payload.userid], action)}

        default:
            return state
    }
}

export default usersMemoriesReducer