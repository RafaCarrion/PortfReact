import { Row, Col } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";

const VideoSection = ({ videoId, title, description, steamUrl, tags }) => (
  <Row className="sec_sp align-items-center">
    <Col lg="6">
      <div className="ratio ratio-16x9">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allowFullScreen
        />
      </div>
    </Col>
    <Col lg="6">
      <h3 className="color_sec mb-0">{title}</h3>
      <div>
        {tags?.map((t, i) => (
          <span key={i} className="pd_tag">{t}</span>
        ))}
      </div>
      <p className="pd_longdesc">{description}</p>

      {steamUrl && (
        <a href={steamUrl} target="_blank" rel="noopener noreferrer">
          <FaSteam size={24} />
        </a>
      )}
    </Col>
  </Row>
);

export default VideoSection;
