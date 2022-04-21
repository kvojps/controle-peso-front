import styles from './assets/Home.module.css'
import {Link} from 'react-router-dom'
import logoCadastro from '../../img/logo-cadastro.png'

function Home() {
    return (
        <section className={styles.main}>
            <div className={styles.container_home}>
                <div>
                    <img src={logoCadastro} alt="" className={styles.img}/>
                </div>
                <div className={styles.formulario}>
                    <h1>Insira seus dados!</h1>
                    <p>Dados pessoais</p>
                    <div>
                        <input type="text" placeholder="Nome" className={styles.input_dados}/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className={styles.input_dados}/>
                    </div>
                    <div>
                        <input type="number" placeholder="Altura(cm)" className={styles.input_dados}/>
                        <input type="text" placeholder="Gênero/sexo" className={styles.input_dados}/>
                    </div>
                    <p>Metas</p>
                    <div>
                        <input type="text" placeholder="Peso inicial/atual" className={styles.input_dados}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Peso desejado" className={styles.input_dados}/>
                        <input type="text" placeholder="Data para alcançar" className={styles.input_dados}/>
                    </div>
                    <div>
                        <input type="button" value="Finalizar" id="" className={styles.botao_finalizar}/>
                        <Link to="/atualizar-dados" className={styles.link}>
                            Já inseriu seus dados? Clique aqui!
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home