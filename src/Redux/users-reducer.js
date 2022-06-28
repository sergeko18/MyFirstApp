import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users], идентичная запись
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )

            }

        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users], идентичная запись
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),*/
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export const unfollowSuccess = (userId) => (
    {type: UNFOLLOW, userId}
);

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUserCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

//thunks:
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}

export const pageChanged = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        let data = await usersAPI.getUsers(pageNumber, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, ac) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod;
    if (response.data.resultCode === 0) {
        dispatch(ac(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));

}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.postUsers(userId), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.deleteUsers(userId), unfollowSuccess);
    }
}

export default usersReducer;

