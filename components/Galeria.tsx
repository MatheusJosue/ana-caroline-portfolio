'use client'
import { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Image from 'next/image'

const fotos = [
  { id: 1, antes: '/images/antes1.jpeg', depois: '/images/depois1.jpeg', nome: 'Transformação 1' },
  { id: 2, antes: '/images/antes2.jpeg', depois: '/images/depois2.jpeg', nome: 'Transformação 2' },
  { id: 3, antes: '/images/antes3.jpeg', depois: '/images/depois3.jpeg', nome: 'Transformação 3' },
  { id: 4, antes: '/images/antes4.jpeg', depois: '/images/depois4.jpeg', nome: 'Transformação 4' },
  { id: 5, antes: '/images/antes5.jpeg', depois: '/images/depois5.jpeg', nome: 'Transformação 5' },
  { id: 6, antes: '/images/antes6.jpeg', depois: '/images/depois6.jpeg', nome: 'Transformação 6' },
  { id: 7, antes: '/images/antes7.jpeg', depois: '/images/depois7.jpeg', nome: 'Transformação 7' },
  { id: 8, antes: '/images/antes8.jpeg', depois: '/images/depois8.jpeg', nome: 'Transformação 8' },
  { id: 9, antes: '/images/antes9.jpeg', depois: '/images/depois9.jpeg', nome: 'Transformação 9' },
  { id: 10, antes: '/images/antes10.jpeg', depois: '/images/depois10.jpeg', nome: 'Transformação 10' },
  { id: 11, antes: '/images/antes11.jpeg', depois: '/images/depois11.jpeg', nome: 'Transformação 11' },
  { id: 12, antes: '/images/antes12.jpeg', depois: '/images/depois12.jpeg', nome: 'Transformação 12' },
  { id: 13, antes: '/images/antes13.jpeg', depois: '/images/depois13.jpeg', nome: 'Transformação 13' },
  { id: 14, antes: '/images/antes14.jpeg', depois: '/images/depois14.jpeg', nome: 'Transformação 14' },
  { id: 15, antes: '/images/antes15.jpeg', depois: '/images/depois15.jpeg', nome: 'Transformação 15' },
  { id: 16, antes: '/images/antes16.jpeg', depois: '/images/depois16.jpeg', nome: 'Transformação 16' },
  { id: 17, antes: '/images/antes17.jpeg', depois: '/images/depois17.jpeg', nome: 'Transformação 17' }
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
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1',
                      borderRadius: '10px',
                      overflow: 'hidden'
                    }}>
                      <Image
                        src={foto.antes}
                        alt={`${foto.nome} - Antes`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <p style={{ color: '#ec407a', fontWeight: 600, marginBottom: '10px' }}>Depois</p>
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1',
                      borderRadius: '10px',
                      overflow: 'hidden'
                    }}>
                      <Image
                        src={foto.depois}
                        alt={`${foto.nome} - Depois`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
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

        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
          <Modal.Header closeButton style={{ background: '#fce4ec', borderBottom: 'none' }}>
            <Modal.Title style={{
              color: '#880e4f',
              fontWeight: 700,
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>✂️</span>
              {selectedFoto?.nome}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: '#fce4ec' }}>
            <Row className="text-center">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <p style={{ fontWeight: 700, color: '#880e4f', fontSize: '1.1rem' }}>Antes</p>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '300px',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={selectedFoto?.antes || ''}
                    alt={`${selectedFoto?.nome} - Antes`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <p style={{ fontWeight: 700, color: '#ec407a', fontSize: '1.1rem' }}>Depois</p>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '300px',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={selectedFoto?.depois || ''}
                    alt={`${selectedFoto?.nome} - Depois`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  )
}
