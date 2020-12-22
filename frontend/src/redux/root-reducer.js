import { combineReducers } from "redux"

import accountsReducer from "./accounts/accounts.reducer"
import memoriesReducer from "./memories/reducers"

const appReducer = combineReducers({
    accountsReducer,
    memoriesReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer