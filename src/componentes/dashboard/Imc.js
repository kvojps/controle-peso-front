import styles from './assets/Imc.module.css'

function Imc() {
    return (
        <section className={styles.main}>
            <h1>IMC</h1>
            <div className={styles.container_imc}>
                <div>
                    <p>Abaixo do peso</p>
                    <div className={styles.barra_00}></div>
                </div>
                <div>
                    <p>Peso ideal</p>
                    <div className={styles.barra_01}></div>
                </div>
                <div>
                    <p>Acima do peso</p>
                    <div className={styles.barra_02}></div>
                </div>
            </div>
        </section>
    )
}

export default Imc