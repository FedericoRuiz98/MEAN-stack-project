const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.auth = (req, resp) => {
  let body = req.body;

  User.findOne({email: body.email}, (error,userFound)=>{
    if(error) {
      return resp.status(500).send({ errors : [{title: 'Users Error!', detail: 'Do not exist any user with this email' }]});
    }

    //user exist?
    if(!userFound) {
      return resp.status(400).send({ errors : [{title: 'Users Error!', detail: 'The email or password are wrong'}]});
    } else {
      //check password
      if(!bcrypt.compareSync(body.password, userFound.password)) {
        return resp.status(400).send({ errors : [{title: 'Users Error!', detail: 'The email or password are wrong'}]});
      } else {

        //token
        let token = jwt.sign({user: userFound,}, process.env.SEED_AUTENTICACION, {
          expiresIn: process.env.CADUCIDAD_TOKEN
        })

        resp.status(200).json({
          user: userFound,
          token
        });
      }      
    }

  });
}

exports.register = (req, resp) => {
  let body = req.body;
  let {username, email, password} = body;
  let errors = [];

  let user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, 10)
  });

  user.save((error, userFound) =>{
    if(error) {
      resp.status(400).send({ errors : [{title: 'Users Error!', detail: error}]});
    } else {
      resp.status(200).send({ user : userFound});
    }
  })

};
