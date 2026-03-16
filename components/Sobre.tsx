"use client";
import { Container, Row, Col } from "react-bootstrap";

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <Container>
        <h2
          style={{
            textAlign: "center",
            color: "#880e4f",
            marginBottom: "50px",
          }}
        >
          Sobre Mim
        </h2>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="glass-card" style={{ padding: "40px" }}>
              <h3 style={{ color: "#880e4f", marginBottom: "20px" }}>
                Amoroso cuidado para seu pet
              </h3>
              <p style={{ lineHeight: 1.8, color: "#4a0e2e" }}>
                Olá! Sou a Ana Caroline, tosadora com paixão por animais. Meu
                objetivo é proporcionar uma experiência positiva e relaxante
                para seu pet, sempre com muito cuidado, paciência e amor.
              </p>
              <p
                style={{ lineHeight: 1.8, color: "#4a0e2e", marginTop: "15px" }}
              >
                Utilizo produtos de qualidade e técnicas modernas para garantir
                o melhor resultado no banho e tosa do seu melhor amigo.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                height: "300px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "100px",
              }}
            >
              🐕
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
