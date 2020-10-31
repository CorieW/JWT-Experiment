const express = require('express');
const bcrypt = require('bcrypt');

const connection = require('../config/database')
const messages = require('../utils/messages')

const router = express.Router();

router.post('', (req, res) => // Learn how to seperate some of this code
{
    const { email, password } = req.query

    if (email === undefined || password === undefined) return res.status(400).send(messages.fillFields)

    const saltRounds = 12

    bcrypt.hash(password, saltRounds, (err, hashedPassword) =>
    {
        if (err) return res.status(400).send(messages.errorMessage)

        connection.query(`INSERT INTO accounts (email, password) VALUES('${email}', '${hashedPassword}')`, async (err, rows) =>
        {
            if (err) return res.status(400).send(messages.errorMessage)
    
            return res.status(200).send(messages.registrationSuccess)
        })
    })
})

module.exports = router;