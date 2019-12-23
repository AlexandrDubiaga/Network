const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_TOUGLE_IS_FETCHING = 'SET_TOUGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';





let initialState = {
    users: [],
    countUsersOnCurrentPage:5,
    usersCountFromServer:0,
    currentPage:1,
    isFetching:false,
    followingInProgress:[]
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
        case SET_TOUGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching:action.isFetching
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress:action.isFetching?[...state.followingInProgress,action.userId]:[state.followingInProgress.filter(id=>id!=action.userId)]
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
export const setIsFetching = (isFetching) => ({type: SET_TOUGLE_IS_FETCHING,isFetching})
export const followingInProgressAC = (isFetching,userId) => ({type: FOLLOWING_IN_PROGRESS,isFetching,userId})







export default usersReducer;