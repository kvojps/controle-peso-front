import styles from './assets/Comparativo.module.css'

function Comparativo() {
    return (
        <section className={styles.main}>
            <h1>Comparativo</h1>
            <div className={styles.container_comparativo}>
                <div className={styles.bloco_1}>
                    <h1>-0.5kg</h1>
                    <p>última medida</p>
                    <p>(55.0kg)</p>
                </div>
                <div className={styles.bloco_2}>
                    <h1>-0.5kg</h1>
                    <p>última medida</p>
                    <p>(55.0kg)</p>
                </div>
                <div className={styles.bloco_3}>
                    <h1>-0.5kg</h1>
                    <p>última medida</p>
                    <p>(55.0kg)</p>
                </div>
                <div className={styles.bloco_4}>
                    <h1>-0.5kg</h1>
                    <p>última medida</p>
                    <p>(55.0kg)</p>
                </div>
            </div>
        </section>
    )
}

export default Comparativo