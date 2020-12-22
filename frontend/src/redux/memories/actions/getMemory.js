import CONST, {URLS} from "../memories.constants"
import {getAuthToken} from "../../../utils/jwt"


const getMemory = memoryId => async dispatch => {
    console.log("hell")

    dispatch(getMemoryStart())
    const url = URLS.getMemoryUrl(memoryId)
    console.log(url)

    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + getAuthToken()
            },
        })

        const json = await response.json()
      
        console.log(json)
        if(response.status <=400){
            console.log("success")
            dispatch(getMemorySuccess(json))
         
        }else{
            console.error(`${response.status}: ${response.statusText}`)
            dispatch(getMemoryError(json))
        }
    }catch(error){
        console.log(error)
    }
}

const getMemoryStart = () => ({
    type: CONST.GET_MEMORY_START,
})

const getMemoryError = (errors) => ({
    type: CONST.GET_MEMORY_ERROR,
    errors: errors
})

const getMemorySuccess = (memory) => ({
    type: CONST.GET_MEMORY_SUCCESS,
    payload: memory
})

export default getMemory