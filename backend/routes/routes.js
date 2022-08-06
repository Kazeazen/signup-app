const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/sign-up', async (req, res) => {

    const saltedPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltedPassword)

    const signedUpUser = new signUpTemplateCopy({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: securePassword
    })
    signedUpUser.save()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router