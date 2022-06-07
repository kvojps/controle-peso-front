import styles from "./assets/Monitoramento.module.css";
import logo from "../../img/logo-black.png";

function Monitoramento({usuario}) {
  return (
    <section className={styles.main}>
      <h1>Monitoramento</h1>
      <div className={styles.monitoramento}>
        <div className={styles.circulo_1}>
          <p>Peso inicial</p>
          {/* <p className={styles.peso}>{usuario.registrosPeso[0].peso}</p> */}
          {/* <p>{usuario.registrosPeso[0].data}</p> */}
        </div>
        <div className={styles.circulo_2}>
          <p>Peso atual</p>
          {/* <p className={styles.peso}>{usuario.registrosPeso.slice(-1)[0].peso}</p> */}
          {/* <p>{usuario.registrosPeso.slice(-1)[0].data}</p> */}
        </div>
        <div className={styles.circulo_3}>
          <p>Meta de peso</p>
          {/* <p className={styles.peso}>{usuario.pesoDesejado}</p> */}
        </div>
      </div>
      <div className={styles.container_form}>
        <div></div>
        <div className={styles.form_text}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h1>Atualizar peso</h1>
          <p>Qual o seu peso hoje?</p>
        </div>
        <div className={styles.form_input}>
          <input
            className={styles.form_peso}
            type="number"
            name=""
            id="form-peso"
            placeholder="Peso"
          />
          <input
            className={styles.botao_enviar}
            type="button"
            value="Atualizar"
            id="botao-enviar"
          />
        </div>
      </div>
    </section>
  );
}

export default Monitoramento;
