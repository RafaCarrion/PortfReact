import { Row, Col } from "react-bootstrap";

const WideImage = ({ src, title, alt = "imagen" }) => (
  <Row className="sec_sp">
    <Col lg="12">
      {title && <h3 className="color_sec py-4">{title}</h3>}
      <img src={src} alt={alt} className="img-fluid" />
    </Col>
  </Row>
);

export default WideImage;
