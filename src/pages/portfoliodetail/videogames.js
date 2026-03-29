import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Componentes reutilizables ──────────────────────────────
import VideoSection from "../../components/VideoSection";

export default function VideoGamesPage() {
  return (
    <HelmetProvider>
      <Container className="pd_container_main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Video Games | Rafa Carrion</title>
        </Helmet>

        {/* Background Decors */}
        <div className="pd-glow pd-glow-1"></div>
        <div className="pd-glow pd-glow-2"></div>

        <div className="pd_container">
          {/* TÍTULO */}
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="pd_page_title mb-4">Videogames</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
            <Col lg="4" className="d-flex align-items-center justify-content-end">
              <Link to="/portfolio" className="pd_back_link">
                Back to Portfolio
              </Link>
            </Col>
          </Row>

          {/* VIDEO + DESCRIPCIÓN CORTA */}
          <VideoSection
            videoId="4qwmdyZns3Q"
            title="Gold Gold Adventure Gold"
            description="El oro domina el mundo. Disfruta del caos de la construcción de ciudades..."
            steamUrl="https://store.steampowered.com/app/3133650"
            tags={["Unity 3D", "C#", "Wwise"]}
          />
          <VideoSection
            videoId="q7JfhZ5yVT0?si=sL7sc2XzdNkCRCuH"
            title="Islanders"
            description="Esto es ISLANDERS: New Shores. Construye un retiro isleño en un mundo tranquilo y minimalista. Disfruta de las nuevas y emocionantes funciones que mantienen el encanto de siempre a la vez que inspiran una creatividad renovada."
            steamUrl="https://store.steampowered.com/app/2368930/ISLANDERS_New_Shores/"
            tags={["Unity 3D", "C#", "Fmod"]}
          />
        </div>
      </Container>
    </HelmetProvider>
  );
}
