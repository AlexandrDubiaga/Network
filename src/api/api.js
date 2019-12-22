const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "7c2b1d62-7561-4a6d-a49c-4ca6890f67a4"}

});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(
            response => {
                return response.data
            }
        )
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(
            response => {
                return response.data
            }
        )
    },
    getUsersProfile(userId) {
        return profileAPI.getUsersProfile(userId);
    }
}