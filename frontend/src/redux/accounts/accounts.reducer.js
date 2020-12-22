import CONST from "./accounts.constants"

const initialState = {
    createdUser: null,
    isSigningUp: false,
    signupErrors: null,

    user: null,
    isLoggingIn: false,
    loginErrors: null,
    authToken: null,


    
}


const accountsReducer = (state = initialState, action) => {
    switch(action.type){

        // signup handling
        case CONST.USER_SIGNUP_START: 
            return {...state, isSigningUp: true};
        case CONST.USER_SIGNUP_ERROR: 
            return {...state, signupErrors: action.payload, isSigningUp: false};
        case CONST.USER_SIGNUP_SUCCESS: 
            return {...state, createdUser: action.payload, isSigningUp: false, signupErrors: false};

        // login handling
        case CONST.USER_LOGIN_START: 
            return {...state, isLoggingIn: true};
        case CONST.USER_LOGIN_SUCCESS: 
            return {...state, user: action.payload.user, authToken: action.payload.token, isLoggingIn: false, loginErrors: null};
        case CONST.USER_LOGIN_ERROR: 
            return {...state, loginErrors: action.payload, isLoggingIn: false};
        default:
            return state
    }
} 

export default accountsReducer