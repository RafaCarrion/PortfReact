import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Componentes reutilizables ──────────────────────────────
import VideoSection from "../../components/VideoSection";
import TextSection  from "../../components/TextSection";
import ImageGallery from "../../components/ImageGallery";
import WideImage    from "../../components/WideImage";

// ── Assets ────────────────────────────────────────────────
import img1 from "../../assets/images/berkleeWorkShop1.jpg";
import img2 from "../../assets/images/berkleeWorkShop1.jpg";
import imgWide from "../../assets/images/berkleeWorkShop1.jpg";

const images = [img1, img2];

export default function VideoGamesPage() {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Video Games</title>
        </Helmet>

        {/* TÍTULO */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Videogames</h1>
            <hr className="t_border my-4 ml-0 text-left" />
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
        />

        {/* GALERÍA + SIDEBAR */}
        <ImageGallery
          images={images}
          tags={["Unity 3D", "C#", "Wwise", "Fmod"]}
          githubUrl="https://github.com/tuusuario/gold-game"
          // demoUrl="https://tu-demo.com"   ← descomenta si tienes demo
        />

        {/* DESCRIPCIÓN LARGA */}
        <TextSection title="Sobre el proyecto">
          <p>Escribe aquí la descripción principal del proyecto.</p>
        </TextSection>

        {/* OTRO APARTADO CON LISTA */}
        <TextSection title="Otro apartado">
          <p>Más texto aquí.</p>
          <ul style={{ color: "var(--text-color)", lineHeight: "2" }}>
            <li>Punto 1</li>
            <li>Punto 2</li>
            <li>Punto 3</li>
          </ul>
        </TextSection>

        {/* IMAGEN ANCHA */}
        <WideImage src={imgWide} title="Galería extra" alt="panorámica" />

        {/* VOLVER */}
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
}
