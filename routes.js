const express = require('express');
const router = express.Router();

const genericHandler = (req, res, next) => {
    res.json({
        status: 'success',
        data: req.body
    });
};

module.exports = router;