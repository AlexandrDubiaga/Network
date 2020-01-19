import * as axios from "axios/index";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "7c2b1d62-7561-4a6d-a49c-4ca6890f67a4"}

});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(responce => responce.data)
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(responce => responce.data)
    },
    getUsersProfile(userId) {
        return profileAPI.getUsersProfile(userId);
    }
}

export const profileAPI = {
    getUsersProfile(userId) {
        return instance.get(`profile/${userId}`).then(responce => responce.data);

    },
    getUsersStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}


export const authAPI = {
    authUser() {
        return instance.get(`auth/me`);
    },
    loginUser(userData) {
        return instance.post(`auth/login`,{email:userData.email,password:userData.password})
    },
    logoutUser(){
        return instance.delete(`auth/login`);
    }

}


export const securityAPI = {}
