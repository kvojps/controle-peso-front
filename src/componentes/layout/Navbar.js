import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './assets/Navbar.module.css'

import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/' className={styles.slogan}>
                    <p>Controle seu peso</p>
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/dashboard">DashBoard</Link></li>
                    <li className={styles.item}><Link to="/atualizar-dados">Atualizar Dados</Link></li>
                    <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar