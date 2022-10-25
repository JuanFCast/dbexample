import db from "../repository/database";

async function register(name){
    const {err} = db.query("INSERT INTO ANIMAL (nombre_animal) VALUES ($1)", [name])
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

