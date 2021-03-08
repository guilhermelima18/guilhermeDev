import styles from '../../styles/components/Section.module.css';

export default function Section() {
    return (
        <>
            <section className={styles.aboutMe}>
                <h2>
                    Olá, me chamo Guilherme Lima, tenho 25 anos.<br />
                Atualmente estou cursando Técnico em Desenvolvimento de Sistemas<br />
                e estou em busca do meu primeiro emprego na área de Desenvolvimento Web.
            </h2>
                <div className={styles.technology}>
                    <h5>
                        Tecnologias Front-End:<br /><br />
                        <p><i id={styles.html5} className="fab fa-html5"></i>HTML</p><br />
                        <p><i id={styles.css3} className="fab fa-css3-alt"></i>CSS</p><br />
                        <p><i id={styles.react} className="fab fa-react"></i>React.JS - Next.JS</p><br />
                    </h5>
                    <h5>
                        Tecnologias Back-End:<br /><br />
                        <p><i id={styles.node} className="fab fa-node"></i>Node.JS - Express.JS</p>
                    </h5>
                </div>
            </section>
            <section className={styles.sectionFormation}>
                <h3>Formação Acadêmica</h3>
                <div className={styles.trainingDescription}>
                    <div className={styles.logo}>
                        <img src="assets/etec.png" alt="Logo da Etec" />
                    </div>
                    <div className={styles.formation}>
                        <span>Técnico em Desenvolvimento de Sistemas</span>
                        <h4>Etec Joaquim Ferreira do Amaral - Jaú</h4>
                        <p>2021 - 2022</p>
                    </div>
                </div>
                <div className={styles.trainingDescription}>
                    <div className={styles.logo}>
                        <img src="assets/etec.png" alt="Logo da Etec" />
                    </div>
                    <div className={styles.formation}>
                        <span>Técnico em Informática</span>
                        <h4>Etec Joaquim Ferreira do Amaral - Jaú</h4>
                        <p>2015 - 2016</p>
                    </div>
                </div>
            </section>
        </>
    )
}