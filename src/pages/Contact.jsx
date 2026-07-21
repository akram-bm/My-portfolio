import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page--contact">
      <section className="page-section">
        <div className="page-section__inner page-section__inner--center">
          <span className="page-section__label">{t.label}</span>
          <h1 className="page-section__title">{t.title}</h1>
          <p className="page-section__text page-section__text--center" style={{ maxWidth: '520px' }}>
            {t.description}
          </p>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="page-section__inner page-section__inner--narrow">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <h3 className="contact-card__title">{t.email}</h3>
              <a href="mailto:Akrambm05@gmail.com" className="contact-card__value">{t.emailValue}</a>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="contact-card__title">{t.location}</h3>
              <p className="contact-card__value">{t.locationValue}</p>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="contact-card__title">{t.phone}</h3>
              <a href="tel:+212722762121" className="contact-card__value">{t.phoneValue}</a>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="contact-card__title">{t.linkedin}</h3>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card__value">{t.linkedinValue}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner page-section__inner--narrow">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="name">{t.formName}</label>
                <input className="contact-form__input" type="text" id="name" placeholder={t.formNamePlaceholder} />
              </div>
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="email">{t.formEmail}</label>
                <input className="contact-form__input" type="email" id="email" placeholder={t.formEmailPlaceholder} />
              </div>
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="subject">{t.formSubject}</label>
              <input className="contact-form__input" type="text" id="subject" placeholder={t.formSubjectPlaceholder} />
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="message">{t.formMessage}</label>
              <textarea className="contact-form__textarea" id="message" rows="5" placeholder={t.formMessagePlaceholder} />
            </div>
            <button type="submit" className="btn btn--primary contact-form__submit">
              {t.formSubmit}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btn__arrow">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact