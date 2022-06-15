export let UsersSelector = (state) => {
    return state.usersPage.users ;
}

export let PageSizeSelector = (state) => {
    return state.usersPage.pageSize ;
}

export let totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount ;
}

export let currentPageSelector = (state) => {
    return state.usersPage.currentPage ;
}

export let isFetchingSelector = (state) => {
    return state.usersPage.isFetching ;
}

export let followingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress ;
}
