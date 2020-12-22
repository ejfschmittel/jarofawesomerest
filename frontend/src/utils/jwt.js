


export const getAuthToken = () => {
    return localStorage.getItem("authToken")
}

export const saveAuthToken = (token) => {
    localStorage.setItem("authToken", token)
}

export const removeAuthToken = () => {
    return localStorage.removeItem("authToken", null)
}

export const decodeJWTToken = (token) => {
    if(!token) throw new Error("no decodable token provided.")
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export const isAuthTokenAlive = () => {
    const authToken = getAuthToken();
    console.log(authToken)
    if(!authToken) return false;
    const decodedAuthToken = decodeJWTToken(authToken)
    return isTokenAlive(decodedAuthToken)
}

export const isTokenAlive = (decodedToken) => {
    if(!decodedToken) return false
    const now = Date.now().valueOf() / 1000

    if (typeof decodedToken.exp !== 'undefined' && decodedToken.exp < now) 
        return false
    return true
}
