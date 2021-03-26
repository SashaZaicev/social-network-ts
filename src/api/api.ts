import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b8f7d5e1-77fe-4269-97b3-181c5d205c51"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
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
    }
}

export const profileApi = {
    authUser(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}
