import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../portfoliodetail/style.css";

import img_workshop1 from "../../assets/images/berkleeWorkShop1.jpg"; 
import img_workshop2 from "../../assets/images/berkleeWorkShop2.jpg"; 

export const WorkshopsPage = () => {
  const [activeImg, setActiveImg] = useState(0);

  const images = [
    img_workshop1,  // reemplaza con tus imports
    img_workshop2
  ];

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Video Games Workshops | Portfolio</title>
        </Helmet>

        {/* ── TÍTULO ───────────────────────────────────────── */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Workshops and Classes</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* ── GALERÍA PRINCIPAL ─────────────────────────────── */}
        <Row className="sec_sp">
          <Col lg="8">
            <div className="pd_main_img">
              <img src={images[activeImg]} alt="Workshop" className="img-fluid" />
            </div>
            {images.length > 1 && (
              <div className="pd_thumbnails">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`foto ${i + 1}`}
                    className={`pd_thumb ${activeImg === i ? "active" : ""}`}
                    onClick={() => setActiveImg(i)}
                  />
                ))}
              </div>
            )}
          </Col>

          {/* ── SIDEBAR: TECH + LINKS ─────────────────────────── */}
          <Col lg="4" className="pd_sidebar">
            <div className="pd_section">
              <h5 className="pd_section_title">Tecnologías</h5>
              <div className="pd_tags">
                {["Unity 3D", "C#", "Wwise", "Fmod"].map((t, i) => (   // ← edita tus tecnologías
                  <span key={i} className="pd_tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="pd_section">
              <h5 className="pd_section_title">Links</h5>
              <a href="https://github.com/tuusuario/workshops"
                 target="_blank" rel="noopener noreferrer"
                 className="pd_link_btn">
                GitHub →
              </a>
              {/* <a href="https://tu-demo.com" target="_blank" rel="noopener noreferrer"
                 className="pd_link_btn">
                Demo →
              </a> */}
            </div>
          </Col>
        </Row>

        {/* ── SECCIÓN 1: DESCRIPCIÓN ────────────────────────── */}
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Sobre el proyecto</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-start">
            <p className="pd_longdesc">
              Escribe aquí la descripción principal del proyecto.
              Todo el texto que quieras, sin límite.
            </p>
          </Col>
        </Row>
        
        {/* ── SECCIÓN 2: IMAGEN + TEXTO ─────────────────────── */}
        <Row className="sec_sp align-items-center">
          <Col lg="6">
            <img
              src= {img_workshop1}  /* ← tu imagen */
              alt="detalle"
              className="img-fluid"
            />
          </Col>
          <Col lg="6">
            <h3 className="color_sec py-4">Un subtítulo</h3>
            <p className="pd_longdesc">
              Example of the workshop syllabus. Game audio implememtation in the game engine, Wwise, Fmod.
            </p>
          </Col>
        </Row>

        {/* ── SECCIÓN 3: SOLO TEXTO ─────────────────────────── */}
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Otro apartado</h3>
          </Col>
          <Col lg="8">
            <p className="pd_longdesc">
              Más texto aquí. Puedes añadir listas, tablas,
              lo que necesites dentro del Col.
            </p>
            <ul style={{ color: "var(--text-color)", lineHeight: "2" }}>
              <li>Punto 1</li>
              <li>Punto 2</li>
              <li>Punto 3</li>
            </ul>
          </Col>
        </Row>
        
        {/* ── SECCIÓN 4: IMAGEN ANCHA ───────────────────────── */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Galería extra</h3>
            <img
              src="https://picsum.photos/1200/500?grayscale"  /* ← tu imagen ancha */
              alt="panorámica"
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* ── VOLVER ───────────────────────────────────────── */}
        <Row className="mb-5">
          <Col>
            <Link to="/portfolio" className="pd_back_link">
              ← Volver al portfolio
            </Link>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
