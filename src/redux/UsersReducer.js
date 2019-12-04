const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        {id: 1, fullName: 'Alex', followed: false, status: 'Im boss', location: {city: 'Mycolaiv', country: 'Ukraine'}},
        {id: 2, fullName: 'Lena', followed: false, status: 'Im sister', location: {city: 'Herson', country: 'Franch'}},
        {id: 3, fullName: 'Luda', followed: false, status: 'Im woman', location: {city: 'Harkov', country: 'Kongo'}},
        {id: 4, fullName: 'Hworang', followed: false, status: 'Im champ', location: {city: 'Odessa', country: 'USA'}}
    ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            debugger
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
                ...state,users:[...state.users,...action.users]
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


export default usersReducer;