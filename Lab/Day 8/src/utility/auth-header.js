export function authHeader() {
    // return authorization header with jwt token
    let authToken = JSON.parse(localStorage.getItem('token'));

    if (authToken && authToken.token) {
        return { 'Authorization': 'Bearer ' + authToken.token };
    } else {
        return {};
    }
}