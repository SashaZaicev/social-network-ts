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
  follow(userId: string) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  unfollow(userId: string) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

type MeResponseType = {
  data: { id: string, email: string, login: string }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
type LoginResponseType = {
  data: { userId: string }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

export const headerApi = {
  authMe() {
    return instance.get<MeResponseType>(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  login(email: string, password: string, rememberMe = false, captcha = '') {
    return instance.post<LoginResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha
    })
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
  authUser(userId: string) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data
      })
  },
  getStatus(userId: string) {
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
  },
  savePhotos(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
      .then(response => {
        return response.data
      })
  }
}

