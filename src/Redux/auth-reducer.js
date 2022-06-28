import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'sergeApp/auth/SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                id: action.payload,

            }


        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: id, email, login, isAuth});

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            /*this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)*/
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            let action = stopSubmit("login", {_error: message});
            dispatch(action);
        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;

