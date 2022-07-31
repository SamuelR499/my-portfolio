import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [submitform, setSubmitform] = useState({
    name: '',
    email: '',
    message: ''
  });
  const form = useRef();
  
  const sendEmail = e => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_q4fdhcr',
      'template_922v1cg',
      form.current,
      'Wk7n20G8DjoMO6lfh'
      );
      e.target.reset();
    };
    
  const handleClick = () => {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };
  
  const {name, email, message} = submitform;
  const abilitarEnviar = () => {
    const testEmail = /\S+@\S+\.\S+/;
    const nameMin = 3;
    const messageMin = 6;
    const result = !((testEmail.test(email) && name.length > nameMin  && message.length > messageMin));

    return result;
  }

  const handlechange = e => {
    setSubmitform({
      ...submitform,
      [e.target.name]: e.target.value
    });
    abilitarEnviar();
    console.log(submitform);
  };


  return (
    <section id="contact">
      <h5>Entrar em contato</h5>
      <h2>Entre em contato comigo</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>samuelribeiro2@hotmail.com</h5>
            <a href="mailto:samuelribeiro2@hotmail.com" target="blank">
              envie uma mensagem
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Samuel Ribeiro</h5>
            <a href="https://m.me/samuel.ribeiro97" target="blank">
              envie uma mensagem
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 18 99805-3560</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5518998053560"
              target="blank"
            >
              envie uma mensagem
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome Completo"
            value={name}
            onChange={handlechange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={email}
            onChange={handlechange}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua Mensagem"
            value={message}
            onChange={handlechange}
            required
          />
          <div className="btn_enviar">
            <button
              id="btn_enviar-config"
              type="submit"
              className="btn btn-primary"
              onClick={ handleClick }
              disabled={ abilitarEnviar() }
            >
              Enviar
            </button>
            {enviado &&
              <span>
                <BiCheck className="service_list-icon" /> mensagem enviada
              </span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
