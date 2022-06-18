import {createSelector} from "reselect";

const UsersSelector = (state) => {
    return state.usersPage.users ;
}

export const UsersSuperSelector = createSelector(UsersSelector, (users) => {
    return users;

})




export const PageSizeSelector = (state) => {
    return state.usersPage.pageSize ;
}

export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount ;
}

export const currentPageSelector = (state) => {
    return state.usersPage.currentPage ;
}

export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching ;
}

export const followingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress ;
}
