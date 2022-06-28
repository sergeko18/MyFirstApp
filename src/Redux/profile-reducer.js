import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'YO!1', likesCount: 32}
    ],
    newPostText: '',
    profile: null,
    status: '',

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostElement,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.newStatus
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostElement) => {
    return {type: ADD_POST, newPostElement}
};

export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
};

export const setStatus = (status) => (
    {type: SET_STATUS, newStatus: status}
);
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
    }
};

export const updateStatus = (status) => {
    return  async (dispatch) => {
        let response = profileAPI.updateStatus(status)
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
    }
};


export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile}
);
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
    }
};





export default profileReducer;

