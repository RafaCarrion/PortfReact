import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const VideoGamesDetail = () => {
  const { id } = useParams();
  const project = dataportfolio.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <Container className="About-header">
        <p>VIDEOGAMES</p>
        <Link to="/portfolio">← Volver al portfolio</Link>
      </Container>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {project.title} | {meta.title}
          </title>
          <meta name="description" content={project.description} />
        </Helmet>

        {/* ── Cabecera ── */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{project.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* ── Imagen principal / galería ── */}
        <Row className="sec_sp">
          <Col lg="8">
            <div className="pd_main_img">
              <img
                src={project.images[activeImg]}
                alt={project.title}
                className="img-fluid"
              />
            </div>

            {/* Miniaturas — solo si hay más de 1 imagen */}
            {project.images.length > 1 && (
              <div className="pd_thumbnails">
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className={`pd_thumb ${activeImg === i ? "active" : ""}`}
                    onClick={() => setActiveImg(i)}
                  />
                ))}
              </div>
            )}
          </Col>

          {/* ── Info lateral ── */}
          <Col lg="4" className="pd_sidebar">
            {/* Tecnologías */}
            <div className="pd_section">
              <h5 className="pd_section_title">Tecnologías</h5>
              <div className="pd_tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="pd_tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="pd_section">
                <h5 className="pd_section_title">Links</h5>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd_link_btn"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd_link_btn"
                  >
                    Demo →
                  </a>
                )}
              </div>
            )}
          </Col>
        </Row>

        {/* ── Descripción larga ── */}
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Sobre el proyecto</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-start">
            <p className="pd_longdesc">{project.longdesc}</p>
          </Col>
        </Row>

        {/* ── Volver ── */}
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
