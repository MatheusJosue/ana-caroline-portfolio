"use client";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaPaw,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const contactItems = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "(11) 97377-2653",
      color: "#25D366",
      link: "https://wa.me/5511973772653",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Localização",
      value: "Jundiaí, SP",
      color: "#e91e63",
    },
    {
      icon: FaClock,
      label: "Horário",
      value: "Seg a Sex - 9h às 18h",
      color: "#ad1457",
    },
  ];

  return (
    <footer
      id="contato"
      style={{
        background: "linear-gradient(180deg, rgba(255, 240, 245, 0.5) 0%, rgba(255, 232, 245, 0.8) 100%)",
        padding: "80px 0 40px",
        position: "relative",
      }}
    >
      {/* Background decorations */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row>
          {/* Contact Info Column */}
          <Col md={6} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#ad1457",
                  marginBottom: "28px",
                  fontSize: "2rem",
                }}
              >
                Entre em Contato
              </h3>

              {/* Contact Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link || undefined}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    style={{ textDecoration: "none" }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "16px 20px",
                        borderRadius: "16px",
                        background:
                          "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.7))",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        transition: "all 0.3s ease",
                        cursor: item.link ? "pointer" : "default",
                      }}
                      onMouseEnter={(e) => {
                        if (item.link) {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.boxShadow =
                            "0 12px 30px rgba(233, 30, 99, 0.15)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (item.link) {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: "linear-gradient(135deg, #ffeef6, #fce4ec)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <item.icon style={{ color: item.color, fontSize: "20px" }} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "#888",
                            marginBottom: "2px",
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            color: "#2d1f2f",
                            fontWeight: 600,
                            fontSize: "1rem",
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Buttons */}
              <motion.div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.a
                  href="https://wa.me/5511973772653"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 28px",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    color: "white",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(37, 211, 102, 0.25)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/anacarol_sol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 28px",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    color: "white",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(225, 48, 108, 0.25)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaInstagram size={18} />
                  Instagram
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          {/* Card Column */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.7))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "28px",
                padding: "36px",
                height: "100%",
                boxShadow: "0 12px 48px rgba(233, 30, 99, 0.12)",
              }}
            >
              <h4
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#ad1457",
                  marginBottom: "20px",
                  fontSize: "1.5rem",
                }}
              >
                Venha nos visitar!
              </h4>
              <p style={{ color: "#5a4a5a", lineHeight: "1.7", marginBottom: "24px" }}>
                Seu pet merece um tratamento especial. Agende já o horário e
                venha conhecer nosso espaço!
              </p>

              {/* Map placeholder with animation */}
              <motion.div
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 240, 245, 0.6))",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  border: "2px dashed rgba(233, 30, 99, 0.2)",
                }}
              >
                {/* Animated background */}
                <motion.div
                  style={{
                    position: "absolute",
                    width: "200%",
                    height: "200%",
                    background:
                      "radial-gradient(circle, rgba(233, 30, 99, 0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                  }}
                >
                  <FaMapMarkerAlt
                    style={{ color: "#e91e63", fontSize: "60px", marginBottom: "12px" }}
                  />
                  <div style={{ color: "#ad1457", fontWeight: 600 }}>
                    Jundiaí, SP
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "60px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#ad1457",
              fontSize: "0.9rem",
            }}
          >
            <span>© 2026 Ana Caroline - Tosadora.</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart style={{ color: "#e91e63" }} size={12} />
            </motion.span>
            <span>Todos os direitos reservados.</span>
            <motion.span
              animate={{ rotate: [0, -15, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaPaw style={{ color: "#e91e63" }} size={12} />
            </motion.span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
