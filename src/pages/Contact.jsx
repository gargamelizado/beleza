import ContactForm from "../components/contact-form/ContactForm";

export default function Contact(){
	return (
		<div>
			<section className="page-hero">
				<div className="section-inner">
					<h1 className="page-hero-title">Fale Conosco</h1>
					<p className="page-hero-copy">
						Tem dúvidas? Quer conhecer nossos serviços? Entre em contato!
					</p>
				</div>
			</section>

			<section className="page-section page-section-panel">
				<div className="section-inner" style={{maxWidth:'760px'}}>
					<h2 className="section-title" style={{textAlign:'center'}}>Envie uma Mensagem</h2>
					<ContactForm />
				</div>
			</section>

			<section className="page-section page-section-dark">
				<div className="section-inner">
					<div className="info-grid">
						<div className="info-card">
							<div className="info-card-icon">📧</div>
							<h3 className="info-card-title">Email</h3>
							<p className="info-card-text">contato@belezamodelo.com</p>
							<p className="info-card-text" style={{fontSize:'0.9rem', marginTop:'0.4rem'}}>Respondemos em até 24 horas</p>
						</div>
						<div className="info-card">
							<div className="info-card-icon">📞</div>
							<h3 className="info-card-title">Telefone</h3>
							<p className="info-card-text">(11) 9 8765-4321</p>
							<p className="info-card-text" style={{fontSize:'0.9rem', marginTop:'0.4rem'}}>Segunda a Sexta, 09h-18h</p>
						</div>
						<div className="info-card">
							<div className="info-card-icon">⏰</div>
							<h3 className="info-card-title">Horários</h3>
							<p className="info-card-text">Segunda a Sexta</p>
							<p className="info-card-text" style={{fontSize:'0.9rem', marginTop:'0.4rem'}}>09:00 - 18:00 (Horário de Brasília)</p>
						</div>
					</div>
				</div>
			</section>

			<section className="page-section page-section-panel">
				<div className="section-inner">
					<h2 className="section-title" style={{textAlign:'center'}}>Nos Acompanhe</h2>
					<div className="social-list">
						<a href="#" className="social-link">📱</a>
						<a href="#" className="social-link">🎥</a>
						<a href="#" className="social-link">💼</a>
						<a href="#" className="social-link">🐦</a>
					</div>
				</div>
			</section>

			<section className="page-section-cta">
				<div className="section-inner">
					<div className="cta-panel" style={{background:'rgba(255,255,255,0.2)'}}>
						<h3 className="cta-title">Consultoria Gratuita</h3>
						<p className="cta-copy">Agende uma sessão de 30 minutos com um especialista para conhecer sua empresa e apresentar a melhor estratégia digital.</p>
						<button className="btn-primary">Agendar Agora</button>
					</div>
				</div>
			</section>
		</div>
	)
}
