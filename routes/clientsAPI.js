const router = require('express').Router()
Client = require('../models/clientModel')

router.get('/api/clients', function (req, res) {
    Client.find({}).exec(function (err, data) {
        if (err) {
            console.error(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})
router.post('/api/clients' , function(req , res){
    let id=req.body.clientToUpdate._id
    Client.findByIdAndUpdate(id , {'$set':{name :req.body.clientToUpdate.name , country : req.body.clientToUpdate.country}} ,function(error ,client){
        if(error)return res.status(500).send(error)
        res.send(client)   
    })
})

module.exports = router