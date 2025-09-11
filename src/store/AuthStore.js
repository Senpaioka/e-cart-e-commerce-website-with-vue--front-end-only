import { defineStore } from "pinia";
import { ref } from "vue";
import UserInfo from '../data/auth.json'

export const useUserInfoStore = defineStore('user-data', () => {
    const user = ref(UserInfo)
    // const currentUser = ref(null)
    const currentUser = ref(
    JSON.parse(localStorage.getItem('currentUser')) || null
  )

    function addUser(newUser) {
        user.value.push(newUser)
    }

    function setCurrentUser(data){
        currentUser.value = data;
        localStorage.setItem("currentUser", JSON.stringify(data))
    }

    function logout() {
        currentUser.value = null
        localStorage.removeItem('currentUser') 
    }

    return { user, addUser, setCurrentUser, currentUser, logout }
})