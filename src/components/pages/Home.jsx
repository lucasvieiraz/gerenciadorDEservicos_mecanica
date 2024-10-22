import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton';

function Home(){
  return (
  <section className={styles.home_container}>
    <h1>Oficina Multimarcas do Evaldo </h1>
    <LinkButton to="/newproject" text="Criar Serviço" />
    <img src="https://static.vecteezy.com/system/resources/previews/036/144/629/original/repair-icon-design-mechanical-system-setting-sign-and-symbol-vector.jpg" alt="descrição da imagem" width="largura" height="altura"/>

  </section>
    )
}

export default Home;