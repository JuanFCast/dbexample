import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <form action="http://localhost:3000/api/DB_Controller" method="POST">
      <input type="text" placeholder='Nombre del animal' name="name"/>
      <button type = "submit">Enviar</button>
    </form>
  )
}
