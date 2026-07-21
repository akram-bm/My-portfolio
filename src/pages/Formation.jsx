import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

function Formation() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--formation">
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">{t.educationLabel}</span>
          <h1 className="page-section__title">{t.educationTitle}</h1>
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__date">{t.education1.date}</span>
                <h3 className="timeline__title">{t.education1.title}</h3>
                <p className="timeline__sub">{t.education1.school}</p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__date">{t.education2.date}</span>
                <h3 className="timeline__title">{t.education2.title}</h3>
                <p className="timeline__sub">{t.education2.school}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Formation