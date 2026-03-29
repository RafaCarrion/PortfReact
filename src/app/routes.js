import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { WorkshopsPage } from "../pages/portfoliodetail/workshops";
import VideoGamesPage from "../pages/portfoliodetail/videogames";
import LinearMedia from "../pages/portfoliodetail/linearmedia/linearmedia";
import Homewithvideo from "../pages/homewithvideo/homewithvideo"
import { Blog } from "../pages/blog";
import { BlogDetail } from "../pages/blogdetail";
const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Navigate replace to="/homewithvideo" />} />
        <Route path="/homewithvideo" element={<Homewithvideo />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/portfoliodetail/workshops" element={<WorkshopsPage />} />
        <Route path="/portfoliodetail/videogames" element={<VideoGamesPage />} />
        <Route path="/portfoliodetail/linearmedia/" element={<LinearMedia />} />
        <Route path="*" element={<Navigate replace to="/homewithvideo" />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
