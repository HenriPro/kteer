const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const users = require('./schemas/users');
const listings = require('./schemas/listings');
const contracts = require('./schemas/contracts');
const reviews = require('./schemas/reviews');


let response = {
    status: 200,
    data: [],
    message: null
}

const sendError = (err, res) => {
	response.status = 501;
	response.message = typeof err == 'object' ? err.message: err;
	res.status(501).json(response);
}


router.get('/users', (req, res) => {
    users.find().exec((err, allUsers) => {
        if(err){
            sendError(err, res);
        } else {
            response.data = allUsers;
            res.send(response);
        }
    })
})

router.post('/users', (req, res) => {
    users.findOne({username: req.body.username}).exec((err, user)=>{
        if(user){
            response.status = 400;
            response.message = "user already exists!";
        } else {
            let newUser = new users({
                username: req.body.username,
                aboutMe: req.body.aboutMe,
                location: req.body.location,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                listings: []
            });
            newUser.save((err, newUser)=>{
                if(err){
                    sendError(err, res);
                } else {
                    response.status = 201;
                    response.data = [];
                    response.message = "user added successfully"
                    res.send(response);
                }
            })
        }
    })
})

module.exports = router;
