import './services.css';

export default function ServicesSection(){
  const services = [
    {
      title: 'Sites otimizados para conversão',
      desc: 'Criação de sites rápidos, responsivos e pensados para transformar visitantes em clientes — com SEO básico, velocidade e design focado em ação.',
      icon: '🌐'
    },
    {
      title: 'Gestão de anúncios e tráfego',
      desc: 'Campanhas claras e mensuráveis em Google e redes sociais para atrair clientes reais com orçamento controlado e relatórios simples.',
      icon: '📈'
    },
    {
      title: 'Presença e conteúdo estratégico',
      desc: 'Conteúdo para redes e automações de marketing que educam, geram confiança e criam um fluxo contínuo de leads qualificados.',
      icon: '✍️'
    }
  ]

  return (
    <div className="card-grid">
      {services.map((s)=> (
        <div key={s.title} className="feature-card">
          <div className="feature-card-icon">{s.icon}</div>
          <h3 className="feature-card-title">{s.title}</h3>
          <p className="feature-card-text">{s.desc}</p>
          <ul className="service-list">
            <li><span className="service-arrow">→</span><span>Diagnóstico rápido de 48h</span></li>
            <li><span className="service-arrow">→</span><span>Plano com metas e prazos</span></li>
            <li><span className="service-arrow">→</span><span>Relatórios mensais fáceis</span></li>
          </ul>
        </div>
      ))}
    </div>
  )
}
