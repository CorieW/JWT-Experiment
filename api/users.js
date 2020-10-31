const jwt = require("jsonwebtoken")
const express = require('express');

const connection = require('../config/database')
const messages = require('../utils/messages')
const generateToken = require('../utils/generateToken')

const router = express.Router();

router.post('', (req, res) =>
{
    let token
    try {
        token = req.cookies.token
    }
    catch (e) {
        return res.status(400).send(messages.errorMessage)
    }

	if (!token) {
		return res.status(401).send(messages.notAuthorized)
	}

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        // if this error is thrown it's because the JWT is unauthorized
        if (err instanceof jwt.JsonWebTokenError) return res.status(401).send(messages.notAuthorized)
        else if (err != null) return res.status(400).send(messages.errorMessage)    

        connection.query(`SELECT * FROM accounts`, (err, rows) =>
        {
            if (err) return res.status(400).send(messages.errorMessage)
            
            return res.status(200).send(rows)
        })

        const refreshToken = generateToken(decoded.email)
        res.cookie('token', refreshToken, { maxAge: 300 * 1000, httpOnly: true })
    });
       
})

module.exports = router;