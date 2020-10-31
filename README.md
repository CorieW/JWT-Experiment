# JWT-Experiment

Advantages over session ID:
- No database required to store the token.
- Makes scaling much easier.

JWT Notes:
- Used for authorizing a user's access and for authorizing data validity.
- Only safe when communicating over HTTPS, otherwise use encryption on top.
- Store the token in a HttpOnly Cookie.
- Only ever set the expiry time to 5 minutes or less, if an attacker gets their hands on someone's token they can access their account.

Sources:
- https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
Helped me implement JWT in node.

- https://jwt.io/
Provides a tool for visualising the parts of a JWT, such as the header, payload, verify signature, and the final token result.

- https://en.wikipedia.org/wiki/JSON_Web_Token

- https://www.youtube.com/watch?v=7Q17ubqLfaM&ab_channel=WebDevSimplified
Provided insight on how and why JWT is useful and how it's used.

- https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies#:~:text=When%20encoded%2C%20the%20size%20of,the%20session%20on%20each%20request.
Helped me understand the differences between session ID's and JWT's for authorization. Provides some clear advantages and disadvantages for both.

https://medium.com/@itsgosho2/how-to-transfer-http-only-cookies-with-express-back-end-and-the-fetch-api-2035f0ac48d9
