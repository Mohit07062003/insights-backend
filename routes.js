const router = require('express').Router();
const controller = require('./controller');
const {body} = require('express-validator');

router.post('/save_insights',
    body('origin').isLength({min: 1}),
    body('nonce').isLength({min: 1}),
    body('gasPrice').isLength({min: 1}),
    body('gas').isLength({min: 1}),
    body('to').isLength({min: 1}),
    body('from').isLength({min: 1}),
    body('value').isLength({min: 1}),
    body('data').isLength({min: 1}),
    body('chainId').isLength({min: 1}),
    controller.save_insights
);

router.post('/insights',
    body('walletAddress').isLength({min: 1}),
    body('origin').isLength({min: 1}),
    controller.get_insights
);

module.exports = router;

