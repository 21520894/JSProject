import { Sequelize } from "sequelize";

const sequelize = new Sequelize('JSWebDB','root', null,{
    host: "localhost",
    dialect: 'mysql'
})

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log ('connect DB successfully')
    }
    catch (error){
        console.error('Unable to connect to DB', error);
    }
}

module.exports = connectDB;