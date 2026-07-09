export default function HeroSection(){
	return (
		<section className="hero-section">
			<div className="hero-grid">
				<div className="hero-copy">
					<div className="hero-copy">
						<p className="hero-lead">Beleza premium • Estratégia digital</p>
						<h1 className="hero-title">
							Soluções digitais para <span className="hero-title-accent">quem vende beleza</span>
						</h1>
						<p className="hero-subtitle">
							Transformamos sua presença online em clientes reais com sites, anúncios e conteúdo estratégico pensado para marcas de alto padrão.
						</p>
					</div>

					<div className="hero-actions">
						<button className="btn-primary">Conheça Nossos Serviços</button>
						<button className="btn-secondary">Agendar Consultoria</button>
					</div>

					<div className="hero-highlights">
						<div className="highlight-pill">
							<span className="highlight-icon">✦</span>
							<div>
								<p className="highlight-label">Rápido</p>
								<p className="highlight-value">Resultados em 30 dias</p>
							</div>
						</div>
						<div className="highlight-pill">
							<span className="highlight-icon">◌</span>
							<div>
								<p className="highlight-label">Mensurável</p>
								<p className="highlight-value">Relatórios claros</p>
							</div>
						</div>
						<div className="highlight-pill">
							<span className="highlight-icon">✧</span>
							<div>
								<p className="highlight-label">Focado</p>
								<p className="highlight-value">No seu público</p>
							</div>
						</div>
					</div>
				</div>

				<div className="hero-visual">
					<div className="hero-badge">Visual premium</div>
					<div className="hero-panel">
						<p className="panel-label">Imagem principal</p>
						<p className="panel-title">Uma presença elegante para o seu negócio</p>
					</div>
				</div>
			</div>
		</section>
	)
}
