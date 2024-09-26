import db from "../model/index"
import bcrypt from "bcrypt"

let handleUserLogin = (email,password) =>{
    return  new Promise ( async(resolve, reject) =>{
        try {
            let userData = {}
            let isExist =  await checkEmail (email)
            if (isExist)
            {
                // user already exist
                // compare password
                let user = await db.User.findOne({
                    attributes: ['email','password','roleID'],
                    where: {email: email},
                    raw: true
                })
                if (user){
                    console.log("db pass",user.password)
                    console.log('pass:', password)
                    let checkPassword = await bcrypt.compare(password,user.password)
                    if (checkPassword){
                        userData.errCode = 0
                        userData.errMessage = `OK`
                        delete user.password
                        userData.user = user

                    }
                    else{
                        userData.errCode = 3
                        userData.errMessage = `Your password is not correct`
                    }
                }else{
                    userData.errCode = 2
                    userData.errMessage = `User not found`
                }
            }
            else
            {
                //return error
                userData.errCode = 1
                userData.errMessage = `Your email is not exist in the system, Please check your email or register a new account`
            }
            resolve(userData)
        } catch (e) {
            reject (e)
        }

    })
}


let checkEmail = (email) => {
    return new Promise ( async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: email}
            })
            user ? resolve(true) : resolve(false)
        } catch (e) {
            reject (e)
        }
    })
}

export default {
    handleUserLogin: handleUserLogin,
    checkEmail: checkEmail
}