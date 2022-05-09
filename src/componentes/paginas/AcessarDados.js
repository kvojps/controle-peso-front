import styles from "../formulario/assets/Campos.module.css";
import stylesAcessarDados from "./assets/AcessarDados.module.css";
import { Link } from "react-router-dom";
import logoCadastro from "../../img/logo-cadastro.png";

function AcessarDados() {
  return (
    <section className={stylesAcessarDados.main}>
      <div className={styles.container_home}>
        <div>
          <img src={logoCadastro} alt="" className={styles.img} />
        </div>
        <div className={styles.formulario}>
          <h1>Acessar meus dados</h1>
          <p>Qual o seu e-mail</p>
          <div className={styles.max_width}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input_dados}
            />
          </div>
          <div>
            <input
              type="button"
              value="Acessar"
              id=""
              className={styles.botao_finalizar}
            />
            <Link to="/" className={styles.link}>
              Não inseriu seus dados? Clique aqui!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcessarDados;
