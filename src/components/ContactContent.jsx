import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon linkedin-icon">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.424-.103.249-.129.597-.129.945v5.436h-3.555V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon github-icon">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
  </svg>
)

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'h.resende00@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      )
      
      setFormData({ name: '', email: '', message: '' })
      alert('Mensagem enviada com sucesso! Obrigado pelo contato.')
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <div className="modal-content-text">
      <h3>Informações de Contato</h3>
      <p>
        <strong>Email:</strong> <a href="mailto:h.resende00@gmail.com">h.resende00@gmail.com</a>
      </p>

      <h3>Redes Sociais</h3>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/henrique-rmc/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link linkedin-link"
          title="LinkedIn"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/ronaldex00" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link github-link"
          title="GitHub"
        >
          <GitHubIcon />
          <span>GitHub</span>
        </a>
      </div>

      <h3>Envie uma Mensagem</h3>
      <form onSubmit={handleSubmit} className="contact-form-modal">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Enviar Mensagem</button>
      </form>

      <style>{`
        .social-links {
          display: flex;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 8px;
          color: #00d4ff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .social-link:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
        }

        .social-link svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .contact-form-modal {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ffffff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 212, 255, 0.5);
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
        }

        .submit-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(0, 212, 255, 0.6));
          border: 1px solid rgba(0, 212, 255, 0.5);
          border-radius: 8px;
          color: #ffffff;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, rgba(0, 212, 255, 1), rgba(0, 212, 255, 0.8));
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
        }
      `}</style>
    </div>
  )
}
