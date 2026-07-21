import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const experiences = [
  {
    role: 'Process Engineer — Stage Libre',
    company: 'OPmobility — Tanger, Maroc',
    date: 'Mars 2026 – Présent',
    highlights: [
      'Conception et réalisation d\'une machine d\'optimisation du cycle de refroidissement en injection plastique',
      'Développement d\'une plateforme (ERP) IIoT de supervision d\'usine',
    ],
  },
  {
    role: 'Technicien maintenance du test électrique — Stage Libre',
    company: 'EMDEP — Tanger, Maroc',
    date: 'Juill 2025 – Août 2025',
    highlights: [
      'Optimisation et mise en service des bancs de test (électrification, déclaration de cartes électroniques)',
      'Ajustement des contreparties selon le layout et les besoins clients',
    ],
  },
  {
    role: 'Assistant technique diagnostic automobile — Stage de fin d\'études',
    company: 'Expleo — Tanger, Maroc',
    date: 'Sep 2024 – Déc 2024',
    highlights: [
      'Modélisation du système antiblocage des roues (ABS) sous MATLAB/Simulink',
      'Assistance aux techniciens dans le diagnostic et la résolution des problèmes mécaniques et électroniques',
      'Participation aux mises à jour des calculateurs (ECU) des véhicules',
    ],
  },
  {
    role: 'Technicien Maintenance du test — Stage d\'initiation',
    company: 'Valeo lighting Vision — Tanger, Maroc',
    date: 'Janv 2023 – Avr 2023',
    highlights: [
      'Conception de modèles 3D de « pusher » pour optimiser le processus de production',
      'Maintenance préventive des machines de fabrication de cartes électroniques',
      'Analyse des cartes électroniques NOK et propositions de solutions de rework',
      'Contrôle qualité des bobines de composants en production',
    ],
  },
]

const projects = [
  {
    title: 'Machine d\'optimisation du cycle de refroidissement',
    company: 'OPmobility',
    date: 'Mars 2026 – Présent',
    description: 'Machine dédiée à l\'injection plastique, conçue pour remplacer le thermorégulateur classique. Elle impacte le temps de cycle en réduisant le temps de refroidissement.',
    results: [
      'Réduction du temps de refroidissement de 8 secondes à 50% de puissance',
      'Temps de cycle global réduit de 52s à 48s',
      'Validation réussie lors de l\'audit DEKRA',
    ],
    tags: ['Siemens TIA Portal', 'LAD', 'HMI', 'Industrie 4.0', 'ISO', 'IEC'],
  },
  {
    title: 'Plateforme (ERP) IIoT de supervision d\'usine',
    company: 'OPmobility',
    date: 'Mars 2026 – Présent',
    description: 'Plateforme de suivi des arrêts des lignes d\'assemblage et de digitalisation de la maintenance préventive et corrective des moules.',
    results: [
      'Dashboard de suivi des maintenances préventives avec Deep Learning',
      'Prédiction des maintenances par analyse des données de chaque moule',
      'Automatisation des rappels par emails automatiques',
      'Commande anticipée des pièces de rechange via emails automatiques',
    ],
    tags: ['React', 'Python/Flask', 'MySQL', 'Deep Learning', 'Node-RED', 'OPC UA', 'MQTT'],
  },
  {
    title: 'JobIntech — Plateforme de recherche de bourses',
    company: 'ENSI (JobIntech)',
    date: 'Dec 2025 – Jan 2026',
    description: 'Développement d\'une plateforme web unifiée de recherche de bourses d\'études au Maroc et à l\'international.',
    highlights: ['Chef d\'équipe — planification, supervision, exécution des tâches', 'Coordination avec les parties prenantes'],
    tags: ['Full-Stack', 'Web', 'Gestion de projet'],
  },
  {
    title: 'Maquettes didactiques pour circuits numériques',
    company: 'IFMIA TFZ',
    date: 'Jan 2025 – Mai 2025',
    description: 'Conception et fabrication de cartes électroniques pour des maquettes didactiques destinées aux travaux pratiques.',
    highlights: ['Direction et coordination de l\'équipe', 'Conception 3D de PCB sous Proteus', 'Calcul et optimisation de la consommation énergétique'],
    tags: ['Proteus', 'PCB', 'Électronique numérique', 'CAO'],
  },
  {
    title: 'Graveuse PCB (CNC)',
    company: 'IFMIA TFZ',
    date: 'Jan 2025 – Mai 2025',
    description: 'Réalisation d\'une graveuse de PCB (CNC) — conception 3D et fabrication mécanique.',
    tags: ['CNC', 'PCB', 'Conception 3D', 'Fabrication mécanique'],
  },
]

function Work() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--work">
      {/* Experience Section */}
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">Experience</span>
          <h1 className="page-section__title">Professional Experience</h1>
          <div className="exp-list">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card">
                <div className="exp-card__header">
                  <div>
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <p className="exp-card__company">{exp.company}</p>
                  </div>
                  <span className="exp-card__date">{exp.date}</span>
                </div>
                <ul className="exp-card__highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="exp-card__highlight">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="page-section page-section--alt">
        <div className="page-section__inner">
          <span className="page-section__label">Projects</span>
          <h2 className="page-section__title">Featured Projects</h2>
          <div className="project-list">
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-card__header">
                  <div>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__company">{project.company} — {project.date}</p>
                  </div>
                </div>
                <p className="project-card__description">{project.description}</p>
                {project.results && (
                  <div className="project-card__results">
                    <span className="project-card__results-label">Key Results</span>
                    <ul className="project-card__results-list">
                      {project.results.map((r, j) => (
                        <li key={j} className="project-card__result">{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.highlights && (
                  <ul className="project-card__highlights">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="project-card__highlight">{h}</li>
                    ))}
                  </ul>
                )}
                <div className="project-card__tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="page-section__inner page-section__inner--center">
          <h2 className="page-section__title">Let's work together</h2>
          <p className="page-section__text page-section__text--center">
            I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
          </p>
          <Link to="/contact" className="btn btn--primary" style={{ marginTop: '32px' }}>
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btn__arrow">
              <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Work