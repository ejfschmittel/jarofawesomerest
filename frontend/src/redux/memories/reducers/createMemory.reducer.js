import CONST from "../memories.constants"

const CREATE_MEMORY_INITIAL_STATE = {
    pending: false,
    errors: null
}

const createMemoryReducer = (state = CREATE_MEMORY_INITIAL_STATE, action) => {
    switch(action.type){
        case CONST.CREATE_MEMORY_START:
            return {...state, pending: true}
        case CONST.CREATE_MEMORY_ERROR:
            return {...state, pending: false, errors: action.payload}
        case CONST.GET_USER_MEMORIES_SUCCESS:
            return {...state, pending: false, errors: null}
        default: 
            return state
    }
}

export default createMemoryReducer