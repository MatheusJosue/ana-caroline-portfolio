'use client'
import { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'

// Placeholder - substituir com fotos reais
const fotos = [
  { id: 1, antes: '🐶', depois: '🐩', nome: 'Max' },
  { id: 2, antes: '🐕', depois: '🦮', nome: 'Bella' },
  { id: 3, antes: '🐶', depois: '🐕‍🦺', nome: 'Thor' },
  { id: 4, antes: '🐩', depois: '🐕', nome: 'Luna' },
  { id: 5, antes: '🦮', depois: '🐶', nome: 'Buddy' },
  { id: 6, antes: '🐕‍🦺', depois: '🐩', nome: 'Sofia' }
]

export default function Galeria() {
  const [showModal, setShowModal] = useState(false)
  const [selectedFoto, setSelectedFoto] = useState<typeof fotos[0] | null>(null)

  const openModal = (foto: typeof fotos[0]) => {
    setSelectedFoto(foto)
    setShowModal(true)
  }

  return (
    <section id="galeria" className="section">
      <Container>
        <h2 style={{ textAlign: 'center', color: '#880e4f', marginBottom: '20px' }}>
          Transformações
        </h2>
        <p style={{ textAlign: 'center', color: '#ad1457', marginBottom: '50px' }}>
          Veja o antes e depois dos meus trabalhos
        </p>

        <Row>
          {fotos.map((foto) => (
            <Col key={foto.id} sm={6} lg={4} className="mb-4">
              <div
                className="glass-card"
                style={{
                  padding: '15px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => openModal(foto)}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Row className="text-center">
                  <Col xs={6}>
                    <p style={{ color: '#880e4f', fontWeight: 600, marginBottom: '10px' }}>Antes</p>
                    <div style={{
                      fontSize: '40px',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      padding: '20px'
                    }}>
                      {foto.antes}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <p style={{ color: '#ec407a', fontWeight: 600, marginBottom: '10px' }}>Depois</p>
                    <div style={{
                      fontSize: '40px',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      padding: '20px'
                    }}>
                      {foto.depois}
                    </div>
                  </Col>
                </Row>
                <p style={{ textAlign: 'center', marginTop: '15px', color: '#4a0e2e', fontWeight: 600 }}>
                  {foto.nome}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton style={{ background: '#fce4ec' }}>
            <Modal.Title>{selectedFoto?.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: '#fce4ec' }}>
            <Row className="text-center">
              <Col xs={6}>
                <p style={{ fontWeight: 600 }}>Antes</p>
                <div style={{ fontSize: '80px' }}>{selectedFoto?.antes}</div>
              </Col>
              <Col xs={6}>
                <p style={{ fontWeight: 600 }}>Depois</p>
                <div style={{ fontSize: '80px' }}>{selectedFoto?.depois}</div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  )
}
