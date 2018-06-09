const express = require('express');
const router = express.Router();
const connection = require('../resource/connection');

router.get('/', function(req, res, next) {
    res.send({ message: "default path" });
    // connection.query("SELECT fullname, attended, rating FROM participants", function(err, result, fields) {
    //     if (err) throw err;
    //     res.send(result);
    // });
});

module.exports = router;