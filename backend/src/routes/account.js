const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/connect', accountController.connectAccount);
router.get('/', accountController.listAccounts);
router.delete('/:id', accountController.disconnectAccount);

module.exports = router; 