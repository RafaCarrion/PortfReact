import { Row, Col } from "react-bootstrap";

const TextSection = ({ title, children }) => (
  <Row className="sec_sp">
    <Col lg="4">
      <h3 className="color_sec py-4">{title}</h3>
    </Col>
    <Col lg="8" className="d-flex align-items-start">
      <div className="pd_longdesc">{children}</div>
    </Col>
  </Row>
);

export default TextSection;
