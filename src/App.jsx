import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
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
      <Header onNavClick={handleNavClick} />
      <Hero onNavClick={handleSetActiveModal} />
      <Footer />
    </>
  )
}

export default App
