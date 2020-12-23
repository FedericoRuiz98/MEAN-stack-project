const express = require("express");
const router = express.Router();

const User = require('../models/user')

//getAll
router.get('', function(req, res){
    User.find({}, (error,usersFound)=>{
        res.json(usersFound);
    });  
});

//getOne
router.get('/:id',(req,resp)=>{
    const userId = req.params.id;
    User.findById(userId, (error,userFound)=>{
        if(error){
			resp.status(422).send({ errors : [{title: 'Users Error!', detail: 'Could not find User!' }]})
        }else{
            resp.json(userFound);
        }
    });
});

module.exports = router;