




const maongse=require('mongoose')
const ens=require('dotenv').config()

const bceypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const { default: mongoose } = require('mongoose')
const { values } = require('lodash')

//skima
const candite= new maongse.Schema({

   name:{         
      type:String,
      required:true,
      },
      patry:{
         type:String,
         required:true
      },
      
      age:{
         type:String,
         required:true
        
        },
        votes:[
     {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    },
    votedAt:{
    
      type:Date,
      defult:Date.now()

    }  ,
     }
        ],
         
votecount:{
  type:Number,
  default:0

}
})

const Peraon1=maongse.model('candidate1',candite);
module.exports=Peraon1




















