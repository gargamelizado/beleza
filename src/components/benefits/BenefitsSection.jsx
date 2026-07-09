import './benefits.css';

export default function BenefitsSection(){
	const benefits = [
		{
			icon: '✨',
			title: 'Design Premium',
			description: 'Sites elegantes que refletem a qualidade do seu serviço e conquistam clientes de primeira vista.'
		},
		{
			icon: '⚡',
			title: 'Conversão Otimizada',
			description: 'Cada elemento pensado para transformar visitantes em clientes com call-to-actions estratégicas.'
		},
		{
			icon: '📱',
			title: 'Mobile First',
			description: 'Experiência perfeita em todos os dispositivos. Seus clientes acessam de qualquer lugar.'
		}
	]

	return (
		<section className="section section-alt">
			<div className="section-inner">
				<div className="section-heading">
					<h2 className="section-title">Por que somos diferentes</h2>
					<p className="section-subtitle">
						Combinamos beleza visual, estratégia inteligente e execução impecável para resultados que falam por si.
					</p>
				</div>

				<div className="card-grid">
					{benefits.map((benefit, idx) => (
						<div key={idx} className="feature-card">
							<div className="feature-card-icon">{benefit.icon}</div>
							<h3 className="feature-card-title">{benefit.title}</h3>
							<p className="feature-card-text">{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
