const express = require('express');
const router = express.Router();
const egpController = require('../controllers/egpController');
/* GET users listing. */
router.get('/', egpController.showall)
router.get('/:id', egpController.showone)
router.delete('/:id', egpController.destroy)

module.exports = router;
