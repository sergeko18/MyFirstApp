import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5bff2800-6008-43a0-9ad2-d6484045aaf9"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`,)
                .then(response => {
                    return response.data;
                })
        )
    },
    deleteUsers(userId) {
        return instance.delete(`follow/${userId}`);
        },
    postUsers(userId) {
        return (
            instance.post(`follow/${userId}`)
        )
    },
    getProfile(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
    }
};

export const authAPI = {
    me(){
        return  instance.get(`auth/me`, {
        })
    }
}