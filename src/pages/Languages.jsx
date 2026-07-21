import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

function LanguagesPage() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--languages">
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">{t.langLabel}</span>
          <h1 className="page-section__title">{t.langTitle}</h1>
          <div className="lang-list">
            {t.languages.map((langItem, i) => (
              <div key={i} className="lang-item">
                <span className="lang-item__name">{langItem.name}</span>
                <span className="lang-item__level">{langItem.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LanguagesPage