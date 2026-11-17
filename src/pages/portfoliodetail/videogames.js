import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Componentes reutilizables ──────────────────────────────
import VideoSection from "../../components/VideoSection";

// Contenido reutilizable (también se muestra en /portfolio)
export const VideoGamesContent = () => (
  <>
    <VideoSection
      videoId="4qwmdyZns3Q"
      title="Gold Gold Adventure Gold"
      description="In this world, it’s all about the gold! Use it to build up a fantasy town, recruit heroes, give quests, raise a Godbeast, cast powerful spells, and expand your influence—all one gold coin at a time."
      steamUrl="https://store.steampowered.com/app/3133650"
      tags={["Unity 3D", "C#", "Wwise"]}
    />
    <VideoSection
      videoId="q7JfhZ5yVT0?si=sL7sc2XzdNkCRCuH"
      title="Islanders"
      description="ISLANDERS is a minimalist strategy game about building cities on colorful islands."
      steamUrl="https://store.steampowered.com/app/2368930/ISLANDERS_New_Shores/"
      tags={["Unity 3D", "C#", "Fmod"]}
    />
  </>
);

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
          <VideoGamesContent />
        </div>
      </Container>
    </HelmetProvider>
  );
}
