import Head from "next/head"
import gal from "../styles/gala.css"

export default function Home() {
  const [materias] = useState({
    materias: ["Organizaciones", "Algebra y funciones"]
  })
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>New Group</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      </Head>


      <Botton materia={materias.materias}></Botton>





      <Transfer></Transfer>




    </div>

  )
}