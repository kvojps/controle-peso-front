import styles from './assets/AtualizarDados.module.css'
import Campos from '../formulario/Campos'

function AtualizarDados() {
    return (
        <section className={styles.main}>
            <Campos titulo="Atualizar dados!"
                texto_botao="Atualizar"
            />
        </section>
    )
}

export default AtualizarDados