import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

// ── Componentes reutilizables ──────────────────────────────
import VideoGrid from "../../components/videogrid/videogrid";


// ── Assets ────────────────────────────────────────────────
import img1 from "../../assets/images/berkleeWorkShop1.jpg";
import img2 from "../../assets/images/berkleeWorkShop1.jpg";
// ── Videos Commercial ────────────────────────────────────────────────

const videos = [
  { videoId: "dQw4w9WgXcQ" },
  { videoId: "kJQP7kiw5Fk" },
  { videoId: "3JZ_D3ELwOQ" },
];
const images = [img1, img2];

export default function LinearMedia() {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Linear Media</title>
        </Helmet>

        {/* TÍTULO */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Linear Media</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <VideoGrid videos={videos} />
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
