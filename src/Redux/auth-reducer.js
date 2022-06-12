import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';




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

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: id, email, login, isAuth});

export const getAuthUserData =() => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0){
                /*this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)*/
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));

            }
        });
    }
}

export const login =(email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if(response.data.resultCode === 0){
                dispatch(getAuthUserData());

            }
        });
    }
}

export const logout =() => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));

            }
        });
    }
}

export default authReducer;

