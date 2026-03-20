"use client";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaPaw } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contato", href: "#contato" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <Navbar
        fixed="top"
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className="glass-card"
        style={{
          margin: scrolled ? "5px 15px" : "15px",
          borderRadius: "24px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(233, 30, 99, 0.15)"
            : "0 4px 16px rgba(233, 30, 99, 0.08)",
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              background: "linear-gradient(135deg, #e91e63, #ad1457)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="d-flex align-items-center gap-2"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaPaw style={{ color: "#e91e63" }} />
            </motion.div>
            Ana Caroline
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              border: "none",
              color: "#ad1457",
              padding: "8px 12px",
            }}
          >
            <motion.div
              animate={expanded ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navVariants}
                >
                  <Nav.Link
                    href={link.href}
                    style={{
                      color: "#5a4a5a",
                      fontWeight: 500,
                      padding: "10px 18px",
                      borderRadius: "12px",
                      position: "relative",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ad1457";
                      e.currentTarget.style.background =
                        "rgba(233, 30, 99, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#5a4a5a";
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={() => setExpanded(false)}
                  >
                    {link.name}
                  </Nav.Link>
                </motion.div>
              ))}

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="d-flex gap-2 ms-2"
              >
                <Nav.Link
                  href="https://wa.me/5511973772653"
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(37, 211, 102, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  title="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </Nav.Link>

                <Nav.Link
                  href="https://www.instagram.com/anacarol_sol/"
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(225, 48, 108, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  title="Instagram"
                >
                  <FaInstagram size={18} />
                </Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}
