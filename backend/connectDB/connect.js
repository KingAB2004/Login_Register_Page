const mongoose =require('mongoose')
const ConnnectDB =(url) =>{
    return mongoose.connect(url)
}
module.exports =ConnnectDB;