import './Hero.css'
import LiquidEther from './LiquidEther'
import MainGrid from './MainGrid'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Hero({ onNavClick }) {
  const isMobile = useIsMobile()

  return (
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
      {!isMobile && (
        <MainGrid onNavClick={onNavClick} />
      )}
    </section>
  )
}
