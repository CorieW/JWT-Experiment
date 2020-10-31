const express = require('express');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken')

const connection = require('../config/database')
const messages = require('../utils/messages')

const router = express.Router();

router.post('', (req, res) => // Learn how to seperate some of this code
{
    const { email, password } = req.query

    if (email === undefined || password === undefined) return res.status(400).send(messages.fillFields)

    // Ensuring login is correct
    login(email, password, (err, result) =>
    {
        if (err) return res.status(400).send(messages.errorMessage)
        if(result == false) return res.status(401).send(messages.incorrectDetails)

        // Handling tokens for persistent logins
        res.cookie('token', generateToken(email), { maxAge: 300 * 1000, httpOnly: true })

        return res.status(200).send(messages.loginSuccess)
    })
})

async function login(email, password, done)
{
    connection.query(`SELECT * FROM accounts WHERE email LIKE '${email}'`, (err, rows) =>
    {
        if (err) return done(err, null)

        if (!rows.length) return done(null, false)

        bcrypt.compare(password, rows[0].password, (err, result) =>
        {
            if (err) return done(err, null)
            
            return done(null, result)
        })
    })
}

module.exports = router;