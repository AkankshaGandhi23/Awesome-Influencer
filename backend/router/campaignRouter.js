const express = require ('express');
const router = express.Router();
const Model = require('../model/campaignModel')

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
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;