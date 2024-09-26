import { Express } from "express"
import CRUDService from "../services/CRUDService"
import userService from "../services/userService"

let handleLogin = async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password)
    {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing login parameter!'
        })
    }
        let userData = await userService.handleUserLogin(email,password)
        return res.status(200).json({
            errCode: userData.errCode,
            errMessage: userData.errMessage,
            user: userData.user ? userData.user : {}
        })
} 

let handleCreateUser = async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let data = {email: email, password: password}
    const createRes = await CRUDService.createUser(data)
    if (createRes)
    {
        return res.status (200).json ({
            errCode: 0,
            message: createRes
        })
    }
    else{
        return res.status(500).json({
            errCode: 1,
            errMessage: "error some where"
        })
    }
}

export default {
    handleLogin: handleLogin,
    handleCreateUser: handleCreateUser
}