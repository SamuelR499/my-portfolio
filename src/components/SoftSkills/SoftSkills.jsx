import React from 'react'
import './SoftSkills.css'
import { BiCheck } from 'react-icons/bi'

const Softskill = () => {
  return (
    <section id="softskill">
      <h5>Sof skills</h5>
      <h2>Competências</h2>

      <div className="container softskill_container">
        <article className="softskill">
          <div className="softskill_head">
            <h3>Comunicação</h3>
          </div>
            <ul className="softskill_list">
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Escuta ativa</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Assertividade</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Dar e receber feedbacks</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Negociação</p>
              </li>
            </ul>
        </article>
        {/*================== END OF Comunicação ========================*/}

        <article className="softskill">
          <div className="softskill_head">
            <h3>Pensamento Crítico</h3>
          </div>
            <ul className="softskill_list">
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Resolução de Problemas</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Raciocínio Lógico</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Tomada de Decisão</p>
              </li>
            </ul>
        </article>
        {/*================== END OF Pensamento Crítico =====================*/}
        <article className="softskill">
          <div className="softskill_head">
            <h3>Criatividade</h3>
          </div>
            <ul className="softskill_list">
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Inovação</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>Colaboração criativa</p>
              </li>
              <li>
                <BiCheck className="softskill_list-icon"/>
                <p>sessão de Pitacos</p>
              </li>
            </ul>
        </article>
        {/*============== END OF Criatividade =====================*/}

      </div>
    </section>
  )
}

export default Softskill;