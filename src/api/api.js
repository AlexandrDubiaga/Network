import * as axios from "axios/index";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "ec13c7fa-bf13-4b56-aa9c-409a1e523851"}

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
        return instance.post(`auth/login`,{email:userData.email,password:userData.password,captcha:userData.capcha})
    },
    logoutUser(){
        return instance.delete(`auth/login`);
    }

}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}
