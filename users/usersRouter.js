const express = require('express');
const router = express.Router();
const restricted = require('../auth/restricted_middleware.js');
const Users = require('./users_model.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedInUser: req.username, users });
    })
    .catch(err => res.send(err));
});

module.exports = router;
