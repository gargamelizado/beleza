import { useState } from 'react';
import './contact-form.css';

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', company:'', message:''});
  const [status, setStatus] = useState(null);

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', text:'Preencha Nome, E-mail e Mensagem.'});
      return;
    }
    if(!isValidEmail(form.email)){
      setStatus({type:'error', text:'Por favor, insira um e-mail válido.'});
      return;
    }
    setStatus({type:'success', text:'Mensagem enviada! Em breve retornaremos.'});
    setForm({name:'', email:'', company:'', message:''});
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Seu Nome" className="form-field" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Seu E-mail" className="form-field" />
      </div>

      <input name="company" value={form.company} onChange={handleChange} placeholder="Sua Empresa (opcional)" className="form-field" />

      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Sua Mensagem" className="form-textarea" />

      <div className="form-actions">
        <button type="submit" className="btn-primary">Enviar Mensagem</button>
        {status && <div className={`form-status ${status.type === 'error' ? 'error' : 'success'}`}>{status.text}</div>}
      </div>
    </form>
  )
}
