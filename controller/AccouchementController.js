const Accouchement = require("../model/Accouchement");
const Bebe = require('../model/Bebe')
const createAccouchement = async (req, res) => {
  const {
    identifiant,
    DateAccouchement,
    Heure,
    Accoucheur,
    Aspect,
    Anomailes,
    Placenta,
    Membranes,
    Cardon,
    ScoreApgar,
    Poids,
    Taille,
  } = req.body;
  try {
    const bebe = await Bebe.findOne({where:{identifiant:identifiant}})
    if(!bebe){
      return res.status(500).json({error:"vous ne pouvez pas creer l'accouchement car le bebe n'est pas encore creer"});
    }
    else{
    const accouchement = await Accouchement.create({
      DateAccouchement: DateAccouchement,
      Heure: Heure,
      Accoucheur: Accoucheur,
      Aspect: Aspect,
      Anomailes: Anomailes,
      Placenta: Placenta,
      Membranes: Membranes,
      Cardon: Cardon,
      ScoreApgar: ScoreApgar,
      Poids: Poids,
      Taille: Taille,
    });
    
    if (accouchement) {
      return res.status(200).json({ message: "Accouchement created" });
    }
  }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAccouchementAll = async (req, res) => {
  try {
    const accouchement = await Accouchement.findAll({});
    if (accouchement) {
      return res.status(200).json(accouchement);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateAccouchement = async (req, res) => {
  const { id } = req.params;
  const {
    DateAccouchement,
    Heure,
    Accoucheur,
    Aspect,
    Anomailes,
    Placenta,
    Membranes,
    Cardon,
    ScoreApgar,
    Poids,
    Taille,
  } = req.body;
  try {
    const accouchement = await Accouchement.findOne({ where: { id: id } });
    const accouchementUpdated = await accouchement.update({
        DateAccouchement: DateAccouchement,
        Heure: Heure,
        Accoucheur: Accoucheur,
        Aspect: Aspect,
        Anomailes: Anomailes,
        Placenta: Placenta,
        Membranes: Membranes,
        Cardon: Cardon,
        ScoreApgar: ScoreApgar,
        Poids: Poids,
        Taille: Taille,
    });
    if (accouchementUpdated) {
      return res.status(200).json(accouchementUpdated);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteAccouchement = async (req, res) => {
  const { id } = req.params;

  try {
    const accouchement = await Accouchement.findOne({ where: { id: id } });
    if (accouchement) {
      await accouchement.destroy();

      return res.status(200).json({ message: "accouchement deleted successfully" });
    } else {
      return res.status(404).json({ message: "accouchement not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAccouchement,
  getAccouchementAll,
  updateAccouchement,
  deleteAccouchement,
};
