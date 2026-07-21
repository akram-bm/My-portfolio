import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

function Skills() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--skills">
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">{t.skillsLabel}</span>
          <h1 className="page-section__title">{t.skillsTitle}</h1>
          <div className="skills-grid">
            {t.skills.map((group, i) => (
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
    </div>
  )
}

export default Skills