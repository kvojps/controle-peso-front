import styles from './assets/Home.module.css'
import Campos from '../formulario/Campos'

function Home() {
    return (
        <section className={styles.main}>
            <Campos titulo="Insira seus dados!"
                texto_botao="Finalizar"
                texto_link="Já inseriu seus dados? Clique aqui!"
            />
        </section>
    )
}

export default Home