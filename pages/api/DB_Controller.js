import {register,consultar,borrar} from "/models/reg_animal";

async function users (req, res){
   console.log(req.body.name, req.body.username, req.body.email, req.body.password_user, req.body.role)
   register(req.body.name, req.body.username, req.body.email, req.body.password_user, req.body.role)
   //borrar(req.body.name)
   res.redirect("http://localhost:3000")
}

export default users;