import CONST from "./accounts.constants"
import {saveAuthToken, removeAuthToken} from "../../utils/jwt"
import history from "../../utils/history"

const BASE_API_URL = "http://127.0.0.1:8000/api/"

const SIGNUP_USER_URL = BASE_API_URL + "users/"
const LOGIN_USER_URL = BASE_API_URL + "users/login/"
const REFRESH_TOKEN_URL = BASE_API_URL + "refresh_token/" // ???



export const logoutUser = () => async (dispatch) => {
    dispatch({
        type: "USER_LOGOUT"
    })
    removeAuthToken();
    // go to login page
}

export const loginUser = (userCredentials) => async (dispatch) => {
    dispatch(loginUserStart())

    try{
        const response = await fetch(LOGIN_USER_URL, {
            method: "POST",
            body: JSON.stringify(userCredentials),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const json = await response.json()
        console.log(json)
        if(response.status >= 400){
            console.error(`${response.status}: ${response.statusText}`)
            dispatch(loginUserError(json))
        }else{
            // save token
            saveAuthToken(json.token)
            dispatch(loginUserSuccess(json))

            // push history => 
            history.push("/")
        }
        
      
    }catch(error){
        console.log(error)
    }
}

const loginUserStart = () => ({
    type: CONST.USER_LOGIN_START
})

const loginUserSuccess= (user) => ({
    type: CONST.USER_LOGIN_SUCCESS,
    payload: user
})

const loginUserError = (errors) => ({
    type: CONST.USER_LOGIN_ERROR,
    payload: errors
})

export const signupUser = (userData) => async (dispatch) => {
    dispatch(singupUserStart())

    console.log(userData)
    try{
        const response = await fetch(SIGNUP_USER_URL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const json = await response.json()
        console.log(json)
        if(response.status >= 400){
            console.error(`${response.status}: ${response.statusText}`)
            dispatch(singupUserError(json))
        }else{
            dispatch(singupUserSuccess(json.username))
        }
        
      
    }catch(error){
        console.log(error)
    }
}

const singupUserSuccess = (username) => ({
    type: CONST.USER_SIGNUP_SUCCESS,
    payload: username
})

const singupUserError = (errors) => ({
    type: CONST.USER_SIGNUP_ERROR,
    payload: errors
})


const singupUserStart= () => ({
    type: CONST.USER_SIGNUP_START
})



