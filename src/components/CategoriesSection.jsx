export default function CategoriesSection(){
	const categories = [
		{
			title: 'Sites Otimizados',
			icon: '🌐',
			description: 'Plataformas rápidas e bonitas que convertem visitantes em clientes.'
		},
		{
			title: 'Gestão de Anúncios',
			icon: '📢',
			description: 'Campanhas estratégicas em Google e Instagram com ROI comprovado.'
		},
		{
			title: 'Conteúdo Estratégico',
			icon: '✍️',
			description: 'Posts, reels e histórias que educam, divertem e vendem.'
		},
		{
			title: 'Consultoria Digital',
			icon: '💡',
			description: 'Diagnóstico completo e plano de ação personalizados para seu negócio.'
		},
		{
			title: 'Email Marketing',
			icon: '📧',
			description: 'Automações que mantêm seus clientes engajados e voltando sempre.'
		},
		{
			title: 'Análise & Relatórios',
			icon: '📊',
			description: 'Métricas claras que mostram exatamente o retorno de cada ação.'
		}
	]

	return (
		<section className="section section-dark">
			<div className="section-inner">
				<div className="section-heading">
					<h2 className="section-title">Soluções Completas</h2>
					<p className="section-subtitle">
						Tudo que você precisa para vender mais pela internet, com sofisticação e estratégia.
					</p>
				</div>

				<div className="card-grid">
					{categories.map((category, idx) => (
						<div key={idx} className="feature-card">
							<div className="feature-card-icon">{category.icon}</div>
							<h3 className="feature-card-title">{category.title}</h3>
							<p className="feature-card-text">{category.description}</p>
						</div>
					))}
				</div>

				<div className="cta-panel">
					<h3 className="cta-title">
						Pronto para <span className="hero-title-accent">crescer online</span>?
					</h3>
					<p className="cta-copy">
						Agendamos uma consultoria gratuita para conhecer seu negócio e apresentar a melhor estratégia.
					</p>
					<button className="btn-primary">Agendar Consultoria Gratuita</button>
				</div>
			</div>
		</section>
	)
}
