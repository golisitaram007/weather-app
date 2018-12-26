import * as actions from './actions';

const initState = {
    isUserLoggedIn: false,
    source: '',
    userInfo: {}
}

const userReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case actions.REGISTER_USER:
            const { isUserLoggedIn, ...userInfo } = payload;
            return {
                ...state, isUserLoggedIn, userInfo
            }
        case actions.LOGOUT_USER:
            return {
                ...state, isUserLoggedIn: false, userInfo: Object.assign({})
            }
        default:
            return state;

    }
}

export default userReducer;
