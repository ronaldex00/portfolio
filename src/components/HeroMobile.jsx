import './Hero.css'
import LiquidEther from './LiquidEther'
import ContentModal from './ContentModal'
import AboutContent from './AboutContent'
import ProjectsContent from './ProjectsContent'
import SkillsContent from './SkillsContent'
import CertificatesContent from './CertificatesContent'
import ContactContent from './ContactContent'
import { useState } from 'react'

export default function HeroMobile() {
  const [activeModal, setActiveModal] = useState(null)

  const handleNavClick = (section) => {
    setActiveModal(section)
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
    const titles = {
      'about': 'Sobre Mim',
      'projects': 'Projetos',
      'skills': 'Habilidades',
      'certificates': 'Certificados',
      'contact': 'Contato'
    }
    return titles[activeModal] || ''
  }

  return (
    <>
      <section className="hero">
        <div className="hero-liquid-bg">
          <LiquidEther
            colors={['#ffffff', '#ffffff', '#ffffff']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="hero-content">
          <div className="line"></div>
          <h1 className="hero-title">
            Dev FullStack
          </h1>
          <div className="line"></div>
          <p className="hero-subtitle">PORTFÓLIO</p>
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
