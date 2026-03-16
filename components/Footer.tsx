'use client'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer id="contato" style={{ background: 'rgba(255,255,255,0.3)', padding: '60px 0' }}>
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h3 style={{ color: '#880e4f', marginBottom: '20px' }}>Entre em Contato</h3>
            <p style={{ color: '#4a0e2e', marginBottom: '15px' }}>
              📱 WhatsApp: (00) 12345-6789
            </p>
            <p style={{ color: '#4a0e2e', marginBottom: '15px' }}>
              📍 Localização: Cidade, Estado
            </p>
            <p style={{ color: '#4a0e2e' }}>
              ⏰ Horário: Seg a Sex - 9h às 18h
            </p>

            <div style={{ marginTop: '30px' }}>
              <Button
                href="https://wa.me/55SEUNUMERO"
                target="_blank"
                style={{
                  backgroundColor: '#25D366',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  marginRight: '15px'
                }}
              >
                WhatsApp
              </Button>
              <Button
                href="https://instagram.com"
                target="_blank"
                variant="outline-secondary"
                style={{
                  borderColor: '#880e4f',
                  color: '#880e4f',
                  padding: '12px 30px',
                  borderRadius: '30px'
                }}
              >
                Instagram
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="glass-card" style={{ padding: '30px' }}>
              <h4 style={{ color: '#880e4f', marginBottom: '20px' }}>
                Venha nos visitar!
              </h4>
              <p style={{ color: '#4a0e2e' }}>
                Seu pet merece um tratamento especial. Agende já o horário
                e venha conhecer nosso espaço!
              </p>
              <div style={{
                height: '150px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px'
              }}>
                <span style={{ fontSize: '50px' }}>📍</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p style={{ color: '#880e4f', fontSize: '0.9rem' }}>
              © 2026 Ana Caroline - Tosadora Profissional. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
