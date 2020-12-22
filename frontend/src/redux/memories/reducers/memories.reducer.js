import CONST from "../memories.constants"


const MEMORY_INITIAL_STATE = {
    title: "",
    date: "",
    user: "",
    getPending: false,
    deletePending: false,
    deleteErrors: null,
    editPending: false,
    editErrors: null
}

const memoryReducer = (state=MEMORY_INITIAL_STATE, action) => {

    console.log("memory reduce")
    console.log(state)

    switch(action.type){
        case CONST.DELETE_MEMORY_START:
            return {...state, deletePending: true}
        default:
            return state
    }
}



const memoriesReducer = (state={}, action) => {
    switch(action.type){
        case CONST.CREATE_MEMORY_SUCCESS:
            return {...state, [action.payload.id]: action.payload}

        case CONST.GET_USER_MEMORIES_SUCCESS:
            const updatedMemories = action.payload.memories.reduce((obj,memory) => {
                return {...obj, [memory.id]: {...state[memory.id], ...memory}}
            },{})
            return {...state, ...updatedMemories}
        
    
        case CONST.GET_MEMORY_SUCCESS:
            return {...state, [action.payload.id]: {...state[action.payload.id], ...action.payload}}
        

        case CONST.DELETE_MEMORY_START:
            return {...state, [action.payload.id]: memoryReducer(state[action.payload.id], action)}

        default: 
            return state
    }
}

export default memoriesReducer