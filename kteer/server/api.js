const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('./schemas/users');
const Listing = require('./schemas/listings');
const Contract = require('./schemas/contracts');
const Review = require('./schemas/reviews');


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
    User.find().exec((err, allUsers) => {
        if(err){
            sendError(err, res);
        } else {
            response.status = 200;
            response.message = "";
            response.data = allUsers;
            res.send(response);
        }
    })
})

router.post('/users', (req, res) => {
    console.log(req);
    User.findOne({username: req.body.username}).exec((err, user)=>{
        if(user){
            response.status = 400;
            response.message = "user already exists!";
        } else {
            let newUser = new User({
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

router.get('/listings', (req, res) => {
    Listing.find().exec((err, allListings) => {
        if(err) {
            sendError(err, res);
        } else {
            response.status = 200;
            response.message = "";
            response.data = allListings;
            res.send(response);
        }
    })
})

router.post('/listings', (req, res) => {
    User.findOne({username: req.body.owner}).exec((err, owner) => {
        //checking if user exceeded the maximum limit of listings        
        if(owner.listings.length > 10) {
            response.data = [];
            response.message = "Listing maximum number exceeded!";
            response.status = 406;
            res.send(response);
        } else {
            let newListing = new Listing({
                title: req.body.title,
                description: req.body.description,
                owner: req.body.owner,
                pictures: req.body.pictures,
                pricing: req.body.pricing,
                contracts: req.body.contracts,
                category: req.body.category
            })
            newListing.save((err, newListing) => {
                if(err) {
                    sendError(err, res);
                } else {
                    User.update(
                        {username: owner.username},
                        {listings: owner.listings.concat([newListing._id])}
                    )

                    response.data = [];
                    response.status = 201;
                    response.message = "Listing posted successfully!"
                    res.send(response);
                }
            })
        }
    })
})

router.get('/contracts', (req, res) => {
    Contract.find().exec((err, allContracts) => {
        if(err) {
            sendError(err, res);
        } else {
            response.status = 200;
            response.message = "";
            response.data = allContracts;
            res.send(response);
        }
    })
})

router.post('/contracts', (req, res) => {
    Listing.findOne({_id: req.body.listingId}).exec((err, listing) => {
        if(err) {
            sendError(err, res);
        } else {
            if(listing.contracts.length > 10) {
                response.data = [];
                response.status = 406;
                response.message = "maximum number of contracts reached for this listing";
                res.send(response);
            } else {
                let newCont = new Contract({
                    listingId: req.body.listingId,
                    for: req.body.for,
                    estimatedHours: req.body.estimatedHours,
                    deadline: req.body.deadline,
                    started: new Date()
                })
                newCont.save((err, newContract) => {
                    if(err) {
                        sendError(err, res);
                    } else {
                        response.data = [];
                        response.status = 201;
                        response.message = "contract established successfully";
                        res.send(response);                        
                    }
                })
            }
        }
    })
})

router.get('/reviews', (req, res) => {
    Review.find().exec((err, allReviews) => {
        if(err){
            sendError(err, res);
        } else {
            response.status = 200;
            response.message = "";
            response.data = allReviews;
            res.send(response);
        }
    })
})

router.post('/reviews', (req, res) => {
    let newReview = new Review({
        userId: req.body.userId,
        rating: req.body.rating % 11,
        textReview: req.body.textReview
    })
    newReview.save((err, review) => {
        if(err) {
            sendError(err, res);
        } else {
            response.status = 201;
            response.message = "review added successfully";
            response.data = [];
            res.send(response);
        }
    })
})



module.exports = router;
