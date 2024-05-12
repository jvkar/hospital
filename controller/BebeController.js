const Bebe = require('../model/Bebe')

const createBebe = async(req,res)=>{
    const {identifiant,nom,prenom,age,sexe}= req.body
    try{
    const bebe = await Bebe.create({identifiant:identifiant,nom:nom,prenom:prenom,age:age,sexe:sexe})
    if(bebe){
    return res.status(200).json({message:"bebe created"});
    }
    }catch(error){
        res.status(500).json({error:error.message})
    }
    }
const getBebeAll = async(req,res)=>{
    
    try{
    const bebe = await Bebe.findAll({})
    if(bebe){
    return res.status(200).json(bebe);
    }
    }catch(error){
        res.status(500).json({error:error.message})
    }
    }
const updateBebe = async(req,res)=>{
    const {id} = req.params
    const {identifiant,nom,prenom,age,sexe}= req.body
    try{
        const bebe = await Bebe.findOne( {where:{id:id}})
        const bebeUpdated = await bebe.update({identifiant:identifiant,nom:nom,prenom:prenom,age:age,sexe:sexe})
    if(bebe){
    return res.status(200).json(bebeUpdated);
    }
    }catch(error){
        res.status(500).json({error:error.message})
    }
    }
const deleteBebe = async(req,res)=>{
    const {id} = req.params

    try{
    const bebe = await Bebe.findOne( {where:{id:id}})
    if (bebe) {

        await bebe.destroy();


        return res.status(200).json({ message: 'Bebe deleted successfully' });
    } else {

        return res.status(404).json({ message: 'Bebe not found' });
    }
    }catch(error){
        res.status(500).json({error:error.message})
    }
    }

module.exports = {
    createBebe,
    getBebeAll,
    updateBebe,
    deleteBebe
  }