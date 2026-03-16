'use client'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contato" style={{ background: 'rgba(255,255,255,0.3)', padding: '60px 0' }}>
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h3 style={{ color: '#880e4f', marginBottom: '20px' }}>Entre em Contato</h3>
            <p style={{ color: '#4a0e2e', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaWhatsapp style={{ color: '#25D366' }} />
              <strong>WhatsApp:</strong> (11) 97377-2653
            </p>
            <p style={{ color: '#4a0e2e', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaMapMarkerAlt style={{ color: '#ec407a' }} />
              <strong>Localização:</strong> São Paulo, SP
            </p>
            <p style={{ color: '#4a0e2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaClock style={{ color: '#880e4f' }} />
              <strong>Horário:</strong> Seg a Sex - 9h às 18h
            </p>

            <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Button
                href="https://wa.me/5511973772653"
                target="_blank"
                style={{
                  backgroundColor: '#25D366',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <FaWhatsapp />
                WhatsApp
              </Button>
              <Button
                href="https://www.instagram.com/anacarol_sol/"
                target="_blank"
                style={{
                  backgroundColor: '#ec407a',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <FaInstagram />
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
                <FaMapMarkerAlt size={50} style={{ color: '#ec407a' }} />
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
