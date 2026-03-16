'use client'
import { Container, Row, Col, Card } from 'react-bootstrap'

const servicos = [
  {
    titulo: 'Banho',
    descricao: 'Banho completo com produtos específicos para cada tipo de pelagem',
    icone: '🚿',
    preco: 'A partir de R$ 50'
  },
  {
    titulo: 'Tosa',
    descricao: 'Tosa estética ou higiênica, conforme sua preferência',
    icone: '✂️',
    preco: 'A partir de R$ 60'
  },
  {
    titulo: 'Banho + Tosa',
    descricao: 'Pacote completo com banho e tosa para seu pet ficar novinho',
    icone: '✨',
    preco: 'A partir de R$ 90'
  },
  {
    titulo: 'Hidratação',
    descricao: 'Tratamento profundo para pelagens secas ou danificadas',
    icone: '💎',
    preco: 'A partir de R$ 30'
  }
]

export default function Servicos() {
  return (
    <section id="servicos" className="section">
      <Container>
        <h2 style={{ textAlign: 'center', color: '#880e4f', marginBottom: '50px' }}>
          Serviços
        </h2>
        <Row>
          {servicos.map((servico, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="glass-card h-100" style={{
                border: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(236, 64, 122, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <Card.Body style={{ padding: '30px', textAlign: 'center' }}>
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>
                    {servico.icone}
                  </div>
                  <Card.Title style={{ color: '#880e4f', fontWeight: 600 }}>
                    {servico.titulo}
                  </Card.Title>
                  <Card.Text style={{ color: '#4a0e2e', fontSize: '0.9rem' }}>
                    {servico.descricao}
                  </Card.Text>
                  <p style={{
                    color: '#ec407a',
                    fontWeight: 700,
                    marginTop: '15px'
                  }}>
                    {servico.preco}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
