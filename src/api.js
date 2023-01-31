const router = require('express').Router();
const users = require('./users');

let userDetails = users;
router.get('/users', function (red, res) {
    res.send(userDetails);
});

router.post('/users', function (red, res) {
    const userName = {
        name
    } = req.body;

    userDetails.push(userName);
    res.send(userName);
});

module.exports = router;