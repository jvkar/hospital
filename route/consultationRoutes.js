const express = require('express');
const {
    createConsultation,
    getConsultationAll,
    updateConsultation,
    deleteConsultation,
} = require('../controller/consultationController');
const router = express.Router();
router.get('/', getConsultationAll);
router.post('/', createConsultation);
router.patch('/:id', updateConsultation);
router.delete('/:id', deleteConsultation);

module.exports = router;