const jwt = require("jsonwebtoken")

function generateToken(email)
{
    return jwt.sign({ email }, process.env.SECRET, {
		algorithm: "HS256",
		expiresIn: 300,
	})
}

module.exports = generateToken