import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { blogdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        {/* Background Decors */}
        <div className="blog_glow blog_glow_1"></div>
        <div className="blog_glow blog_glow_2"></div>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Blog & Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 blog_grid">
          {blogdata.map((data, i) => {
            return (
              <div key={i} className="blog_item">
                <div className="blog_img_container">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="blog_info">
                  <span className="article_date">{data.date}</span>
                  <h3 className="article_title">{data.title}</h3>
                  <p className="article_desc">{data.description}</p>
                  <Link to={`/blog/${data.id}`} className="read_more_btn">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
