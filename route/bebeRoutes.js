const express = require('express');
const {
    createBebe,
    getBebeAll,
    updateBebe,
    deleteBebe
} = require('../controller/BebeController');
const router = express.Router();
router.get('/', getBebeAll);
router.post('/', createBebe);
router.patch('/:id', updateBebe);
router.delete('/:id', deleteBebe);

module.exports = router;