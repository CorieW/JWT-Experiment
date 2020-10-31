const jwt = require("jsonwebtoken")

function getToken(email)
{
    return jwt.sign({ email }, process.env.SECRET, {
		algorithm: "HS256",
		expiresIn: 300,
	})
}

module.exports = getToken