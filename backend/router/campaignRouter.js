const express = require('express');
const router = express.Router();
const Model = require('../model/campaignModel');
const verifyToken = require('./verifyToken');

router.post('/add', verifyToken, (req, res) => {
    req.body.brand = req.user._id;
    console.log(req.body);

    //to save data in mongodb
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})
router.get('/getall', (req, res) => {
    Model.find().populate('brand')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id).populate('brand')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true}).populate('brand')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
