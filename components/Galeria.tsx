"use client";

import { useRef, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaCut, FaMagic, FaPaw } from "react-icons/fa";
import { motion } from "framer-motion";

const fotos = Array.from({ length: 17 }, (_, index) => index + 1)
  .filter((id) => id !== 11)
  .map((id) => ({
    id,
    antes: `/images/antes${id}.jpeg`,
    depois: `/images/depois${id}.jpeg`,
    nome: `Transformação ${id}`,
  }));

export default function Galeria() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState<(typeof fotos)[0] | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openModal = (foto: (typeof fotos)[0]) => {
    setSelectedFoto(foto);
    setShowModal(true);
  };

  const scrollGallery = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstSlide = carousel.querySelector<HTMLElement>(".gallery-slide");
    const slideWidth = firstSlide?.offsetWidth || carousel.clientWidth;
    const gap = 20;

    carousel.scrollBy({
      left: direction === "next" ? slideWidth + gap : -(slideWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="galeria" className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flyer-section-title"
        >
          <span className="flyer-eyebrow">
            <FaCut />
            Antes e depois
          </span>
          <h2 className="flyer-title">Transformações</h2>
          <p className="flyer-subtitle">Veja alguns resultados de banho, tosa e acabamento.</p>
        </motion.div>

        <div className="gallery-carousel-shell">
          <div className="gallery-carousel-actions" aria-label="Navegação da galeria">
            <button
              type="button"
              className="gallery-nav"
              onClick={() => scrollGallery("previous")}
              aria-label="Ver transformações anteriores"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="gallery-nav"
              onClick={() => scrollGallery("next")}
              aria-label="Ver próximas transformações"
            >
              <FaChevronRight />
            </button>
          </div>

          <div ref={carouselRef} className="gallery-carousel">
            {fotos.map((foto, index) => (
              <motion.button
                key={foto.id}
                type="button"
                onClick={() => openModal(foto)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.35) }}
                whileHover={{ y: -4 }}
                className="flyer-card gallery-card gallery-slide"
              >
                <Row className="g-2">
                  <Col xs={6}>
                    <img className="gallery-image" src={foto.antes} alt={`${foto.nome} antes`} />
                    <p className="gallery-label">Antes</p>
                  </Col>
                  <Col xs={6}>
                    <img className="gallery-image" src={foto.depois} alt={`${foto.nome} depois`} />
                    <p className="gallery-label">Depois</p>
                  </Col>
                </Row>
              </motion.button>
            ))}
          </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
          <Modal.Header closeButton style={{ borderBottom: "1px solid var(--color-line)" }}>
            <Modal.Title style={{ color: "var(--color-primary-dark)", fontWeight: 800 }}>
              <FaMagic style={{ marginRight: 10 }} />
              {selectedFoto?.nome}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "var(--color-cream)" }}>
            <Row className="text-center g-3">
              <Col md={6}>
                <p className="gallery-label">
                  <FaPaw style={{ marginRight: 8 }} />
                  Antes
                </p>
                <img
                  src={selectedFoto?.antes || ""}
                  alt={`${selectedFoto?.nome} antes`}
                  style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 8 }}
                />
              </Col>
              <Col md={6}>
                <p className="gallery-label">
                  <FaPaw style={{ marginRight: 8 }} />
                  Depois
                </p>
                <img
                  src={selectedFoto?.depois || ""}
                  alt={`${selectedFoto?.nome} depois`}
                  style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 8 }}
                />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}
