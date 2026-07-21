import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'
import './CVPreview.css'

function CVPreview() {
  const { lang } = useLanguage()
  const t = translations[lang].hero
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="cv-preview">
      <div className="cv-preview__header">
        <h1 className="cv-preview__title">Curriculum Vitae</h1>
        <div className="cv-preview__actions">
          <button onClick={handleBack} className="btn btn--ghost">
            ← Back
          </button>
          <a href="/CV-BAHMADI-Akram-FR.pdf" download className="btn btn--primary">
            Download CV
          </a>
        </div>
      </div>
      <div className="cv-preview__container">
        <embed
          src="/CV-BAHMADI-Akram-FR.pdf"
          type="application/pdf"
          className="cv-preview__embed"
        />
      </div>
    </div>
  )
}

export default CVPreview