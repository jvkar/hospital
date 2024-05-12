const Medicament = require("../model/Medicaments");

const createMedicament = async (req, res) => {
  const { nom, type, form, IDConsultation } = req.body;
  try {
    const medicament = await Medicament.create({
        nom: nom,
        type: type,
        form: form,
        IDConsultation: IDConsultation,
    });
    if (medicament) {
      return res.status(200).json({ message: "Medicament created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getMedicamentAll = async (req, res) => {
  try {
    const medicament = await Medicament.findAll({});
    if (medicament) {
      return res.status(200).json(medicament);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateMedicament = async (req, res) => {
  const { id } = req.params;
  const { nom, type, form, IDConsultation } = req.body;
  try {
    const medicament = await Medicament.findOne({ where: { id: id } });
    const MedicamentUpdated = await medicament.update({
        nom: nom,
        type: type,
        form: form,
        IDConsultation: IDConsultation,
    });
    if (MedicamentUpdated) {
      return res.status(200).json(MedicamentUpdated);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteMedicament = async (req, res) => {
  const { id } = req.params;

  try {
    const medicament = await Medicament.findOne({ where: { id: id } });
    if (medicament) {
      await medicament.destroy();

      return res
        .status(200)
        .json({ message: "Medicament deleted successfully" });
    } else {
      return res.status(404).json({ message: "Medicament not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMedicament,
  getMedicamentAll,
  updateMedicament,
  deleteMedicament,
};
