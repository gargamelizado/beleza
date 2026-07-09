import ServicesSection from "../components/services/ServicesSection";
import TrustSection from "../components/trust/TrustSection";
import ContactForm from "../components/contact-form/ContactForm";

export default function Services(){
  return (
    <div>
      <section className="page-hero">
        <div className="section-inner">
          <div className="section-heading">
            <h1 className="page-hero-title">Soluções digitais para pequenas empresas</h1>
            <p className="page-hero-copy">
              Ajudamos sua empresa a conquistar clientes, melhorar presença online e aumentar vendas com estratégias práticas e execução completa.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section-dark">
        <div className="section-inner">
          <ServicesSection />
        </div>
      </section>

      <section className="page-section page-section-panel">
        <div className="section-inner">
          <TrustSection />
        </div>
      </section>

      <section className="page-section-cta">
        <div className="section-inner">
          <div className="cta-panel" style={{background:'rgba(255,255,255,0.18)', border:'1px solid rgba(255,255,255,0.25)'}}>
            <h2 className="cta-title">
              Pronto para <span className="hero-title-accent">crescer online</span>?
            </h2>
            <p className="cta-copy">
              Fale conosco e receba uma proposta personalizada em até 48 horas.
            </p>
            <div className="form" style={{marginTop:'1.6rem'}}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
