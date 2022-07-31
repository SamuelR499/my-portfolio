import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Entre em contato comigo</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>samuelribeiro2@hotmail.com</h5>
            <a href="mailto:samuelribeiro2@hotmail.com" target="blank">envie uma mensagem</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Samuel Ribeiro</h5>
            <a href="https://m.me/profile.php?id=100011587428072" target="blank">envie uma mensagem</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+55 18 99805-3560</h5>
            <a href="https://api.whatsapp.com/send?phone=5518998121482" target="blank">envie uma mensagem</a>
          </article>
        </div>
          {/*END OF CONTACT OPTIONS*/}
          <form action="">
            <input type="text" name="name" placeholder="Seu Nome Completo" required/>
            <input type="email" name="email" placeholder="Seu Email" required/>
            <textarea name="message" rows="7"placeholder="Sua Mensagem" required></textarea>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
      </div>
    </section>
  )
}

export default Contact;