import { useState, useEffect } from 'react'
import ContentModal from './ContentModal'
import AboutContent from './AboutContent'
import ProjectsContent from './ProjectsContent'
import SkillsContent from './SkillsContent'
import CertificatesContent from './CertificatesContent'
import ContactContent from './ContactContent'
import './MainGrid.css'

export default function MainGrid({ onNavClick }) {
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
      label: 'SOBRE',
      description: 'Desenvolvedor fullstack',
      span: '1x1'
    },
    {
      id: 'certificates',
      title: 'Certificados',
      label: 'CERTIFICADOS',
      description: 'Credenciais profissionais',
      span: '1x1'
    },
    {
      id: 'projects',
      title: 'Projetos',
      label: 'PROJETOS',
      description: 'Portfólio de trabalhos',
      span: '1x1'
    },
    {
      id: 'skills',
      title: 'Habilidades',
      label: 'SKILLS',
      description: 'Tecnologias e ferramentas',
      span: '1.1'
    },
    {
      id: 'contact',
      title: 'Contato',
      label: 'CONTATO',
      description: 'Vamos conversar',
      span: '1x1'
    }
  ]

  const getSpanClass = (span) => {
    const spanMap = {
      '1x1': 'span-1x1',
      '1x1.5': 'span-1x1-5',
      '2x1': 'span-2x1',
      '1.5x1': 'span-1-5x1'
    }
    return spanMap[span] || 'span-1x1'
  }

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
      <section className="main-grid-section">
        <div className="container">
          <div className="main-grid">
            {sections.map(section => (
              <div
                key={section.id}
                className={`main-grid-card ${getSpanClass(section.span)}`}
                onClick={() => setActiveModal(section.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModal(section.id)}
              >
                <div className="card-inner">
                  <div className="card-title">{section.title}</div>
                  <div className="card-description">{section.description}</div>
                </div>
              </div>
            ))}
          </div>
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
