import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Henrique Resende. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
