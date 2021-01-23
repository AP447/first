const express = require('express');
const router = express.Router();

const genericHandler = (req, res, next) => {
    res.json({
        status: 'success',
        data: req.body
    });
};

router.post('/people', genericHandler);

module.exports = router;