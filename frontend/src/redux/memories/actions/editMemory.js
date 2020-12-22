import CONST, {URLS} from "../memories.constants"
import {getAuthToken} from "../../../utils/jwt"


const editMemory = memoryData => async dispatch => {


    dispatch(editMemoryStart(memoryData.id))
    const url = URLS.getEditMemoryUrl(memoryData.id)

    const formData = new FormData();
    for ( var key in memoryData ) {
        formData.append(key, memoryData[key]);
    }



    try{
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Authorization': 'JWT ' + getAuthToken()
            },
            body: formData
        })

        const json = await response.json()
        console.log(response)
        console.log(json)   
        if(response.status <=400){
           
           // dispatch(editMemorySuccess(memory))
         
        }else{
            console.error(`${response.status}: ${response.statusText}`)
           // dispatch(editMemoryError(memoryId))
        }
    }catch(error){
        console.log(error)
    }
}

const editMemoryStart = (memoryId) => ({
    type: CONST.EDIT_MEMORY_START,
    payload: {id: memoryId}
})

const editMemoryError = (errors) => ({
    type: CONST.EDIT_MEMORY_ERROR,
    errors: errors
})

const editMemorySuccess = (memory) => ({
    type: CONST.EDIT_MEMORY_SUCCESS,
    payload: memory
})

export default editMemory