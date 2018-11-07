const router = require('express').Router()
Client = require('../models/clientModel')


router.get('/actions', function (req, res) {
    Client.find({}).exec(function (err, data) {
        if (err) {
            console.error(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})





module.exports= router