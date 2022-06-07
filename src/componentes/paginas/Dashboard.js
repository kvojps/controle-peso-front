import Monitoramento from "../dashboard/Monitoramento";
import Evolucao from "../dashboard/Evolucao";
import Imc from "../dashboard/Imc";
import Comparativo from "../dashboard/Comparativo";
import Historico from "../dashboard/Historico";
import {useState, useEffect} from "react"

import styles from "./assets/Dashboard.module.css";


function DashBoard() {
  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    fetch('http://localhost:8080/api/usuarios', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.filter(usuarioEspecifico => usuarioEspecifico.email == "jose@gmail.com").map(user => setUsuario(user))
    })
  }, [])
  
  return (
    <div className={styles.main}>
      <Monitoramento usuario={usuario}/>
      <Evolucao />
      <Imc />
      <Comparativo />
      <Historico />
    </div>
  );
}

export default DashBoard;
