import db from "../repository/database";

async function register(name, username, email, password_user, role){
    const {err} = db.query("INSERT INTO USERS (name, username, email, password_user, role) VALUES ($1,$2,$3,$4,$5)", [name, username, email, password_user, role])
    console.log(err)
}

async function consultar(){
    const {err} = db.query("SELECT * FROM animal")
    console.log(err)
}

async function borrar(name){
    const {err} = db.query("DELETE FROM animal WHERE nombre_animal=$1",[name])
    console.log(err)
}

export {register, consultar, borrar}

