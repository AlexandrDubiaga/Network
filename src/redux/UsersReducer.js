const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';


let initialState = {
    users: [],
    countUsersOnCurrentPage:5,
    usersCountFromServer:0,
    currentPage:1
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,users:action.users,

            }
        }
        case SET_TOTAL_COUNT_USERS: {
            return {
                ...state,
                usersCountFromServer:action.countUsers


            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,currentPage:action.page
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        default:
            return state

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS,users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE,page})
export const setTotalCountUsersAC = (countUsers) => ({type: SET_TOTAL_COUNT_USERS,countUsers})






export default usersReducer;