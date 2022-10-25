import {register,consultar,borrar} from "/models/reg_animal";

async function animals (req, res){
   console.log(req.body.name)
   //register(req.body.name)
   borrar(req.body.name)
   res.redirect("http://localhost:3000")
}

export default animals;