import Contact from "../models/ContactSchema.js"

const contactController = async(req,res)=>{
    const {name, email, message} = req.body;
    try{
       const contact=await Contact.create({name, email, message});
       res.status(200).json(contact);
       }catch(err){
        console.log(err);
        res.status(500).json ({err:"Internal server error"})
       }
  
    }
export default contactController;