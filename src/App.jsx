import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Hero from './components/Hero'
import HeroMobile from './components/HeroMobile'
import Footer from './components/Footer'
import { useIsMobile } from './hooks/useIsMobile'

function App() {
  const isMobile = useIsMobile()
  const [setActiveModal, setSetActiveModal] = useState(null)

  const handleNavClick = (section) => {
    if (setActiveModal) {
      setActiveModal(section)
    }
  }

  const handleSetActiveModal = (setter) => {
    setSetActiveModal(() => setter)
  }

  return (
    <>
      {isMobile ? <HeaderMobile onNavClick={handleNavClick} /> : <Header onNavClick={handleNavClick} />}
      {isMobile ? <HeroMobile /> : <Hero onNavClick={handleSetActiveModal} />}
      <Footer />
    </>
  )
}

export default App
