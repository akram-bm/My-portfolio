import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

function Certifications() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--certifications">
      <section className="page-section">
        <div className="page-section__inner">
          <span className="page-section__label">{t.certLabel}</span>
          <h1 className="page-section__title">{t.certTitle}</h1>
          <div className="cert-list">
            {t.certifications.map((cert, i) => (
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
                   {cert.image && (
                     <div className="cert-item__image">
                       {cert.url ? (
                         <a href={cert.url} target="_blank" rel="noopener noreferrer">
                           <img src={cert.image} alt={cert.title} />
                         </a>
                       ) : (
                         <img src={cert.image} alt={cert.title} />
                       )}
                     </div>
                   )}
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications