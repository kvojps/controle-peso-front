import Monitoramento from '../dashboard/Monitoramento'
import Evolucao from '../dashboard/Evolucao'
import Imc from '../dashboard/Imc'
import Comparativo from '../dashboard/Comparativo'
import Historico from '../dashboard/Historico'

import styles from './assets/Dashboard.module.css'

function DashBoard() {
    return (
        <div className={styles.main}>
            <Monitoramento/>
            <Evolucao/>
            <Imc/>
            <Comparativo/>
            <Historico/>   
        </div>
    )
}

export default DashBoard