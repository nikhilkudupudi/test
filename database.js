const {Sequelize}=require("sequelize");
const sequelize=new Sequelize({
    dialect: "sqlite",
    storage:"test.db",
    logging: false


   });

async function connectToDb(){
    
    sequelize.authenticate();
}