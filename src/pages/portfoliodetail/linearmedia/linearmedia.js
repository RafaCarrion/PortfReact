import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Fullscreen from "../../../components/fullscreen/fullscreen"
// ── Componentes reutilizables ──────────────────────────────
import VideoGrid from "../../../components/videogrid/videogrid";
// ── Assets ────────────────────────────────────────────────
import img1 from "../../..//assets/images/berkleeWorkShop1.jpg";
import img2 from "../../../assets/images/berkleeWorkShop1.jpg";
import roca from  "../../../assets/videos/roca.mp4"
// ── Videos Commercial ────────────────────────────────────────────────

const videos = [
  { videoId: "6n2y2CfXEQs?si=IQEc9_vtDbf5BItc" },
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
        <Fullscreen videoSrc = {roca}  />
        {/* TÍTULO */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Linear Media</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="pd_longdesc"> `Sound design, mixing and mastering for linear media´</p>
          </Col>
        </Row>
        {/* ------------ VIDEOS----------- */}
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
