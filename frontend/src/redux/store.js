import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import {isAuthTokenAlive, getAuthToken, decodeJWTToken} from "../utils/jwt"

import reducers from './root-reducer'


let authToken  = getAuthToken() && isAuthTokenAlive() ? getAuthToken() : null;
let user = getAuthToken() ? decodeJWTToken(getAuthToken()) : null;


const INITIAL_STATE = {
  accountsReducer: {
    authToken,
    user
  }
}




const enhancers = []
const middleware = [
    thunk,
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
    reducers,
    INITIAL_STATE,
    composedEnhancers
)

export default store