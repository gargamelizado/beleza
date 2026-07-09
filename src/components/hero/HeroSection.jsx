import heroImage from '../../assets/hero.png';
import './hero.css';

export default function HeroSection(){
	return (
		<section className="hero-section">
			<div className="hero-grid">
				<div className="hero-copy">
					<span className="hero-eyebrow">Mais Bonita Centro de Beleza</span>
					<h1 className="hero-title">Valorize sua imagem pessoal e aproveite ao máximo este tempo que é só seu.</h1>
					<p className="hero-subtitle">
						No MAIS BONITA você encontra, além de um ambiente acolhedor, um tratamento personalizado de beleza e bem-estar.
					</p>

					<div className="hero-actions">
						<button className="btn-primary">Agende agora</button>
						<button className="btn-secondary">Conheça nossos serviços</button>
					</div>
				</div>

				<div className="hero-visual">
					<img src={heroImage} alt="Salão de beleza Mais Bonita" />
					<div className="hero-visual-overlay" />
					<div className="hero-visual-label">Ambiente acolhedor</div>
				</div>
			</div>
		</section>
	)
}
