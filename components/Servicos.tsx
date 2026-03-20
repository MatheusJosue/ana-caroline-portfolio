"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FaBath, FaMagic, FaHandSparkles } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const servicos = [
  {
    titulo: "Banho",
    descricao: "Banho completo com produtos específicos para cada tipo de pelagem",
    icone: FaBath,
    preco: "A partir de R$ 60",
    detalhes: ["Shampoo premium", "Condicionador", "Secagem profissional"],
  },
  {
    titulo: "Banho + Tosa",
    descricao: "Pacote completo com banho e tosa para seu pet ficar novinho",
    icone: FaMagic,
    preco: "A partir de R$ 90",
    detalhes: ["Tosa higiênica", "Tosa na tesoura", "Estilo personalizado"],
  },
  {
    titulo: "Hidratação",
    descricao: "Tratamento profundo para pelagens secas ou danificadas",
    icone: FaHandSparkles,
    preco: "A partir de R$ 30",
    detalhes: ["Nutrição profunda", "Brilho intenso", "Maciez duradoura"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function Servicos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="section">
      <Container>
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
            Serviços
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#5a4a5a",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Cuidados profissionais para deixar seu pet feliz e bonito
          </p>
        </motion.div>

        <Row className="justify-content-center g-4">
          {servicos.map((servico, index) => {
            const Icone = servico.icone;
            return (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{ height: "100%" }}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      background:
                        "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.7))",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "24px",
                      padding: "36px 28px",
                      textAlign: "center",
                      boxShadow: "0 8px 32px rgba(233, 30, 99, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    animate={
                      hoveredIndex === index
                        ? {
                            boxShadow: "0 20px 60px rgba(233, 30, 99, 0.2)",
                            y: -8,
                          }
                        : {
                            boxShadow: "0 8px 32px rgba(233, 30, 99, 0.1)",
                            y: 0,
                          }
                    }
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, transparent 100%)",
                        opacity: 0,
                      }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon */}
                    <motion.div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "80px",
                        height: "80px",
                        margin: "0 auto 24px",
                        borderRadius: "20px",
                        background:
                          "linear-gradient(135deg, #ffeef6, #fce4ec)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      animate={
                        hoveredIndex === index
                          ? {
                              rotate: [0, -5, 5, -5, 0],
                              scale: 1.1,
                            }
                          : { rotate: 0, scale: 1 }
                      }
                      transition={{
                        rotate: { duration: 0.5 },
                        scale: { duration: 0.3 },
                      }}
                    >
                      <Icone
                        style={{
                          fontSize: "40px",
                          color: "#e91e63",
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      style={{
                        position: "relative",
                        zIndex: 1,
                        fontFamily: "Playfair Display, serif",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "#ad1457",
                        marginBottom: "12px",
                      }}
                      animate={
                        hoveredIndex === index ? { color: "#e91e63" } : {}
                      }
                    >
                      {servico.titulo}
                    </motion.h3>

                    {/* Description */}
                    <p
                      style={{
                        position: "relative",
                        zIndex: 1,
                        color: "#5a4a5a",
                        fontSize: "0.95rem",
                        marginBottom: "20px",
                        lineHeight: "1.6",
                      }}
                    >
                      {servico.descricao}
                    </p>

                    {/* Details List */}
                    <motion.ul
                      style={{
                        position: "relative",
                        zIndex: 1,
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 20px 0",
                        textAlign: "left",
                      }}
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                      transition={{ duration: 0.3 }}
                    >
                      {servico.detalhes.map((detalhe, i) => (
                        <motion.li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.85rem",
                            color: "#5a4a5a",
                            marginBottom: "6px",
                          }}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: hoveredIndex === index ? i * 0.05 : 0,
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "#e91e63",
                            }}
                          />
                          {detalhe}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Price */}
                    <motion.div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        padding: "12px 20px",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, #ffeef6, #fce4ec)",
                        color: "#e91e63",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}
                      animate={
                        hoveredIndex === index
                          ? {
                              scale: 1.05,
                              background:
                                "linear-gradient(135deg, #e91e63, #ad1457)",
                              color: "white",
                            }
                          : {}
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {servico.preco}
                    </motion.div>

                    {/* Shine effect on hover */}
                    {hoveredIndex === index && (
                      <motion.div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: -100,
                          width: "50%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                          transform: "skewX(-20deg)",
                        }}
                        animate={{ left: "200%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
