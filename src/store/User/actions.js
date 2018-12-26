export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function registerUser(payload) {
    return {
        type: REGISTER_USER,
        payload
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER
    }
}