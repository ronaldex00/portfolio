import { useState, useEffect } from 'react'
import ContentModal from './ContentModal'
import AboutContent from './AboutContent'
import ProjectsContent from './ProjectsContent'
import SkillsContent from './SkillsContent'
import CertificatesContent from './CertificatesContent'
import ContactContent from './ContactContent'
import './MainGridMobile.css'

export default function MainGridMobile({ onNavClick }) {
  const [activeModal, setActiveModal] = useState(null)

  useEffect(() => {
    if (onNavClick) {
      onNavClick(setActiveModal)
    }
  }, [onNavClick])

  const sections = [
    {
      id: 'about',
      title: 'Sobre Mim',
      description: 'Desenvolvedor fullstack',
    },
    {
      id: 'certificates',
      title: 'Certificados',
      description: 'Credenciais profissionais',
    },
    {
      id: 'projects',
      title: 'Projetos',
      description: 'Portfólio de trabalhos',
    },
    {
      id: 'skills',
      title: 'Habilidades',
      description: 'Tecnologias e ferramentas',
    },
    {
      id: 'contact',
      title: 'Contato',
      description: 'Vamos conversar',
    }
  ]

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return <AboutContent />
      case 'projects':
        return <ProjectsContent />
      case 'skills':
        return <SkillsContent />
      case 'certificates':
        return <CertificatesContent />
      case 'contact':
        return <ContactContent />
      default:
        return null
    }
  }

  const getModalTitle = () => {
    const section = sections.find(s => s.id === activeModal)
    return section?.title || ''
  }

  return (
    <>
      <section className="main-grid-section-mobile">
        <div className="main-grid-mobile">
          {sections.map(section => (
            <div
              key={section.id}
              className="main-grid-card-mobile"
              onClick={() => setActiveModal(section.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveModal(section.id)}
            >
              <div className="card-inner-mobile">
                <div className="card-title-mobile">{section.title}</div>
                <div className="card-description-mobile">{section.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContentModal
        isOpen={activeModal !== null}
        title={getModalTitle()}
        onClose={() => setActiveModal(null)}
      >
        {renderModalContent()}
      </ContentModal>
    </>
  )
}
