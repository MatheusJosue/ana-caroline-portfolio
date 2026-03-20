'use client'
import { Container, Button } from 'react-bootstrap'
import { FaWhatsapp, FaPaw, FaHeart, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroProps {
  nome: string
  subtitulo: string
  fotoUrl?: string
}

export default function Hero({ nome, subtitulo, fotoUrl }: HeroProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511973772653', '_blank')
  }

  // Floating paw decorations
  const pawPositions = [
    { top: '15%', left: '10%', delay: 0, size: 24 },
    { top: '25%', right: '15%', delay: 0.5, size: 20 },
    { top: '70%', left: '8%', delay: 1, size: 28 },
    { top: '60%', right: '10%', delay: 1.5, size: 22 },
    { top: '80%', left: '20%', delay: 2, size: 18 },
    { top: '45%', right: '8%', delay: 2.5, size: 26 },
  ]

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Paw Decorations */}
      {pawPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="floating"
          style={{
            position: 'absolute',
            top: pos.top,
            left: pos.left,
            right: pos.right,
            opacity: 0.08,
            color: '#ad1457',
            animationDelay: `${pos.delay}s`,
            zIndex: 0,
          }}
        >
          <FaPaw size={pos.size} />
        </motion.div>
      ))}

      <Container className="text-center" style={{ position: 'relative', zIndex: 1 }}>
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            width: '220px',
            height: '220px',
            margin: '0 auto 40px',
            borderRadius: '50%',
            background:
              'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.8))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '4px solid rgba(255, 255, 255, 0.6)',
            boxShadow:
              '0 20px 60px rgba(233, 30, 99, 0.2), 0 0 0 1px rgba(233, 30, 99, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '90px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Animated ring around avatar */}
          <motion.div
            style={{
              position: 'absolute',
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
              borderRadius: '50%',
              border: '2px dashed rgba(233, 30, 99, 0.3)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />

          {fotoUrl ? (
            <img
              src={fotoUrl}
              alt={nome}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🐩
            </motion.div>
          )}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            fontFamily: 'Playfair Display, serif',
            background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 50%, #880e4f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px',
            letterSpacing: '-0.02em',
          }}
        >
          {nome}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaHeart style={{ color: '#e91e63' }} size={16} />
          </motion.div>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 500,
              color: '#ad1457',
              margin: 0,
            }}
          >
            {subtitulo}
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          >
            <FaHeart style={{ color: '#e91e63' }} size={16} />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontSize: '1.1rem',
            color: '#5a4a5a',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Cuidado profissional e carinho para seu melhor amigo
        </motion.p>

        {/* Stars decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '30px',
          }}
        >
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + i * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
            >
              <FaStar style={{ color: '#f48fb1', fill: '#f48fb1' }} size={14} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleWhatsApp}
              className="whatsapp-btn"
              style={{
                background:
                  'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                border: 'none',
                padding: '18px 48px',
                fontSize: '1.15rem',
                borderRadius: '50px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                color: 'white',
                boxShadow:
                  '0 8px 30px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 12px 40px rgba(37, 211, 102, 0.4), 0 0 0 8px rgba(37, 211, 102, 0)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 8px 30px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.4)'
              }}
            >
              <motion.div
                animate={{ rotate: [0, -15, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaWhatsapp size={22} />
              </motion.div>
              Agendar Horário
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              color: '#ad1457',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <span style={{ opacity: 0.8 }}>Continue rolando</span>
            <span style={{ fontSize: '28px', opacity: 0.9 }}>↓</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
