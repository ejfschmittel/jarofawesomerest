import { combineReducers } from "redux"

import memoriesReducer from "./memories.reducer"
import createMemoryReducer from "./createMemory.reducer"
import usersMemoriesReducer from "./usersMemories.reducer"

export default combineReducers({
    memories: memoriesReducer,
    usersMemories: usersMemoriesReducer,
    createMemory: createMemoryReducer,
})