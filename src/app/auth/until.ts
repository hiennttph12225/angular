import { localStoragetype } from "../type/signinTypes"

const user : localStoragetype = JSON.parse(localStorage.getItem("user")!)

export const isToken = () =>{
      if (user.token == undefined) {
            return localStorage.setItem("user", JSON.stringify({}))
      }
      return user.token
}
export const isUserId = () =>{
      return user.id
}

