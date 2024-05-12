const express = require('express');
const {
    createAccouchement,
    getAccouchementAll,
    updateAccouchement,
    deleteAccouchement,
} = require('../controller/AccouchementController');
const router = express.Router();
router.get('/', getAccouchementAll);
router.post('/', createAccouchement);
router.patch('/:id', updateAccouchement);
router.delete('/:id', deleteAccouchement);

module.exports = router;