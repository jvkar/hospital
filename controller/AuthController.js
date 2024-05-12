const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');
//jwt secret
const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET_KEY, {expiresIn: '7d'});
}

//login
const Login = async (req, res) => {
    const {Email, Password} = req.body;
    try{
        if(!Email || !Password){
            return res
                .status(400)
                .json({ message: "Tout les champs doivent etre remplis" });

        }
        const user = await User.findOne({
            where: {
                Email: Email
            }
        });
        //check if user exist
        if(!user){
            return res.status(400).json({ message: "Email non trouvé" });
        }
        //check if password is correct
        const match = await bcrypt.compare(Password, user.Password);

        if(!match){
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }

        //create token
        const token = createToken(user.id);
        var id = user.id;
        var Role = user.Role;
        //return user
        res.status(200).json({id, Role, token});

    }catch(err){
        res.status(400).json({message: err.message});
    }
}   
//signup
const Signup = async (req, res) => {
    const { Email, Password, ResetPassword, Lname, Fname, Phone, Role, Etablissement} = req.body;
    try{
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(Password, salt);

        //validation
        if(!Email || !Password || !Lname || !Fname || !Phone || !Role || !Etablissement ){
            return res
              .status(400)
              .json({ message: "Tous les champs doivent être remplis" });
        }
        //check if email is valid
        if(!validator.isEmail(Email)){
            return res.status(400).json({message: "L'Email n'est pas valide"});
        }
        //check if password match
        if(Password != ResetPassword){
            return res.status(400).json({ message: "Les mots de passe ne correspondent pas" });
        }
        //check if password is strong
        if(!validator.isStrongPassword(Password)){
            return res
              .status(400)
              .json({ message: "Mot de passe pas assez fort" });
        }
        //check if user exist already
        const userexist = await User.findOne({
            where: {
                Email: Email
            }
        });
        if(userexist){
            return res.status(400).json({ message: "Email déjà utilisé" });
        }
        //create new user
        const user = await User.create({
            Email: Email,
            Password: hash,
            Lname: Lname,
            Fname: Fname,
            Phone: Phone,
            Role: Role,
            Etablissement: Etablissement,
        });

        if(!user){
            return res.status(400).json({ message: "Utilisateur non enregistré" });
        }

        //return user
        res.status(200).json({message:"Utilisateur enregistré avec succès"});
        
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = {
    Login,
    Signup,
}