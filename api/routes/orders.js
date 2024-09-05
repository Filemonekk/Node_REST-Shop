const express = require('express');
const router = express.Router();





router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders were fetched'
    });
});

router.get('/:orderesId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderesId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;
