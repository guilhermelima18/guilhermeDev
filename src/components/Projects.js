import styles from '../styles/components/Projects.module.css';

export default function Projects() {
    return (
        <div className={styles.content}>
            <h2>Projetos no Github</h2>
            <section className={styles.projects}>
                <main className={styles.main}>
                    <div className={styles.card}>
                        <p>Ecoleta</p>
                        <img id={styles.ecoleta} src="ecoleta.JPG" alt="Projeto Ecoleta" />
                        <a target="_blank" href="https://github.com/guilhermelima18/Ecoleta">Ver projeto</a>
                    </div>
                    <div className={styles.card}>
                        <p>Finance Control</p>
                        <img src="finance.JPG" alt="Projeto Finance Control" />
                        <a target="_blank" href="https://github.com/guilhermelima18/Finance-Control">Ver projeto</a>
                    </div>
                    <div className={styles.card}>
                        <p>Gym Manager</p>
                        <img src="gym.JPG" alt="Projeto Gym Manager" />
                        <a target="_blank" href="https://github.com/guilhermelima18/GymManager">Ver projeto</a>
                    </div>
                    <div className={styles.card}>
                        <p>Orbit App</p>
                        <img src="orbitapp.jpg" alt="Projeto Orbit App" />
                        <a target="_blank" href="https://github.com/guilhermelima18/orbitApp">Ver projeto</a>
                    </div>
                </main>
            </section>
            <a id={styles.github} target="_blank" href="https://github.com/guilhermelima18">Ver todos os projetos</a>
        </div>
    )
}