import './trust.css';

export default function TrustSection(){
  return (
    <section className="section-stack">
      <div className="section-heading">
        <h2 className="section-title">Por que escolher a gente?</h2>
        <p className="section-subtitle">
          Somos um parceiro focado em resultados práticos para pequenas empresas. Entregamos clareza, previsibilidade e suporte humano em todas as etapas.
        </p>
      </div>

      <div className="card-grid">
        <div className="feature-card">
          <div className="feature-card-icon">📊</div>
          <h3 className="feature-card-title">Experiência prática</h3>
          <p className="feature-card-text">Projetos com foco em resultados e ROI mensurável comprovado.</p>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">🔍</div>
          <h3 className="feature-card-title">Transparência</h3>
          <p className="feature-card-text">Relatórios simples e comunicação direta com seu gerente de projeto.</p>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">💬</div>
          <h3 className="feature-card-title">Suporte dedicado</h3>
          <p className="feature-card-text">Atendimento humano e prazos realistas para entregas.</p>
        </div>
      </div>

      <div className="stats-row">
        <div>
          <p className="stat-label">Nossos números</p>
          <p className="section-title" style={{fontSize:'1.6rem', marginBottom:0}}>Confiança que você pode medir</p>
        </div>
        <div className="card-grid" style={{gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:'1rem', minWidth:'320px'}}>
          <div className="stat-card">
            <p className="stat-value">4.9/5</p>
            <p className="stat-label">Avaliação</p>
          </div>
          <div className="stat-card">
            <p className="stat-value">120+</p>
            <p className="stat-label">Projetos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
