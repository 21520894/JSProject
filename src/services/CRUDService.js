import db from "../model/index"
import bcrypt from "bcrypt"

//hash method
const salt = bcrypt.genSaltSync(10)

let createUser = async (data) =>{
    return new Promise( async(resolve,reject) => {
        try {
            let hashPassword = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: "test1",
                lastname: "Nguyen",
                address: "768 BHN",
                phoneNum: "0123456789",
                gender: true
            })
            resolve("Ok create User success")
        } catch (error) {
            reject(error)
        }
    })


}

let hashUserPassword = (password) => {
    return new Promise ( async(resolve,reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password,salt);
            resolve(hashPassword);
        } catch (e) {
            reject (e)
        }
    })
}


export default {
    createUser: createUser
};