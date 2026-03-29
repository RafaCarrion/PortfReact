import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        {/* Background Decors */}
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="section-title mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="1"></Col>
          <Col lg="6" className="d-flex align-items-center">
            <div className="about-me-text">
              <p className="lead" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)' }}>
                {dataabout.aboutme}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work History</h3>
          </Col>
          <Col lg="1"></Col>
          <Col lg="6">
            <div className="timeline">
              {worktimeline.map((data, i) => (
                <div className="timeline-item" key={i}>
                  <div className="job-date">{data.date}</div>
                  <div className="job-title">{data.jobtitle}</div>
                  <div className="job-where">{data.where}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Expertise</h3>
          </Col>
          <Col lg="1"></Col>
          <Col lg="6">
            <div className="skills-grid">
              {skills.map((data, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-info">
                    <h5 className="skill-name">{data.name}</h5>
                    <span className="skill-percent">{data.value}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-fill" 
                      style={{ width: `${data.value}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">What I Do</h3>
          </Col>
          <Col lg="1"></Col>
          <Col lg="6">
            {services.map((data, i) => (
              <div className="service-glass" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
