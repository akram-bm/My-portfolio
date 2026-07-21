import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'
import opmobilityLogo from '../assets/images/opmobility-logo.png'
import ensiLogo from '../assets/images/ENSI.png'
import ifmiaLogo from '../assets/images/ifmia.jpg'
import expleoLogo from '../assets/images/expleo-logo-and-tagline.png'
import emdepLogo from '../assets/images/images.png'
import valeoLogo from '../assets/images/valeo-logo-rvb-1.jpg'

function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang].work

  const getCompanyLogo = (companyName) => {
    if (companyName.includes('OPmobility')) return opmobilityLogo
    if (companyName.includes('ENSI')) return ensiLogo
    if (companyName.includes('IFMIA')) return ifmiaLogo
    if (companyName.includes('Expleo')) return expleoLogo
    if (companyName.includes('EMDEP')) return emdepLogo
    if (companyName.includes('Valeo')) return valeoLogo
    return opmobilityLogo
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--experience">
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">{t.label}</span>
          <h1 className="page-section__title">{t.title}</h1>
          <div className="exp-list">
            {t.experiences.map((exp, i) => (
              <div key={i} className="exp-card">
                <div className="exp-card__header">
                  <div className="exp-card__logo">
                    <img src={getCompanyLogo(exp.company)} alt={`${exp.company} logo`} />
                  </div>
                  <div className="exp-card__header-content">
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <p className="exp-card__company">{exp.company}</p>
                    <span className="exp-card__date">{exp.date}</span>
                  </div>
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
    </div>
  )
}

export default Experience