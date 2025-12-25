import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Hero from './components/Hero'
import HeroMobile from './components/HeroMobile'
import Footer from './components/Footer'
import { useIsMobile } from './hooks/useIsMobile'

function App() {
  const isMobile = useIsMobile()
  const [setActiveModal, setSetActiveModal] = useState(null)
  const mobileSetActiveModalRef = useRef(null)

  const handleNavClick = (section) => {
    if (setActiveModal) {
      setActiveModal(section)
    }
  }

  const handleMobileNavClick = (section) => {
    if (mobileSetActiveModalRef.current) {
      mobileSetActiveModalRef.current(section)
    }
  }

  const handleSetActiveModal = (setter) => {
    setSetActiveModal(() => setter)
  }

  const handleSetMobileActiveModal = (setter) => {
    mobileSetActiveModalRef.current = setter
  }

  return (
    <>
      {isMobile ? <HeaderMobile onNavClick={handleMobileNavClick} /> : <Header onNavClick={handleNavClick} />}
      {isMobile ? <HeroMobile onMobileNavClick={handleSetMobileActiveModal} /> : <Hero onNavClick={handleSetActiveModal} />}
      <Footer />
    </>
  )
}

export default App
