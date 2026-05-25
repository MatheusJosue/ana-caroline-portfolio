"use client";

import { Container } from "react-bootstrap";
import {
  FaClock,
  FaHeart,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaw,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "(11) 97377-2653",
    href: "https://wa.me/5511973772653",
    color: "#25D366",
  },
  {
    icon: FaMapMarkerAlt,
    label: "LocalizaÃ§Ã£o",
    value: "Jardim Martins, Vila Maringá - Jundiaí SP",
    color: "var(--color-primary)",
  },
  {
    icon: FaClock,
    label: "Horário",
    value: "Seg a Sex - 9h ãs 18h",
    color: "var(--color-teal-dark)",
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="section" style={{ paddingBottom: 0 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flyer-section-title"
        >
          <span className="flyer-eyebrow">
            <FaHeart />
            Agende agora
          </span>
          <h2 className="flyer-title">Ficou com alguma duvida?</h2>
          <p className="flyer-subtitle">
            Chame no WhatsApp para consultar horários, valores e
            disponibilidade.
          </p>
        </motion.div>

        <div className="flyer-card contact-panel">
          <div className="contact-strip">
            {contacts.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="contact-icon" style={{ color: item.color }}>
                    <Icon />
                  </span>
                  <span>
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-value">{item.value}</p>
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  className="contact-item flyer-card"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="contact-item flyer-card">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="hero-actions">
            <a
              className="primary-cta whatsapp-btn"
              href="https://wa.me/5511973772653"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Conversar no WhatsApp
            </a>
            <a
              className="secondary-cta"
              href="https://www.instagram.com/anacarol_sol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "var(--color-teal-dark)",
            fontWeight: 700,
            fontSize: "0.9rem",
            marginTop: 32,
          }}
        >
          © 2026 Carol Pet House. Feito com cuidado
          <FaHeart style={{ color: "var(--color-primary)", margin: "0 8px" }} />
          <FaPaw style={{ color: "var(--color-primary)" }} />
        </motion.div>
      </Container>
      <div className="footer-wave" />
    </footer>
  );
}
