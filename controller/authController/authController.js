const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../../model/userModel');

const controlSignin = (req, res)=>{
  const {email, password} = req.body
  const myQuery = {}
  if(email) {
      myQuery.email = email
  } 

  // ==================  Signin =============
  UserModel.findOne(myQuery)
  .then(user=>{
    const {email, passwordHash} = user
      const isAuthenticated = bcrypt.compareSync(password, passwordHash)
      if(isAuthenticated){
          const KEY = process.env.JWT_PRIVATE
          const token = jwt.sign({ id:user._id, email}, KEY)
          res.send(JSON.stringify({
              status:'ok',
              data: token
          }))
      }else{
          res.status(401).json({
            message:'Auth Failed'
        })
      }
  })
  .catch(err=>{
    res.status(401).json({
        message: err.message
    })
  })
}



// ==================  Signup =============


const controlSignup = (req, res)=>{
  const {email, password, residence} = req.body
  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(password, salt)
  const User = new UserModel({
      email,
      passwordHash,
      residence
  })
  User.save()
  .then(user=>{
      res.status(200).json({status:'ok'})
  })
  .catch(err=>{
      res.status(400).json({
        message: err.message
      })
  })
  
}



// ==================  Validate =============
const validate = (req, res) => {
    try{
      const token = req.headers.token
      if(token){
          const decoded = jwt.verify(token, process.env.JWT_PRIVATE)
          res.send({status:'ok', data: decoded})
      }
    }catch(err){
      res.sendStatus(400)
    }
}

module.exports = {controlSignin, controlSignup, validate}