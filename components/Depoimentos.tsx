'use client'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const depoimentos = [
  {
    nome: 'Mariana Silva',
    pet: 'Thor (Golden)',
    texto: 'O Thor amou o atendimento! A Ana é muito paciente e cuidadosa. Ficou lindíssimo!',
    nota: 5
  },
  {
    nome: 'Carlos Oliveira',
    pet: 'Luna (Poodle)',
    texto: 'Minha Luna ficou maravilhosa. Recomendo muito o trabalho da Ana!',
    nota: 5
  },
  {
    nome: 'Juliana Santos',
    pet: 'Buddy (Shih Tzu)',
    texto: 'Melhor tosadora da região! O Buddy fica sempre gorgeous e feliz.',
    nota: 5
  }
]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section">
      <Container>
        <h2 style={{ textAlign: 'center', color: '#880e4f', marginBottom: '50px' }}>
          O que os clientes dizem
        </h2>

        <Carousel indicators={false} interval={4000}>
          {depoimentos.map((depoimento, index) => (
            <Carousel.Item key={index}>
              <div className="glass-card" style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
                <Row className="text-center">
                  <Col>
                    <div style={{ fontSize: '40px', marginBottom: '20px' }}>
                      {'⭐'.repeat(depoimento.nota)}
                    </div>
                    <p style={{
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      color: '#4a0e2e',
                      marginBottom: '20px'
                    }}>
                      "{depoimento.texto}"
                    </p>
                    <h5 style={{ color: '#880e4f' }}>{depoimento.nome}</h5>
                    <p style={{ color: '#ad1457' }}>{depoimento.pet}</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
