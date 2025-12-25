import './Header.css'

export default function HeaderMobile({ onNavClick }) {
  const handleNavClick = (section) => {
    if (onNavClick) {
      onNavClick(section)
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-text">Henrique Resende</div>
        <ul className="nav-menu">
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>Sobre</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projetos</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Habilidades</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('certificates'); }}>Certificados</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
