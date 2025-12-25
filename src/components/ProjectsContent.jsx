export default function ProjectsContent() {
  const projects = [
    {
      title: 'Plataforma de Reciclagem',
      tags: ['React', 'Node.js', 'MySQL', 'Docker', 'Figma', 'Scrum', 'HTML', 'CSS'],
      description: 'Plataforma de reciclagem completa com sistema de coletor, descartador, estoque, gerenciamento de pedidos e integração de pagamento. Desenvolvida com arquitetura moderna e escalável.',
      link: 'https://github.com/ronaldex00/SOSBorracha-Beta-Test'
    },
    {
      title: 'Website para Escritório de Advocacia',
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      description: 'Website profissional para escritório de advocacia com informações sobre serviços, portfólio de casos, equipe e formulário de contato. Hospedado na plataforma Hostinger.',
      link: 'https://advocaciaresendemenezes.com.br/'
    }
  ]

  return (
    <div className="modal-content-text">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver Projeto →
          </a>
        </div>
      ))}
    </div>
  )
}
