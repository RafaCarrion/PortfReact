import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import '../pages/portfoliodetail/style.css';

const ImageGallery = ({ images, tags = [], githubUrl, demoUrl }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <Row className="sec_sp">
      <Col lg="8">
        <div className="pd_main_img">
          <img src={images[activeImg]} alt="screenshot" className="img-fluid" />
        </div>
        {images.length > 1 && (
          <div className="pd_thumbnails">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`foto ${i + 1}`}
                className={`pd_thumb ${activeImg === i ? "active" : ""}`}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
        )}
      </Col>

      <Col lg="4" className="pd_sidebar">
        {tags.length > 0 && (
          <div className="pd_section">
             <p>En los workshops se ttrantan temas como implementación en el game engine.
              Implementacion de middleware.
             </p>
          </div>
        )}

        {(githubUrl || demoUrl) && (
          <div className="pd_section">
            <h5 className="pd_section_title">Links</h5>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="pd_link_btn">
                GitHub →
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="pd_link_btn">
                Demo →
              </a>
            )}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ImageGallery;
