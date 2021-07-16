import { localStoragetype } from "../type/signinTypes"

const user : localStoragetype = JSON.parse(localStorage.getItem("user")!)

export const isToken = () =>{
      return user.token
}
export const isUserId = () =>{
      return user.id
}

