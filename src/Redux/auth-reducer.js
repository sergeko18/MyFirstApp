import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'sergeApp/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'sergeApp/auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null // if null, the captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,


            }

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,


            }


        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

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

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
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

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
};

export default authReducer;

