import { useEffect } from 'react'

const skills = [
  { category: 'Automatisation & IIoT', items: ['Siemens TIA Portal', 'Node-RED (OPC UA, MQTT)', 'MATLAB/Simulink', 'Arduino'] },
  { category: 'Développement', items: ['Python (Flask)', 'React / HTML/CSS/JavaScript', 'C, C++, MicroC'] },
  { category: 'Bases de Données', items: ['MySQL'] },
  { category: 'Ingénierie Industrielle', items: ['Lean Manufacturing', 'Kaizen, 5S, Poka-Yoke', 'MTBF, MTTR', '5Why, Ishikawa, Pareto'] },
  { category: 'Gestion de Projet', items: ['Agile Scrum', 'Jira, Gantt, UML'] },
  { category: 'Conception & CAO/DAO', items: ['SolidWorks', 'Proteus', 'QElectroTech', 'FluidSIM', 'FlatCAM', 'UGS'] },
  { category: 'Compétences Techniques', items: ['Instrumentation Industrielle', 'Capteurs & Actionneurs', 'Électricité Industrielle', 'Électronique', 'Électrotechnique', 'Injection Plastique'] },
]

const certifications = [
  { title: 'Professional Certificate of Agile and Scrum Business Analyst', issuer: 'MTF Institute — Udemy', date: 'Dec 2025' },
  { title: 'PLCnext — Next Generation PLC', issuer: 'Code and Compile', date: 'Dec 2025' },
  { title: 'Mechatronics and Industrial Internet of Things', issuer: 'Code and Compile', date: 'Aug 2025' },
  { title: 'Les fondements de l\'intelligence artificielle', issuer: 'LinkedIn', date: 'Jun 2025' },
]

const languages = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'B2' },
  { name: 'Anglais', level: 'B2' },
]

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--about">
      {/* Profile Section */}
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">About</span>
          <h1 className="page-section__title">Professional Profile</h1>
          <p className="page-section__text">
            Technicien Spécialisé en Systèmes Industriels Automatisés, spécialisé dans l'Industrie 4.0, l'IIoT et le développement Full-Stack. Je combine des compétences en automatisation industrielle et en développement logiciel afin de concevoir des solutions de digitalisation et d'optimisation des processus de production.
          </p>
          <p className="page-section__text">
            Compétences en conception et intégration de solutions basées sur Siemens TIA Portal, Python (Flask), React, Node-RED, OPC UA, MQTT, MySQL et les architectures IIoT. Mon objectif est de contribuer à la transformation numérique des usines en développant des solutions innovantes, fiables et créatrices de valeur pour l'industrie.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="page-section page-section--alt">
        <div className="page-section__inner">
          <span className="page-section__label">Education</span>
          <h2 className="page-section__title">Formation</h2>
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__date">Sep 2025 – Jan 2026</span>
                <h3 className="timeline__title">Formation JobIntech en Développement web et mobile (Full-Stack)</h3>
                <p className="timeline__sub">École des Nouvelles Sciences et Ingénierie (ENSI)</p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__date">2023 – 2025</span>
                <h3 className="timeline__title">Technicien Spécialisé en Systèmes Industriels Automatisés</h3>
                <p className="timeline__sub">Institut de Formation aux Métiers de l'Industrie Automobile (IFMIA TFZ)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">Compétences</span>
          <h2 className="page-section__title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <div key={i} className="skill-card">
                <h3 className="skill-card__title">{group.category}</h3>
                <ul className="skill-card__list">
                  {group.items.map((item, j) => (
                    <li key={j} className="skill-card__item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="page-section page-section--alt">
        <div className="page-section__inner">
          <span className="page-section__label">Certifications</span>
          <h2 className="page-section__title">Certifications</h2>
          <div className="cert-list">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l-2 5 2-1 2 1-2-5z" />
                    <path d="M12 2v13" />
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9" />
                  </svg>
                </div>
                <div className="cert-item__content">
                  <h3 className="cert-item__title">{cert.title}</h3>
                  <p className="cert-item__issuer">{cert.issuer} — {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">Languages</span>
          <h2 className="page-section__title">Langues</h2>
          <div className="lang-list">
            {languages.map((lang, i) => (
              <div key={i} className="lang-item">
                <span className="lang-item__name">{lang.name}</span>
                <span className="lang-item__level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About