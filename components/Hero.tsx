'use client'
import { Container, Button } from 'react-bootstrap'

interface HeroProps {
  nome: string
  subtitulo: string
  fotoUrl?: string
}

export default function Hero({ nome, subtitulo, fotoUrl }: HeroProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/55SEUNUMERO', '_blank')
  }

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px'
    }}>
      <Container className="text-center">
        <div className="fade-in-up">
          <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 30px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            border: '4px solid rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            overflow: 'hidden'
          }}>
            {fotoUrl ? (
              <img src={fotoUrl} alt={nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              '🐩'
            )}
          </div>

          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#880e4f',
            marginBottom: '10px'
          }}>
            {nome}
          </h1>

          <p style={{
            fontSize: '1.5rem',
            color: '#ad1457',
            marginBottom: '30px'
          }}>
            {subtitulo}
          </p>

          <Button
            onClick={handleWhatsApp}
            className="whatsapp-btn"
            style={{
              backgroundColor: '#25D366',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.2rem',
              borderRadius: '50px',
              fontWeight: 600
            }}
          >
            📱 Agendar Horário
          </Button>
        </div>
      </Container>
    </section>
  )
}
