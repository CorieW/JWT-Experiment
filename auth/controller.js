const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var User = require('../user/User');