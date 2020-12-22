import CONST from "./memories.constants"
import {getAuthToken} from "../../utils/jwt"
import history from "../../utils/history"


const BASE_API_URL = "http://127.0.0.1:8000/api/"
const CREATE_GET_MEMORY_URL = BASE_API_URL + "memories/"



export const getUserMemories = (userid, params={}) => async (dispatch) => {
    dispatch(getUserMemoriesStart(userid))

    const searchParams = new URLSearchParams({userid, ...params});
    const url = CREATE_GET_MEMORY_URL + "?" + searchParams
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
            dispatch(getUserMemoriesSuccess(userid, json))
         
        }else{
            console.error(`${response.status}: ${response.statusText}`)
            dispatch(getUserMemoriesError(json))
        }
    }catch(error){
        console.log(error)
    }
}

const getUserMemoriesStart = (userid) => ({
    type: CONST.GET_USER_MEMORIES_START,
    payload: {userid}
})

const getUserMemoriesError = (userid, errors) => ({
    type: CONST.GET_USER_MEMORIES_ERROR,
    payload: {userid, errors}
})

const getUserMemoriesSuccess = (userid, memories) => ({
    type: CONST.GET_USER_MEMORIES_SUCCESS,
    payload: {userid, memories}
})


export const createMemory = (memoryData) => async (dispatch) => {
    dispatch(createMemoryStart())

    try{
        const response = await fetch(CREATE_GET_MEMORY_URL, {
            method: "POST",
            body: JSON.stringify(memoryData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + getAuthToken()
            },
  
        })
        const json = await response.json()
        
        if(response.status < 400){
            dispatch(createMemorySuccess(json))
            history.push(`/memories/${json.id}/edit`)
        }else{
            console.error(`${response.status}: ${response.statusText}`)
            dispatch(createMemoryError(json))
        }
    }catch(error){
        console.log(error)
    }
}

const createMemoryStart = () => ({
    type: CONST.CREATE_MEMORY_START,
})

const createMemorySuccess = (memory) => ({
    type: CONST.CREATE_MEMORY_SUCCESS,
    payload: memory
})

const createMemoryError = (errors) => ({
    type: CONST.CREATE_MEMORY_ERROR,
    payload: errors
})