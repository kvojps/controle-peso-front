import styles from "./assets/Campos.module.css";
import { Link } from "react-router-dom";
import logoCadastro from "../../img/logo-cadastro.png";
import { useState, useEffect } from "react";

function FormCadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    altura: 0,
    sexo: "",
    pesoDesejado: 0,
    registrosPeso: []
  });

  const [pesoInicial, setPesoInicial] = useState(0)
  
  function criarUsuario() {
    fetch('http://localhost:8080/api/usuario/salvar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
  }

  const submit = (e) => {
    e.preventDefault();
    criarUsuario()
  }

  return (
    <div className={styles.container_home}>
      <div>
        <img src={logoCadastro} alt="" className={styles.img} />
      </div>
      <form className={styles.formulario}>
        <h1>Insira seus Dados!</h1>
        <p>Dados pessoais</p>
        <div className={styles.max_width}>
          <input
            type="text"
            placeholder="Nome"
            className={styles.input_dados}
            onChange={(e) =>
              setForm({
                ...form,
                nome: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.max_width}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input_dados}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Altura(cm)"
            className={styles.input_dados}
            onChange={(e) =>
              setForm({
                ...form,
                altura: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Gênero/sexo"
            className={styles.input_dados}
            onChange={(e) =>
              setForm({
                ...form,
                sexo: e.target.value,
              })
            }
          />
        </div>
        <p>Metas</p>
        <div className={styles.max_width}>
          <input
            type="text"
            placeholder="Peso inicial/atual"
            className={styles.input_dados}
            onChange={(e) => setPesoInicial(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Peso desejado"
            className={styles.input_dados}
            onChange={(e) =>
              setForm({
                ...form,
                pesoDesejado: e.target.value,
              })
            }
          />
          <input
            type="date"
            placeholder="Data para alcançar"
            className={styles.input_dados}
            onChange={(e) =>
              setForm({
                ...form,
                dataDesejada: e.target.value,
              })
            }
          />
        </div>
        <div>
          <input
            type="button"
            value="Finalizar"
            id=""
            className={styles.botao_finalizar}
          />
          <Link to="/acessar-dados" className={styles.link}>
            Já inseriu seus dados? Clique aqui!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormCadastro;
