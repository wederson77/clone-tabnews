import Head from "next/head";
import styles from "./styles/Curriculo.module.css";

export default function Curriculo() {
  return (
    <>
      <Head>
        <title>Currículo | Wenderson Ricardo Anjos Pina</title>

        <meta
          name="description"
          content="Currículo profissional de Wenderson Ricardo Anjos Pina."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.page}>
        <div className={styles.background}></div>

        <section className={styles.container}>
          <header className={styles.hero}>
            <div>
              <h1>Wenderson Ricardo Anjos Pina</h1>

              <p className={styles.subtitle}>
                Desenvolvedor JavaScript • React • Node.js
              </p>
            </div>
          </header>

          <section className={styles.card}>
            <h2>Contato</h2>

            <div className={styles.contactGrid}>
              <a
                href="mailto:wendersonpina997@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                📧
                <span>wendersonpina997@gmail.com</span>
              </a>

              <a href="tel:+5577991065655">
                📱
                <span>(77) 99106-5655</span>
              </a>

              <a
                href="https://github.com/wederson77"
                target="_blank"
                rel="noreferrer"
              >
                💻
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/wenderson-pina-5a77a2401/"
                target="_blank"
                rel="noreferrer"
              >
                🔗
                <span>LinkedIn</span>
              </a>

              <div>
                📍
                <span>Ibipitanga - BA</span>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <h2>Resumo Profissional</h2>

            <p>
              Busco minha primeira oportunidade na área de desenvolvimento de
              software como Desenvolvedor Júnior, Suporte Técnico com foco em
              programação ou projetos freelance.
            </p>

            <p>
              Tenho formação prática por meio de cursos livres, incluindo o{" "}
              <strong>curso.dev</strong>, além de estudos contínuos em
              JavaScript e desenvolvimento web.
            </p>

            <p>
              Gosto de entender como as tecnologias funcionam na prática e
              desenvolver soluções para problemas do dia a dia.
            </p>

            <p>
              Atualmente trabalho em um centro automotivo, onde desenvolvi
              disciplina, responsabilidade, comprometimento com prazos e
              capacidade de aprender novas habilidades rapidamente.
            </p>

            <p>
              Tenho interesse em evoluir profissionalmente em ambientes onde
              possa aprender com desenvolvedores experientes e contribuir com
              dedicação, curiosidade e aprendizado constante.
            </p>
          </section>

          <section className={styles.card}>
            <h2>Competências Técnicas</h2>

            <div className={styles.skills}>
              <span>JavaScript</span>

              <span>Node.js</span>

              <span>React</span>

              <span>Docker</span>

              <span>Docker Compose</span>

              <span>Linux</span>

              <span>Git</span>

              <span>GitHub</span>

              <span>APIs REST</span>

              <span>Banco de Dados SQL</span>

              <span>Lógica de Programação</span>

              <span>Backend</span>

              <span>Escalabilidade</span>

              <span>Arquitetura Limpa</span>
            </div>
          </section>

          <section className={styles.card}>
            <h2>Experiência Profissional</h2>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <h3>Iniciativas Autorais, Freelancer & Trabalhos Hands-on</h3>

                <p>
                  Atuação em pequenos freelancers e projetos pessoais,
                  desenvolvendo soluções para automatizar tarefas, praticar
                  programação e ampliar continuamente meus conhecimentos
                  técnicos.
                </p>

                <ul>
                  <li>Responsabilidade com prazos.</li>

                  <li>Organização e disciplina.</li>

                  <li>Curiosidade ativa.</li>

                  <li>Prática deliberada.</li>

                  <li>Resolução prática de problemas.</li>

                  <li>Gestão do tempo.</li>

                  <li>Aprendizado contínuo.</li>
                </ul>
              </div>

              <div className={styles.timelineItem}>
                <h3>Centro Automotivo</h3>

                <p>
                  Atualmente atuo em um centro automotivo, experiência que
                  fortaleceu minha disciplina, responsabilidade, comprometimento
                  com prazos, trabalho em equipe e facilidade para aprender
                  novas habilidades rapidamente.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <h2>Formação</h2>

            <div className={styles.education}>
              <h3>Ensino Superior Incompleto</h3>

              <p>Formação superior iniciada, atualmente interrompida.</p>
            </div>
          </section>

          <section className={styles.card}>
            <h2>Cursos</h2>

            <ul className={styles.courseList}>
              <li>curso.dev — Filipe Deschamps</li>

              <li>Cursos livres de Programação e Desenvolvimento Web</li>

              <li>Estudos contínuos em JavaScript</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2>Objetivo</h2>

            <p>
              Busco oportunidades remotas ou presenciais para iniciar minha
              carreira em tecnologia, atuando como Desenvolvedor Júnior, Suporte
              Técnico com foco em programação ou em funções relacionadas ao
              desenvolvimento de software.
            </p>

            <p>
              Tenho facilidade para aprender, gosto de resolver problemas e
              estou em constante evolução técnica, buscando contribuir enquanto
              cresço junto à equipe.
            </p>
          </section>

          <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} • Wenderson Ricardo Anjos Pina</p>
          </footer>
        </section>
      </main>
    </>
  );
}
