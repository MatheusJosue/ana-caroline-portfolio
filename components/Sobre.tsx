"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaAward, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sobre() {
  const features = [
    {
      icon: FaHeart,
      title: "Amor e Cuidado",
      text: "Cada pet é tratado com carinho individual",
    },
    {
      icon: FaAward,
      title: "Experiência",
      text: "Anos de dedicação aos animais",
    },
    {
      icon: FaCertificate,
      title: "Qualidade",
      text: "Produtos premium e técnicas modernas",
    },
  ];

  return (
    <section id="sobre" className="section" style={{ position: "relative" }}>
      {/* Background decoration */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              background: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
            }}
          >
            Sobre Mim
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#5a4a5a" }}>
            Conheça quem cuida do seu melhor amigo
          </p>
        </motion.div>

        <Row className="align-items-center g-5">
          {/* Left Column - Content */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.7))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "28px",
                padding: "40px",
                boxShadow: "0 12px 48px rgba(233, 30, 99, 0.12)",
              }}
            >
              <motion.h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#ad1457",
                  marginBottom: "20px",
                  fontSize: "1.75rem",
                }}
              >
                Amoroso cuidado para seu pet
              </motion.h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: "#5a4a5a",
                  marginBottom: "16px",
                }}
              >
                Olá! Sou a <strong>Ana Caroline</strong>, tosadora com paixão por
                animais. Meu objetivo é proporcionar uma experiência positiva e
                relaxante para seu pet, sempre com muito cuidado, paciência e
                amor.
              </p>
              <p
                style={{
                  lineHeight: 1.8,
                  color: "#5a4a5a",
                  marginBottom: "24px",
                }}
              >
                Utilizo produtos de qualidade e técnicas modernas para garantir
                o melhor resultado no banho e tosa do seu melhor amigo.
              </p>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background:
                          "linear-gradient(135deg, #ffeef6, #fce4ec)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <feature.icon style={{ color: "#e91e63", fontSize: "20px" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#ad1457",
                          fontSize: "0.95rem",
                        }}
                      >
                        {feature.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#5a4a5a",
                        }}
                      >
                        {feature.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Right Column - Visual */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                height: "400px",
                borderRadius: "28px",
                background:
                  "linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 240, 245, 0.6))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 12px 48px rgba(233, 30, 99, 0.12)",
              }}
            >
              {/* Animated floating elements */}
              <motion.div
                style={{ fontSize: "120px" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🐕
              </motion.div>

              {/* Decorative hearts */}
              <motion.div
                style={{ position: "absolute", top: "20%", left: "15%", fontSize: "24px" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                💖
              </motion.div>
              <motion.div
                style={{ position: "absolute", top: "30%", right: "20%", fontSize: "20px" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                💕
              </motion.div>
              <motion.div
                style={{ position: "absolute", bottom: "25%", left: "20%", fontSize: "28px" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                💗
              </motion.div>
              <motion.div
                style={{ position: "absolute", bottom: "35%", right: "15%", fontSize: "22px" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                💖
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
