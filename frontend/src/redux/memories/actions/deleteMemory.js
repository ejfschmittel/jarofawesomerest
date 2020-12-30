import CONST, {URLS} from "../memories.constants"
import {getAuthToken} from "../../../utils/jwt"



const deleteMemory = memoryId => async dispatch => {


    dispatch(deleteMemoryStart(memoryId))
    const url = URLS.getDeleteMemoryUrl(memoryId)

    try{
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + getAuthToken()
            },
            body: JSON.stringify({id: memoryId})
        })

        const json = await response.json()
        console.log(response)
        console.log(json)   
        if(response.status <=400){
           
            dispatch(deleteMemorySuccess(memoryId))
         
        }else{
            console.error(`${response.status}: ${response.statusText}`)
            dispatch(deleteMemoryError(memoryId))
        }
    }catch(error){
        console.log(error)
    }
}

const deleteMemoryStart = (memoryId) => ({
    type: CONST.DELETE_MEMORY_START,
    payload: {id: memoryId}
})

const deleteMemoryError = (errors) => ({
    type: CONST.DELETE_MEMORY_ERROR,
    errors: errors
})

const deleteMemorySuccess = (memoryId) => ({
    type: CONST.DELETE_MEMORY_SUCCESS,
    payload: memoryId
})

export default deleteMemory