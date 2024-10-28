


const User=require('../Skima/Peraon')
const Candidate=require('../Skima2/candidate')
const jwt=require('jsonwebtoken')
//const { generateToken } = require('../mideleware/Auth-midelware')
const { response } = require('express')
const router = require('../router/auth-router')





//admin cheak

const cheakadminrole=async(userID)=>{
    try {
        const user=await User.findById(userID);
         if(user.role==="voted")
          return true

    } catch (error) {
        return false
    }
    
    }


//candidate manage

const candite= async(req,res)=>{

   try {
   if(!await cheakadminrole(req.user.id)){
    return res.status(403).json({msg:"user dose not metch"})

   }

   //admin chak and candidate add 
    const data=req.body
     const newCandidate=new Candidate(data)
    const responsevie=await newCandidate.save()
  console.log("save data")
     res.status(200).json({msg:"done now",responsevie})


   } catch (error) {
     console.log(error)
     
   }
 } 
  



//user voteing manage vote user

const voter=async(req,res)=>{

//jwt token mangement user id
  candidateID=req.params.id
  userId=req.user.id
  
try {
  //user candidate id manage
const candite=await Candidate.findById(candidateID)
if(!candite){
  return res.status(404).json({msg:" candidate not found"})
}

//user id manage and prosses
const user=await User.findById(userId)
if(!user){
 return res.status(404).json({msg:"user not found"})
 }
if(user.isvoted){
 return res.status(400).json({msg:"you are already voted"})
}

if(user.role==="admin"){
  return res.status(400).json({msg:"you are admin"})

}

//vote add and count manage

candite.votes.push({user:candidateID})
 candite.votecount++

await candite.save()



  user.isvoted=true
  await user.save()
//user.votes.push({user:userId})


// const rungo=await user.save()
 res.status(200).json({msg:"voted xx done"})
 
} catch (error) {
  console.log(error)
}


}









//vote counting

const count=async(req,res)=>{

try {

  const candidate=await Candidate.find().sort({votecount:"desc"})

  //cabdidate vote map
 const record=candidate.map((data)=>{
 
  return{
  patry:data.patry,
  count:data.votecount
    
  }

 })
return res.status(200).json({msg:record})
   

} catch (error) {
  console.log(error)
}


}




//---
//total Candidate find()
const totalcandidate=async(req,res)=>{

try {
  const tatalfind=await Candidate.find()
  if(tatalfind){

    return res.status(200).json({msg:"can data find",tatalfind})
  }

} catch (error) {
  
  console.log(error)
}


}





module.exports={candite,voter,count,totalcandidate}














































