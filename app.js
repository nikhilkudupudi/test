const express=require("express");
const router=express.Router();
const app=express();
app.use(express.json());

router.get("/",async (req,res)=>{
    res.send(`<html> <p> hi welcome to the test project</p> </html> `);
    
})

app.use("/",router);
// app.use("/books",require("./route"));

module.exports=app;