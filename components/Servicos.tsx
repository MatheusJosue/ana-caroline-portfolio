"use client";

import { Container } from "react-bootstrap";
import { FaBath, FaCut, FaHandSparkles, FaPaw, FaShower, FaSprayCan } from "react-icons/fa";
import { motion } from "framer-motion";

const servicos = [
  {
    titulo: "Banho",
    icone: FaBath,
    precos: [
      ["Pequeno", "R$ 60"],
      ["Médio", "R$ 80"],
      ["Grande", "R$ 100"],
    ],
  },
  {
    titulo: "Tosa Higiênica",
    icone: FaCut,
    precos: [
      ["Pequeno", "R$ 10"],
      ["Médio", "R$ 20"],
      ["Grande", "R$ 30"],
    ],
  },
  {
    titulo: "Banho + Tosa",
    icone: FaShower,
    precos: [
      ["Pequeno", "R$ 90"],
      ["Médio", "R$ 105"],
      ["Grande", "R$ 120"],
    ],
  },
];

const extras = [
  { titulo: "Corte de unhas", preco: "R$ 15", icone: FaCut },
  { titulo: "Hidratação", preco: "R$ 20", icone: FaSprayCan },
  { titulo: "Desembolo de nós", preco: "R$ 20", icone: FaHandSparkles },
];

export default function Servicos() {
  return (
    <section id="servicos" className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flyer-section-title"
        >
          <span className="flyer-eyebrow">
            <FaPaw />
            Cuidado, carinho e bem-estar
          </span>
          <h2 className="flyer-title">Tabela de Preços</h2>
          <p className="flyer-subtitle">
            Valores organizados para facilitar a escolha do melhor cuidado para cada porte.
          </p>
        </motion.div>

        <div className="service-grid">
          {servicos.map((servico, index) => {
            const Icon = servico.icone;

            return (
              <motion.article
                key={servico.titulo}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flyer-card service-card"
              >
                <div className="service-icon">
                  <Icon />
                </div>
                <div className="ribbon service-label">{servico.titulo}</div>

                {servico.precos.map(([porte, preco]) => (
                  <div className="price-row" key={porte}>
                    <span>
                      <FaPaw style={{ color: "var(--color-primary)" }} />
                      {porte}
                    </span>
                    <strong className="price-value">{preco}</strong>
                  </div>
                ))}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flyer-card extras-bar"
        >
          <div className="ribbon mb-3">Serviços Extras</div>
          <div className="extras-grid">
            {extras.map((extra) => {
              const Icon = extra.icone;

              return (
                <div className="extra-item" key={extra.titulo}>
                  <Icon className="extra-icon" />
                  <strong>{extra.titulo}</strong>
                  <span className="mini-price">{extra.preco}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
