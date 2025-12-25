export default function CertificatesContent() {
  const certificates = [
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2025',
      description: 'Certificação completa em Cloud Foundations pela AWS Academy. Aprendizado em infraestrutura cloud, serviços AWS e arquitetura em nuvem.',
      credentialUrl: 'https://www.credly.com/go/MkHNqqaY'
    },
    {
      title: 'Banco de Dados - Administração, Implementação e Modelagem',
      issuer: 'Fundação Bradesco',
      date: '2024',
      description: 'Cursos abrangentes sobre administração, implementação e modelagem avançada de bancos de dados. Conhecimento em design de databases e otimização de performance.',
      credentialUrl: '/certificados/DatabaseCertificate_Fundacao_Bradesco.pdf'
    },
    {
      title: 'Computer Hardware',
      issuer: 'CISCO Networking Academy',
      date: '2024',
      description: 'Certificação em hardware de computadores e arquitetura de sistemas pela CISCO Networking Academy.',
      credentialUrl: '/certificados/Computer Hardware - CISCO.pdf'
    }
  ]

  return (
    <div className="modal-content-text">
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-item">
          <h3>{cert.title}</h3>
          <p>
            <strong>{cert.issuer}</strong> • {cert.date}
          </p>
          <p>{cert.description}</p>
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
            Ver Credencial →
          </a>
        </div>
      ))}
    </div>
  )
}
