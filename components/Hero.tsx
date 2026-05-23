"use client";

import { Container } from "react-bootstrap";
import {
  FaBath,
  FaHeart,
  FaMapMarkerAlt,
  FaPaw,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface HeroProps {
  nome: string;
  subtitulo: string;
  fotoUrl?: string;
}

export default function Hero({
  nome,
  subtitulo,
  fotoUrl = "/images/depois15.jpeg",
}: HeroProps) {
  const decor = [
    {
      icon: FaPaw,
      className: "paw-watermark",
      style: { top: "13%", left: "6%", fontSize: 42 },
    },
    {
      icon: FaPaw,
      className: "paw-watermark",
      style: { top: "23%", right: "8%", fontSize: 54, animationDelay: "1.3s" },
    },
    {
      icon: FaHeart,
      className: "paw-watermark",
      style: { top: "55%", left: "9%", fontSize: 30, animationDelay: "0.8s" },
    },
    {
      icon: FaHeart,
      className: "sparkle",
      style: { top: "18%", right: "22%", fontSize: 18 },
    },
    {
      icon: FaPaw,
      className: "sparkle",
      style: {
        bottom: "18%",
        left: "18%",
        fontSize: 18,
        animationDelay: "1.5s",
      },
    },
  ];

  return (
    <section id="home" className="hero-poster">
      {decor.map(({ icon: Icon, className, style }, index) => (
        <Icon key={index} className={className} style={style} />
      ))}

      <Container style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="brand-mark" aria-label={`${nome} ${subtitulo}`}>
              <div className="brand-house" aria-hidden="true">
                <span className="brand-house-post left" />
                <span className="brand-house-post right" />
                <span className="brand-house-line" />
                <span className="brand-house-icon">
                  <FaPaw />
                </span>
              </div>

              <h1 className="hero-brand-name">
                <span>Ana</span> Caroline
              </h1>
              <p className="hero-tagline">Onde seu pet se sente em casa!</p>
            </div>

            <h2 className="hero-headline">
              Marque um horário para banho ou tosa!
            </h2>
            <p className="hero-copy">
              Atendimento com atenÃ§Ã£o especial, conforto e muito carinho para
              o seu melhor amigo.
            </p>

            <div className="hero-actions">
              <a
                className="primary-cta whatsapp-btn"
                href="https://wa.me/5511973772653"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Agendar pelo WhatsApp
              </a>
              <a className="secondary-cta" href="#servicos">
                <FaBath />
                Ver serviÃ§os
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-visual"
          >
            <div className="hero-photo">
              <img src={fotoUrl} alt="Pet depois do banho e tosa" />
            </div>

            <div className="hero-bubble">
              <FaHeart
                style={{ color: "var(--color-primary)", marginRight: 8 }}
              />
              Cuidado profissional, cheiroso e feliz.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flyer-card contact-strip mt-4"
        >
          <a
            className="contact-item"
            href="https://wa.me/5511973772653"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" style={{ color: "#25D366" }}>
              <FaWhatsapp />
            </span>
            <span>
              <p className="contact-label">Agende agora</p>
              <p className="contact-value">(11) 97377-2653</p>
            </span>
          </a>

          <div className="contact-item">
            <span className="contact-icon">
              <FaMapMarkerAlt />
            </span>
            <span>
              <p className="contact-label">Atendemos em</p>
              <p className="contact-value">Jardim Martins, Vila Maringá</p>
              <p className="contact-value">Jundiaí - SP</p>
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <FaPhoneAlt />
            </span>
            <span>
              <p className="contact-label">Especialidade</p>
              <p className="contact-value">Banho e tosa</p>
            </span>
          </div>
        </motion.div>
      </Container>

      <div className="bottom-bubbles" />
    </section>
  );
}
