import styles from "./assets/AtualizarDados.module.css";
import Form from "../formulario/FormAtualizacao";

function AtualizarDados() {
  return (
    <section className={styles.main}>
      <Form titulo="Atualizar dados!" texto_botao="Atualizar" />
    </section>
  );
}

export default AtualizarDados;
