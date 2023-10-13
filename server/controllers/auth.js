const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "10 minutes",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const foundUser = await User.findOne({ where: { username: username } });
      if (foundUser) {
        res.status(400).send("Sorry! User already is existed!");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
          username: username,
          hashedPassword: hash,
        });
        const token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );
        const expiration = new Date();
        const exp =expiration.setMinutes(expiration.getMinutes() + 10);
        res.status(200).send({
            username:newUser.dataValues.username, userId:newUser.dataValues.id, token:token,expiration:exp})
      }
    } catch (error) {
        console.log(error)
    }
  },
  login:async(req,res)=>{
    try {
        const {username,password}=req.body
        const foundUser=await User.findOne({where:{username:username}})
        if(foundUser){
            const isAuthenticated=bcrypt.compareSync (password,foundUser.hashedPassword)
            if(isAuthenticated){
                const token=createToken(foundUser.dataValues.username,foundUser.dataValues.id)
                const expiration = new Date();
                const exp =expiration.setMinutes(expiration.getMinutes() + 10);
                res.status(200).send({
                    username:newUser.dataValues.username, userId:newUser.dataValues.id, token:token,expiration:exp})
            }else{
                res.status(400).send('Password incorrect.')
            }
        }
        else{
            res.status(400).send('User does not exist.')
          }
    } 
     catch (error) {
        console.log(error)
    }
  }
};
