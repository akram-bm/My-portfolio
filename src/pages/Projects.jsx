import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'
import opmobilityLogo from '../assets/images/opmobility-logo.png'
import ensiLogo from '../assets/images/ENSI.png'
import ifmiaLogo from '../assets/images/ifmia.jpg'
import expleoLogo from '../assets/images/expleo-logo-and-tagline.png'

function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang].work

  const getCompanyLogo = (companyName) => {
    if (companyName.includes('OPmobility')) return opmobilityLogo
    if (companyName.includes('ENSI')) return ensiLogo
    if (companyName.includes('IFMIA')) return ifmiaLogo
    if (companyName.includes('Expleo')) return expleoLogo
    return opmobilityLogo
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--projects">
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">{t.projectsLabel}</span>
          <h1 className="page-section__title">{t.projectsTitle}</h1>
          <div className="project-list">
            {t.projects.map((project, i) => (
              <div key={i} className="project-card">
                {project.subProjects ? (
                  <>
                    <div className="project-card__header">
                      <div className="project-card__header-content">
                        <h3 className="project-card__title">{project.company}</h3>
                        <p className="project-card__date">{project.date}</p>
                      </div>
                      <div className="project-card__logo">
                        <img src={getCompanyLogo(project.company)} alt={`${project.company} logo`} />
                      </div>
                    </div>
                    {project.subProjects.map((sub, k) => (
                      <div key={k} className="project-card__sub">
                        <h3 className="project-card__sub-title">{sub.title}</h3>
                        <p className="project-card__description">{sub.description}</p>
                        {sub.highlights && (
                          <ul className="project-card__highlights">
                            {sub.highlights.map((h, j) => (
                              <li key={j} className="project-card__highlight">{h}</li>
                            ))}
                          </ul>
                        )}
                        {sub.results && (
                          <div className="project-card__results">
                            <span className="project-card__results-label">{sub.resultsLabel || t.keyResults}</span>
                            <ul className="project-card__results-list">
                              {sub.results.map((r, j) => (
                                <li key={j} className="project-card__result">{r}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="project-card__tags">
                          {sub.tags.map((tag, j) => (
                            <span key={j} className="project-card__tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="project-card__header">
                      <div className="project-card__header-content">
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__date">{project.date}</p>
                        <p className="project-card__company-name">{project.company}</p>
                      </div>
                      <div className="project-card__logo">
                        <img src={getCompanyLogo(project.company)} alt={`${project.company} logo`} />
                      </div>
                    </div>
                    <p className="project-card__description">{project.description}</p>
                    {project.results && (
                      <div className="project-card__results">
                        <span className="project-card__results-label">{t.keyResults}</span>
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
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="page-section__inner page-section__inner--center">
          <h2 className="page-section__title">{t.ctaTitle}</h2>
          <p className="page-section__text page-section__text--center">{t.ctaText}</p>
          <Link to="/contact" className="btn btn--primary" style={{ marginTop: '32px' }}>
            {t.ctaButton}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btn__arrow">
              <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Projects