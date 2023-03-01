
const {connecTODB,discconectDB}=require("../../database");

async function startserver(){
    await connectTODB();
}

module.exports ={startserver}