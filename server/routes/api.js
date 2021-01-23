var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

var Users = require('../models/users')
var Datas = require('../models/datas')

/* GET home page. */
router.post('/users/register', function (req, res, next) {
    var { id, email, password, retypepassword } = req.body;

    const token = jwt.sign({ email }, 'my_secret_key');

    Users.findOne({ email: email }, function (err, data) {
        if (err) return handleError(err);
        if (data) {
            res.status(200).json({
                msg: 'Email already exists'
            })
        } else {
            if (password === retypepassword) {
                bcrypt.hash(password, saltRounds, function (err, hash) {
                    Users.create({ id, email, password: hash, token }, function (err, data) {
                        res.status(201).json({
                            data: {
                                email: data.email
                            },
                            token: data.token
                        })
                    })
                });
            } else {
                res.status(200).json({
                    msg: "Password not match"
                })
            }
        }
    })
});

router.post('/users/login', function (req, res, next) {
    var { email, password } = req.body;

    Users.findOne({ email }, function (err, data) {
        if (!data) {
            return res.status(200).json({
                msg: 'Email or Password not found'
            })
        }
        bcrypt.compare(password, data.password, function (err, result) {
            if (result) {
                const token = jwt.sign({ email }, 'my_secret_key');
                Users.updateMany({ email }, { $set: { token: token } }, function (err, response) {
                    res.status(201).json({
                        data: {
                            email: data.email
                        },
                        token: data.token
                    })
                })
            } else {
                res.json({
                    msg: 'Email or Password not found'
                })
            }
        });

    })
})

router.post('/data', verifyToken, function (req, res, next) {
    var { id, letter, frequency } = req.body;

    Datas.create({ id, letter, frequency }, (err, data) => {
        res.status(201).json({
            success: true,
            message: "data have been added",
            data: data
        })
    })

});

router.get('/data', verifyToken, function (req, res, next) {
    Datas.find({}, (err, data) => {
        res.status(200).json({
            data
        })
    })

})

router.get('/users/all', verifyToken, function (req, res, next) {
    res.send('Berhasil')
})

/*--------------------------------- Verifiy Token --------------------------------------------------------*/
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['token'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

module.exports = router;
