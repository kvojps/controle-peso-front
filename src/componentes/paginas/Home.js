import styles from "./assets/Home.module.css";
import Form from "../formulario/FormCadastro";

function Home() {
  return (
    <section className={styles.main}>
      <Form />
    </section>
  );
}

export default Home;
