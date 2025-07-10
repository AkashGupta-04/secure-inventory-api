const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

router.get('/', itemController.getAll);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
