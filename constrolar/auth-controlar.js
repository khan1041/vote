

const bceypt=require('bcryptjs')
const User=require('../Skima/Peraon')
const jwt=require('jsonwebtoken')
const { response } = require('express')

const regestation= async(req,res)=>{
  try {
const {username,password,email,role,nidchard}=req.body

const dataidntify=await User.findOne({email})

if(dataidntify){

 return res.status(200).json({msg:"User exits"})
}

const user=await User.create({
 
  username,password,email,role,nidchard

})

res.status(201).json({msg:user, token:await user.generateToken(), userId:user._id.toString})

// id:user.id,
// username:user.username

// }
// const token=generateToken(payload)

  } catch (error) {
    console.log(error)
    
  }
} 




//login patr

const login=async(req,res)=>{

  try {
    const{email,password}=req.body
  
    const loginuser=await User.findOne({email})
    if(!loginuser){
      return res.status(400).json({msg:"login failed"})
     }
     const user=await bceypt.compare(password,loginuser.password)
  if(user){
   

    return res.status(200).json({msg:"success",token:await loginuser.generateToken()})
  }
   
    else{
 
    res.status(400).json({msg:"sory"})
  }
 
    }
    catch (error) {
  
console.log(error)

  }
}





const user=async(req,res)=>{

try {
  const userData=req.user;
console.log(userData)
  const userId=userData.id
  const user=await User.findById(userId)
  
  res.status(200).json({msg:"done",user})
} catch (error) {
  
}

}






const update=async(req,res)=>{

  try {
    const updatename=req.params.id
    const datalocked=req.body
    const updatetime=await User.findByIdAndUpdate(updatename,datalocked)
  const newupdate=res.status(200).json({msg:"update",updatetime})


  } catch (error) {
    console.log(error)
  }


}
module.exports={regestation,login,update,user}


