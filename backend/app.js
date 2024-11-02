const express =require('express')
const cors=require('cors')
const router =require('./routes/routes');
const { connect } = require('mongoose');
const ConnnectDB =require('./connectDB/connect')
const app =express();
require('dotenv').config();
app.use(cors());
app.use(express.static('../src'))
app.use(express.json());
app.use('/kingAB' ,router);
const port =process.env.PORT || 5000;
const start =async () =>{
    try{
        await ConnnectDB(process.env.MONGO_URI);
        
        app.listen(port, () => {
            console.log("running on 5000")
        })
    }
    catch(error)
    {
        console.log(error);
    }
}
start();

