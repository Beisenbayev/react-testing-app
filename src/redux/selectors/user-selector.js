export const getUserDataSelector = (state) => {
   return state.userPage.data;
}

export const getIsFetchingSelector = (state) => {
   return state.userPage.isFetching;
}