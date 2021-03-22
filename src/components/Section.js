import styles from '../styles/components/Section.module.css';

export default function Section() {
    return (
        <>
            <section className={styles.aboutMe}>
                <div className={styles.avatar}>
                    <div className={styles.avatarImg}>
                        <img src="https://avatars.githubusercontent.com/u/60123147?s=460&u=40de475fddcfeca4220eba6ec78f0bb6d2c9b2a9&v=4" alt="Foto de perfil" />
                    </div>
                    <h2>
                        Olá, me chamo Guilherme Lima, tenho 25 anos.<br />
                        Atualmente estou cursando Técnico em Desenvolvimento de Sistemas<br />
                        e estou em busca do meu primeiro emprego na área de Desenvolvimento de Software.
                    </h2>
                </div>
                <div className={styles.technology}>
                    <div className={styles.left}>
                        <h4>Tecnologias Front-End:</h4>
                        <p><i id={styles.html5} className="fab fa-html5"></i>HTML</p><br />
                        <p><i id={styles.css3} className="fab fa-css3-alt"></i>CSS</p><br />
                        <p><i id={styles.react} className="fab fa-react"></i>React.JS - Next.JS</p><br />
                    </div>
                    <div className={styles.right}>
                        <h4>Tecnologias Back-End:</h4>
                        <p><i id={styles.node} className="fab fa-node"></i>Node.JS - Express.JS</p>
                    </div>
                </div>
            </section>
            <section className={styles.sectionFormation}>
                <h3>Formação Acadêmica</h3>
                <div className={styles.trainingDescription}>
                    <div className={styles.logo}>
                        <img src="etec.png" alt="Logo da Etec" />
                    </div>
                    <div className={styles.formation}>
                        <span>Técnico em Desenvolvimento de Sistemas</span>
                        <h4>Etec Joaquim Ferreira do Amaral - Jaú</h4>
                        <p>2021 - 2022</p>
                    </div>
                </div>
                <div className={styles.trainingDescription}>
                    <div className={styles.logo}>
                        <img src="etec.png" alt="Logo da Etec" />
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