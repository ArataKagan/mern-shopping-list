const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


// Load User model
const User = require('../../models/User');

// @route GET api/post/test
// @desc Test post route
router.get('/test', (req, res) => res.json({msg: "Users works"}));

// @route GET api/post/register
// @desc Register user
router.post('/register', (req, res) => {

    const { errors, isValid} = validateRegisterInput(req.body);

    // Check Validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({email: 'Email already exist'});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save().then()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                })
            })
        }
    })
});

// @route GET api/users/login
// @desc Login User / Returning JWT Token
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    // Find user by email 
    User.findOne({email})
        .then(user => {
            // Check for user
            if(!user){
                return res.status(404).json({email: 'User email not found'});
            }

            // Check password 
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch){
                    // User Matched 
                    const payload = { id: user.id, name: user.name } 

                    // Sign Token
                    jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600 }, (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        })
                    });
                } else {
                    return res.status(400).json({password: 'Password incorrect'});
                }
            })


        })
})

// @route GET api/users/current
// @desc Return current user
router.get(
    '/current', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
     res.json(req.user);
});

module.exports = router;