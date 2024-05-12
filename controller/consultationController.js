const Consultation = require("../model/consultation");

const createConsultation = async (req, res) => {
  const { IDMedeccin, date, observation, IDbebe } = req.body;
  try {
    const consultation = await Consultation.create({
      IDMedeccin: IDMedeccin,
      date: date,
      observation: observation,
      IDbebe: IDbebe,
    });
    if (consultation) {
      return res.status(200).json({ message: "Consultation created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getConsultationAll = async (req, res) => {
  try {
    const consultation = await Consultation.findAll({});
    if (consultation) {
      return res.status(200).json(consultation);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateConsultation = async (req, res) => {
  const { id } = req.params;
  const { IDMedeccin, date, observation, IDbebe } = req.body;
  try {
    const consultation = await Consultation.findOne({ where: { id: id } });
    const ConsultationUpdated = await consultation.update({
        IDMedeccin: IDMedeccin,
        date: date,
        observation: observation,
        IDbebe: IDbebe,
    });
    if (Consultation) {
      return res.status(200).json(ConsultationUpdated);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteConsultation = async (req, res) => {
  const { id } = req.params;

  try {
    const consultation = await Consultation.findOne({ where: { id: id } });
    if (consultation) {
      await consultation.destroy();

      return res
        .status(200)
        .json({ message: "Consultation deleted successfully" });
    } else {
      return res.status(404).json({ message: "Consultation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConsultation,
  getConsultationAll,
  updateConsultation,
  deleteConsultation,
};
