'use client'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <Navbar fixed="top" expand="lg" className="glass-card" style={{ margin: '10px', borderRadius: '16px' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#880e4f' }}>
          Ana Caroline
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#sobre" style={{ color: '#880e4f' }}>Sobre</Nav.Link>
            <Nav.Link href="#servicos" style={{ color: '#880e4f' }}>Serviços</Nav.Link>
            <Nav.Link href="#galeria" style={{ color: '#880e4f' }}>Galeria</Nav.Link>
            <Nav.Link href="#depoimentos" style={{ color: '#880e4f' }}>Depoimentos</Nav.Link>
            <Nav.Link href="#contato" style={{ color: '#880e4f' }}>Contato</Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/anacarol_sol/"
              target="_blank"
              style={{ marginLeft: '10px', color: '#ec407a' }}
              title="Instagram"
            >
              <FaInstagram size={22} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
