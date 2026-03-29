import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { blogdata } from "../../content_option";
import "../blog/style.css";

export const BlogDetail = () => {
  const { id } = useParams();
  const article = blogdata.find((item) => item.id === id);

  if (!article) {
    return (
      <Container className="pt-5 text-center">
        <h1>Article Not Found</h1>
        <Link to="/blog">Back to Blog</Link>
      </Container>
    );
  }

  return (
    <HelmetProvider>
      <Container className="blog_detail_container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {article.title} | Blog </title>
          <meta name="description" content={article.description} />
        </Helmet>

        {/* Background Decors */}
        <div className="blog_glow blog_glow_1"></div>
        <div className="blog_glow blog_glow_2"></div>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <Link to="/blog" className="back_to_blog mb-4">
              ← Back to Blog
            </Link>
            <h1 className="blog_detail_title">{article.title}</h1>
            <span className="article_date mb-5">{article.date}</span>
            <img src={article.img} alt={article.title} className="blog_detail_img" />
          </Col>
        </Row>

        <Row>
          <Col lg="8">
            <div className="blog_detail_content">
              {article.content}
            </div>

            {article.videoId && (
              <div className="video_container ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${article.videoId}`}
                  title={article.title}
                  allowFullScreen
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
