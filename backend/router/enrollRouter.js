const express = require('express');
const router = express.Router();
const Model = require('../model/enrollModel');
const verifyToken = require('./verifyToken');

router.post('/add', verifyToken, (req, res) => {
    req.body.influencer = req.user._id;
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
    Model.find().populate('campaign').populate('influencer')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id).populate('campaign').populate('influencer')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/check-enrolled/:id', verifyToken, (req, res) => {
    Model.findOne({ influencer: req.user._id, campaign: req.params.id })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyinfluencer', verifyToken, (req, res) => {
    Model.find({ influencer: req.user._id }).populate('campaign')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// get by brand
router.get('/getbybrand', verifyToken, (req, res) => {
    Model.find().populate('campaign').populate('influencer')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbycampaign/:id', (req, res) => {
    Model.find({ campaign: req.params.id }).populate('influencer')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('campaign')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;