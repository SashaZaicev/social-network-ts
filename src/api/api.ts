import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "39f6779d-eaae-4bd7-8915-a34646e60614"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const headerApi = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe = false,captcha= false) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}

export const profileApi = {
    authUser(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data
            })
    }
}

