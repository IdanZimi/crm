const router = require('express').Router()
Client = require('../models/clientModel')


router.get('/actions-api', function (req, res) {
    Client.find({}).exec(function (err, data) {
        if (err) {
            console.error(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

router.post('/transfer-api', function (req, res) {
    let id = req.body.clientToUpdate._id
    Client.findByIdAndUpdate(id, { '$set': { owner: req.body.clientToUpdate.owner } }, function (error, client) {
        if (error) return res.status(500).send(error)

        res.send(client)
    })
})
router.post('/send-api', function (req, res) {
    let id = req.body.clientToUpdate._id
    Client.findByIdAndUpdate(id, { '$set': { emailType: req.body.clientToUpdate.emailType } }, function (error, client) {
        if (error) return res.status(500).send(error)

        res.send(client)
    })
})
router.post('/declare-api', function (req, res) {
    let id = req.body.clientToUpdate._id
    Client.findByIdAndUpdate(id, { '$set': { sold: req.body.clientToUpdate.sold } }, function (error, client) {
        if (error) return res.status(500).send(error)

        res.send(client)
    })
})
router.post('/newClient-api', function (req, res) {
    Client.create(req.body.NewClient, function (err, data) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})



module.exports = router