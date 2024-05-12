const express = require('express');
const {
    createMedicament,
    getMedicamentAll,
    updateMedicament,
    deleteMedicament,
} = require('../controller/medicamentsController');
const router = express.Router();
router.get('/', getMedicamentAll);
router.post('/', createMedicament);
router.patch('/:id', updateMedicament);
router.delete('/:id', deleteMedicament);

module.exports = router;