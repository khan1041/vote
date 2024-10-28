

const mongoose=require("mongoose")


const urlScema=new mongoose.Schema({

ShortId:{
  
    type:String,
    require:true,
    uniqe:true
},

rediretcURL:{

    type:String,
    require:true
},
visitHistory:[{

    timestamp:{
        type:Number,
    }
}]


},{timestamps:true})

const URL=mongoose.model("url",urlScema)
module.exports=URL





