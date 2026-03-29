import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Fullscreen from "../../../components/fullscreen/fullscreen"
// ── Componentes reutilizables ──────────────────────────────
import VideoGrid from "../../../components/videogrid/videogrid";
// ── Assets ────────────────────────────────────────────────
import roca from  "../../../assets/videos/roca.mp4"

const videos = [
  { videoId: "6n2y2CfXEQs?si=IQEc9_vtDbf5BItc" },
  { videoId: "kJQP7kiw5Fk" },
  { videoId: "3JZ_D3ELwOQ" },
];

export default function LinearMedia() {
  return (
    <HelmetProvider>
      <Container className="pd_container_main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Linear Media | Rafa Carrion</title>
        </Helmet>

        {/* Background Decors */}
        <div className="pd-glow pd-glow-1"></div>
        <div className="pd-glow pd-glow-2"></div>

        <div className="pd_container">
          <Fullscreen videoSrc={roca} />
          {/* TÍTULO */}
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="pd_page_title mb-4">Linear Media</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="pd_longdesc">Sound design, mixing and mastering for linear media</p>
            </Col>
            <Col lg="4" className="d-flex align-items-center justify-content-end">
              <Link to="/portfolio" className="pd_back_link">
                Back to Portfolio
              </Link>
            </Col>
          </Row>
          {/* ------------ VIDEOS----------- */}
          <VideoGrid videos={videos} />
        </div>
      </Container>
    </HelmetProvider>
  );
}
