export default function About(){
	return (
		<div>
			<section className="page-hero">
				<div className="section-inner">
					<h1 className="page-hero-title">Sobre Nós</h1>
					<p className="page-hero-copy">
						Transformamos negócios de beleza e moda através de estratégias digitais efetivas
					</p>
				</div>
			</section>

			<section className="page-section page-section-panel">
				<div className="section-inner">
					<h2 className="section-title" style={{textAlign:'center'}}>Nossa Missão</h2>
					<p className="section-subtitle" style={{textAlign:'center'}}>
						Ajudamos pequenas empresas e profissionais de beleza e moda a conquistar presença digital forte, atrair clientes reais e crescer suas vendas com estratégias práticas, mensuráveis e acessíveis.
					</p>
				</div>
			</section>

			<section className="page-section page-section-dark">
				<div className="section-inner">
					<h2 className="section-title" style={{textAlign:'center'}}>Nossos Diferenciais</h2>
					<div className="info-grid">
						<div className="info-card">
							<div className="info-card-icon">🎯</div>
							<h3 className="info-card-title">Foco em Resultados</h3>
							<p className="info-card-text">Cada estratégia é pensada para trazer clientes reais e aumentar seu faturamento.</p>
						</div>
						<div className="info-card">
							<div className="info-card-icon">💡</div>
							<h3 className="info-card-title">Estratégia Personalizada</h3>
							<p className="info-card-text">Não temos soluções prontas. Cada negócio é único e merece um plano customizado.</p>
						</div>
						<div className="info-card">
							<div className="info-card-icon">📊</div>
							<h3 className="info-card-title">Transparência Total</h3>
							<p className="info-card-text">Você acompanha tudo em tempo real com relatórios claros e métricas que importam.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="page-section page-section-panel">
				<div className="section-inner">
					<h2 className="section-title" style={{textAlign:'center'}}>Por que nos escolher?</h2>
					<div style={{maxWidth:'720px', margin:'0 auto'}}>
						<div className="list-check"><span className="list-check-icon">✓</span><span className="list-check-text">Experiência com centenas de profissionais de beleza e moda</span></div>
						<div className="list-check"><span className="list-check-icon">✓</span><span className="list-check-text">Foco em ROI - cada real investido deve trazer retorno</span></div>
						<div className="list-check"><span className="list-check-icon">✓</span><span className="list-check-text">Suporte direto e rápido quando você precisar</span></div>
						<div className="list-check"><span className="list-check-icon">✓</span><span className="list-check-text">Sem contratos longos - comece quando quiser</span></div>
					</div>
				</div>
			</section>

			<section className="page-section-cta">
				<div className="section-inner">
					<div className="cta-panel" style={{background:'rgba(255,255,255,0.2)'}}>
						<h3 className="cta-title">Vamos crescer juntos</h3>
						<p className="cta-copy">Agendamos uma consultoria gratuita para conhecer seu negócio e apresentar a melhor estratégia.</p>
						<button className="btn-primary">Agendar Consultoria</button>
					</div>
				</div>
			</section>
		</div>
	)
}
