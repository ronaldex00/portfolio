export default function SkillsContent() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Java', 'Python']
    },
    {
      category: 'Database',
      items: ['MySQL', 'SQL Server']
    },
    {
      category: 'Ferramentas & Metodologias',
      items: ['Git', 'GitHub', 'Docker', 'Figma', 'Scrum', 'Kanban']
    }
  ]

  return (
    <div className="modal-content-text">
      {skills.map((skill, index) => (
        <div key={index}>
          <h3>{skill.category}</h3>
          <ul>
            {skill.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Experiência</h3>
      <p>
        Possuo experiência prática com todas essas tecnologias em projetos reais, 
        sempre buscando aprender e dominar novas ferramentas para melhorar a qualidade 
        e eficiência do desenvolvimento.
      </p>
    </div>
  )
}
