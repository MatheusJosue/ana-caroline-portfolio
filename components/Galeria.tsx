'use client'
import { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { motion } from 'framer-motion'

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: Math.min(i * 0.05, 0.5), // Cap delay for better UX
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}

export default function Galeria() {
  const [showModal, setShowModal] = useState(false)
  const [selectedFoto, setSelectedFoto] = useState<typeof fotos[0] | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const openModal = (foto: typeof fotos[0]) => {
    setSelectedFoto(foto)
    setShowModal(true)
  }

  return (
    <section id="galeria" className="section" style={{ position: 'relative' }}>
      {/* Background decoration */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <span style={{ fontSize: '28px' }}>✂️</span>
            </motion.div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
              }}
            >
              Transformações
            </h2>
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <span style={{ fontSize: '28px' }}>✨</span>
            </motion.div>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#5a4a5a' }}>
            Veja o antes e depois dos meus trabalhos
          </p>
        </motion.div>

        <Row>
          {fotos.map((foto, index) => (
            <Col key={foto.id} sm={6} lg={4} className="mb-4">
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  onClick={() => openModal(foto)}
                  style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.7))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '24px',
                    padding: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(233, 30, 99, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                  animate={
                    hoveredIndex === index
                      ? {
                          boxShadow: '0 20px 60px rgba(233, 30, 99, 0.2)',
                          y: -8,
                        }
                      : {
                          boxShadow: '0 8px 32px rgba(233, 30, 99, 0.1)',
                          y: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Row className="text-center">
                    <Col xs={6}>
                      <motion.p
                        style={{ color: '#ad1457', fontWeight: 600, marginBottom: '10px', fontSize: '0.9rem' }}
                        animate={hoveredIndex === index ? { color: '#e91e63' } : {}}
                      >
                        Antes
                      </motion.p>
                      <motion.div
                        style={{
                          position: 'relative',
                          width: '100%',
                          aspectRatio: '1',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          border: '2px solid rgba(173, 20, 87, 0.1)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={foto.antes}
                          alt={`${foto.nome} - Antes`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </motion.div>
                    </Col>
                    <Col xs={6}>
                      <motion.p
                        style={{ color: '#e91e63', fontWeight: 600, marginBottom: '10px', fontSize: '0.9rem' }}
                      >
                        Depois
                      </motion.p>
                      <motion.div
                        style={{
                          position: 'relative',
                          width: '100%',
                          aspectRatio: '1',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          border: '2px solid rgba(233, 30, 99, 0.3)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={foto.depois}
                          alt={`${foto.nome} - Depois`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                  <p
                    style={{
                      textAlign: 'center',
                      marginTop: '16px',
                      color: '#ad1457',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      marginBottom: 0,
                    }}
                  >
                    {foto.nome}
                  </p>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Modal with animations */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          contentClassName="glass-card"
        >
          <Modal.Header
            closeButton
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 240, 245, 0.8))',
              backdropFilter: 'blur(20px)',
              borderBottom: 'none',
              borderRadius: '24px 24px 0 0',
            }}
          >
            <Modal.Title
              style={{
                color: '#ad1457',
                fontWeight: 700,
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'Playfair Display, serif',
              }}
            >
              <motion.span animate={{ rotate: [0, -15, 15, -15, 0] }} transition={{ duration: 1 }}>
                ✂️
              </motion.span>
              {selectedFoto?.nome}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 240, 245, 0.8))',
              backdropFilter: 'blur(20px)',
              borderRadius: '0 0 24px 24px',
            }}
          >
            <Row className="text-center">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontWeight: 700, color: '#ad1457', fontSize: '1.2rem', marginBottom: '16px' }}
                >
                  Antes
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '3px solid rgba(173, 20, 87, 0.2)',
                  }}
                >
                  <img
                    src={selectedFoto?.antes || ''}
                    alt={`${selectedFoto?.nome} - Antes`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              </Col>
              <Col xs={12} md={6}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ fontWeight: 700, color: '#e91e63', fontSize: '1.2rem', marginBottom: '16px' }}
                >
                  Depois
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '3px solid rgba(233, 30, 99, 0.4)',
                  }}
                >
                  <img
                    src={selectedFoto?.depois || ''}
                    alt={`${selectedFoto?.nome} - Depois`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  )
}
