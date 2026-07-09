import HeroSection from "../components/hero/HeroSection";
import './home.css';
import heroImage from '../assets/hero.png';

const serviceCards = [
	{ title: 'Cabelos', subtitle: 'Cortes, coloração e tratamentos sofisticados para cabelos impecáveis.' },
	{ title: 'Maquiagem', subtitle: 'Produções elegantes para festas, eventos e ocasiões especiais.' },
	{ title: 'Estética', subtitle: 'Cuidados faciais e corporais para uma pele mais jovem e radiante.' },
	{ title: 'Unhas', subtitle: 'Manicure e pedicure com acabamento premium e longa duração.' },
	{ title: 'Depilação', subtitle: 'Métodos suaves e seguros para conforto e resultado perfeito.' },
	{ title: 'Podologia', subtitle: 'Tratamento completo para pés bonitos, saudáveis e bem cuidados.' }
];

const serviceImages = [
	'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
];

const spaceImages = [
	'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
	'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80'
];

export default function Home(){
	return (
		<div className="home-page">
			<HeroSection />

			<section className="intro-section">
				<div className="section-inner intro-grid">
					<div className="intro-copy">
						<p className="eyebrow">Bem-vinda ao Mais Beleza</p>
						<h2>O espaço perfeito para cuidar de você com atenção e luxo acessível.</h2>
						<p>
							No Mais Beleza você encontra um ambiente acolhedor, atendimento personalizado e uma seleção de serviços de beleza pensados para destacar sua melhor versão.
						</p>
						<div className="intro-actions">
							<button className="btn-primary">Agende aqui</button>
							<button className="btn-secondary">Veja nossos serviços</button>
						</div>
					</div>
					<div className="intro-image">
						<img src={heroImage} alt="Salão Mais Beleza" />
					</div>
				</div>
			</section>

			<section className="services-grid-section">
				<div className="section-inner">
					<div className="section-heading">
						<h2 className="section-title">Nossos Serviços</h2>
						<p className="section-subtitle">Descubra tudo que oferecemos para deixar sua rotina de beleza mais prática e elegante.</p>
					</div>
					<div className="services-grid">
						{serviceCards.map((service, index) => (
							<div key={service.title} className="service-card">
								<img src={serviceImages[index % serviceImages.length]} alt={service.title} />
								<div className="service-card-content">
									<span className="service-card-label">{service.title}</span>
									<p>{service.subtitle}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="banner-cta">
				<div className="section-inner banner-inner">
					<div>
						<p className="eyebrow">Agende agora o seu serviço!</p>
						<h2>Escolha o melhor horário para ficar ainda Mais Beleza.</h2>
						<p className="banner-copy">Atendimento personalizado, técnicas profissionais e um ambiente pensado para você relaxar enquanto cuida da sua imagem.</p>
					</div>
					<button className="btn-primary">Agende Aqui</button>
				</div>
			</section>

			<section className="space-section">
				<div className="section-inner">
					<div className="section-heading">
						<h2 className="section-title">Nosso Espaço</h2>
					</div>
					<div className="space-grid">
						{spaceImages.map((item, index) => (
							<div key={index} className="space-card">
								<img src={item} alt={`Espaço ${index + 1}`} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="media-section">
				<div className="section-inner media-grid">
					<div className="media-copy">
						<p className="eyebrow">Mais Beleza na Mídia</p>
						<h2>Confira tudo que já saiu sobre o MB na mídia</h2>
						<p>Nosso trabalho com estética de alto padrão já foi destaque em perfis e publicações voltadas para beleza, lifestyle e bem-estar.</p>
						<button className="btn-secondary">Clique aqui</button>
					</div>
					<div className="media-card">
						<img src={heroImage} alt="Mais Beleza na mídia" />
					</div>
				</div>
			</section>

			<section className="instagram-section">
				<div className="instagram-overlay" />
				<div className="section-inner instagram-inner">
					<div>
						<p className="eyebrow">Fique por dentro</p>
						<h2>Siga nosso Instagram!</h2>
						<p>@maisbonitacentrodebeleza</p>
					</div>
					<div className="instagram-action">
						<button className="btn-primary">Ver perfil</button>
					</div>
				</div>
			</section>

			<footer className="footer-section">
				<div className="section-inner footer-grid">
					<div className="footer-brand">
						<p className="eyebrow">Mais Beleza</p>
						<h3>Centro de beleza e estética.</h3>
						<p>Valorizamos sua imagem pessoal com atendimento exclusivo e espaço elegante.</p>
					</div>
					<div className="footer-col">
						<h4>Contato</h4>
						<p>Email: contato@maisbonita.com.br</p>
						<p>Tel: (21) 2722-5746</p>
						<p>Whatsapp: (21) 97291-7983</p>
					</div>
					<div className="footer-col">
						<h4>Visite-nos</h4>
						<p>Rua Domingues de Sá, 385</p>
						<p>Jardim Icaraí | Niterói - RJ</p>
					</div>
					<div className="footer-col footer-socials">
						<h4>Siga nas redes</h4>
						<div className="social-list">
							<a href="#" className="social-link">Facebook</a>
							<a href="#" className="social-link">Instagram</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
