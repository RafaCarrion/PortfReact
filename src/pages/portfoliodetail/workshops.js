import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Componentes reutilizables ──────────────────────────────
import ImageGallery from "../../components/ImageGallery";
import img_workshop1 from "../../assets/images/berkleeWorkShop1.jpg";
import img_workshop2 from "../../assets/images/berkleeWorkShop2.jpg";
import img_workshop3 from "../../assets/images/BerkleeWorkshopGameAudio1.jpeg";

export const WorkshopsPage = () => {
  const images = [
    img_workshop1,  // reemplaza con tus imports
    img_workshop2,
    img_workshop3
  ];

  return (
    <HelmetProvider>
      <Container className="pd_container_main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Workshops | Rafa Carrion</title>
        </Helmet>

        {/* Background Decors */}
        <div className="pd-glow pd-glow-1"></div>
        <div className="pd-glow pd-glow-2"></div>

        <div className="pd_container">
          {/* ── TÍTULO ───────────────────────────────────────── */}
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="pd_page_title mb-4">Workshops and Classes</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
            <Col lg="4" className="d-flex align-items-center justify-content-end">
              <Link to="/portfolio" className="pd_back_link">
                Back to Portfolio
              </Link>
            </Col>
          </Row>
          <ImageGallery
            images={images}
            tags={["Unity 3D", "C#", "Wwise", "Fmod"]}
            githubUrl="https://github.com/tuusuario/gold-game"
          // demoUrl="https://tu-demo.com"   ← descomenta si tienes demo
          />
        </div>
      </Container>
    </HelmetProvider>
  );
};
