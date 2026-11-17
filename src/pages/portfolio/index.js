import React, { useEffect, useState } from "react";
import "./style.css";
import "../portfoliodetail/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { meta } from "../../content_option";

import { VideoGamesContent } from "../portfoliodetail/videogames";
import { LinearMediaContent } from "../portfoliodetail/linearmedia/linearmedia";
import { WorkshopsContent } from "../portfoliodetail/workshops";

// ── Categorías del portfolio ──────────────────────────────
// Para añadir una nueva sección: crea su componente *Content y añádelo aquí.
export const portfolioSections = [
  {
    id: "videogames",
    title: "Video Games",
    subtitle: "Unity3D programming, middleware implementation and repository management.",
    Content: VideoGamesContent,
  },
  {
    id: "linearmedia",
    title: "Linear Media",
    subtitle: "Sound design, mixing and mastering for linear media",
    Content: LinearMediaContent,
  },
  {
    id: "workshops",
    title: "Workshops",
    subtitle: "Video games audio workshops and classes",
    Content: WorkshopsContent,
  },
];

const scrollToSection = (id, behavior = "smooth") => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior, block: "start" });
};

export const Portfolio = () => {
  const location = useLocation();
  const [active, setActive] = useState(portfolioSections[0].id);

  // Saltar a la sección si se llega con /portfolio#videogames (p. ej. desde el menú)
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    // espera a que termine la transición de página
    const t = setTimeout(() => scrollToSection(id), 450);
    return () => clearTimeout(t);
  }, [location]);

  // Resalta la pestaña de la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    portfolioSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleTab = (id) => {
    setActive(id);
    scrollToSection(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Background Decors */}
        <div className="portfolio-glow portfolio-glow-1"></div>
        <div className="portfolio-glow portfolio-glow-2"></div>

        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Barra de categorías fija: un clic y saltas a cada sección */}
        <nav className="po_tabs" aria-label="Portfolio categories">
          {portfolioSections.map(({ id, title }) => (
            <button
              key={id}
              type="button"
              className={`po_tab ${active === id ? "active" : ""}`}
              onClick={() => handleTab(id)}
            >
              {title}
            </button>
          ))}
        </nav>

        <div className="po_sections">
          {portfolioSections.map(({ id, title, subtitle, Content }) => (
            <section key={id} id={id} className="po_section">
              <div className="po_section_head">
                <h2 className="po_section_title">{title}</h2>
                {subtitle && <p className="po_section_sub">{subtitle}</p>}
              </div>
              <Content />
            </section>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
