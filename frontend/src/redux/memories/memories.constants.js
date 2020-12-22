

export const MEMORIES_API_URL = "http://127.0.0.1:8000/api/memories/"

export const URLS  = {
    getCreateMemoryUrl: () => MEMORIES_API_URL,
    getDeleteMemoryUrl: (memoryId) => `${MEMORIES_API_URL}${memoryId}/delete`, 
    getEditMemoryUrl: (memoryId) => `${MEMORIES_API_URL}${memoryId}/edit`, 
    getListMemoriesUrl: () => MEMORIES_API_URL,
    getMemoryUrl: (memoryId) => `${MEMORIES_API_URL}${memoryId}`, 
}

const CONST = {

    CREATE_MEMORY_START: "CREATE_MEMORY_START",
    CREATE_MEMORY_SUCCESS: "CREATE_MEMORY_SUCCESS",
    CREATE_MEMORY_ERROR: "CREATE_MEMORY_ERROR",

    EDIT_MEMORY_START: "EDIT_MEMORY_START",
    EDIT_MEMORY_SUCCESS: "EDIT_MEMORY_SUCCESS",
    EDIT_MEMORY_ERROR: "EDIT_MEMORY_ERROR",

    DELETE_MEMORY_START: "DELETE_MEMORY_START",
    DELETE_MEMORY_SUCCESS: "DELETE_MEMORY_SUCCESS",
    DELETE_MEMORY_ERROR: "DELETE_MEMORY_ERROR",

    GET_USER_MEMORIES_START: "GET_USER_MEMORIES_START",
    GET_USER_MEMORIES_SUCCESS: "GET_USER_MEMORIES_SUCCESS",
    GET_USER_MEMORIES_ERROR: "GET_USER_MEMORIES_ERROR",

    GET_MEMORY_START: "GET_MEMORY_START",
    GET_MEMORY_SUCCESS: "GET_MEMORY_SUCCESS",
    GET_MEMORY_ERROR: "GET_MEMORY_ERROR",
}

export default CONST