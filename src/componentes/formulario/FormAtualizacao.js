import styles from "./assets/Campos.module.css";
import logoCadastro from "../../img/logo-cadastro.png";

function FormCadastro() {
  return (
    <div className={styles.container_home}>
      <div>
        <img src={logoCadastro} alt="" className={styles.img} />
      </div>
      <form className={styles.formulario}>
        <h1>Atualizar Dados!</h1>
        <p>Dados pessoais</p>
        <div className={styles.max_width}>
          <input
            type="text"
            placeholder="Nome"
            className={styles.input_dados}
          />
        </div>
        <div className={styles.max_width}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input_dados}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Altura(cm)"
            className={styles.input_dados}
          />
          <input
            type="text"
            placeholder="Gênero/sexo"
            className={styles.input_dados}
          />
        </div>
        <p>Metas</p>
        <div className={styles.max_width}>
          <input
            type="text"
            placeholder="Peso inicial/atual"
            className={styles.input_dados}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Peso desejado"
            className={styles.input_dados}
          />
          <input
            type="text"
            placeholder="Data para alcançar"
            className={styles.input_dados}
          />
        </div>
        <div>
          <input
            type="button"
            value="Atualizar"
            id=""
            className={styles.botao_finalizar}
          />
        </div>
      </form>
    </div>
  );
}

export default FormCadastro;
