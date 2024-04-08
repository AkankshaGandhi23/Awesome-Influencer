const express = require ('express');
const router = express.Router();
const Model = require('../model/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');

router.post('/add',(req, res) => {
    console.log(req.body);

    //to save data in mongodb
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);  //200 mean successfull
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err); 
         // 500 means some error
        
    });
    
})
router.get('/getall',(req , res) => {
    res.send('post read operation');
});

router.post('/authenticate',(req , res) => {
    Model.findOne(req.body)
    ..then((result) => {
        if(result) => {
            const payload = {_id: result._id, email:result.email , role: result.role};

            //create jwt token
            jwt.sign{
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '3 days'},
                {err, token} => {
                    if(err){
                        console.log(err);
                        res.status(500).json(err);
                    }else{
                        res.status(200).json({message: 'Invalid Credentials'});
                    }
                    }
                }
            }
        }else{
            res.status(401).json({message: 'Invalid Credentials'})
        }
        
    }).catch((err) => {
        console.log(err)
        
    });
}


module.exports = router;
