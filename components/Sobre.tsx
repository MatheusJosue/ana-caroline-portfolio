"use client";

import { Col, Container, Row } from "react-bootstrap";
import { FaAward, FaCertificate, FaHeart, FaPaw, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaHeart,
    title: "Amor e cuidado",
    text: "Cada pet recebe atenção individual, com paciência e carinho.",
  },
  {
    icon: FaAward,
    title: "Experiência",
    text: "Atendimento focado em conforto, higiene e bom acabamento.",
  },
  {
    icon: FaCertificate,
    title: "Qualidade",
    text: "Produtos adequados e técnicas modernas para cada pelagem.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="flyer-card about-panel"
            >
              <span className="flyer-eyebrow">
                <FaPaw />
                Sobre a profissional
              </span>
              <h2 className="flyer-title">
                Banho e tosa com cuidado de verdade
              </h2>
              <p>
                Olá! Sou a <strong>Ana Caroline</strong>, tosadora apaixonada
                por animais. Meu objetivo é proporcionar uma experiência
                tranquila para o pet e um resultado bonito, limpo e bem
                finalizado para a família.
              </p>
              <p>
                O atendimento é feito com atenção ao comportamento, tipo de
                pelagem e necessidade de cada animal.
              </p>

              <div className="feature-list">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div className="feature-item" key={feature.title}>
                      <span className="feature-icon">
                        <Icon />
                      </span>
                      <span>
                        <strong style={{ color: "var(--color-primary-dark)" }}>
                          {feature.title}
                        </strong>
                        <p style={{ margin: 0, fontSize: "0.92rem" }}>
                          {feature.text}
                        </p>
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{ position: "relative" }}
            >
              <div
                className="hero-photo"
                style={{ transform: "rotate(-1deg)" }}
              >
                <img
                  src="/images/depois14.jpeg"
                  alt="Pet com acabamento de banho e tosa"
                />
              </div>
              <div
                className="hero-bubble"
                style={{ top: "auto", bottom: 24, right: 18 }}
              >
                <FaStar
                  style={{ color: "var(--color-primary)", marginRight: 8 }}
                />
                Seu pet sempre limpo, cheiroso e feliz.
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
