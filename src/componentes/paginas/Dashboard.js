import Monitoramento from '../dashboard/Monitoramento'
import styles from './assets/Dashboard.module.css'

function DashBoard() {
    return (
        <div className={styles.main}>
            <Monitoramento/>
        </div>
    )
}

export default DashBoard