const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Finance")
.then(()=>{
    console.log("connected");
})
.catch((e)=>{
    console.error(e)
})
const newSchema = new mongoose.Schema({
    level:{
        type:String,
        required:true
        
    }
})
const collection = mongoose.model("userLearningData",newSchema)

module.exports=collection