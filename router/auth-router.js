


const express=require('express')

const router=express.Router()
//const jwt=require('../mideleware/Auth-midelware')
const control1=require('../constralers/control-auth')
const control=require('../constrolar/auth-controlar')
 const {authmidelw}=require("../mideleware/Auth-midelware")
 //user crate
 router.route("/reg").post(control.regestation)
 //user login
 router.route("/log").post(control.login)

 //user update
router.route('/:id').put( control.update)
//user profile
router.route("/profile").get(authmidelw,control.user)
//candidate create
router.route("/candidate").post(authmidelw,control1.candite )

//vote add and votoing start
router.route("/candidate/:id").post(authmidelw,control1.voter )

//count vote number
router.route("/count").get(control1.count )

//totolal candidate find()
router.route("/allcandidate").get(control1.totalcandidate )

module.exports=router
