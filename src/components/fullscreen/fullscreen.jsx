import "./style.css";
const HeroVideo = ({ videoSrc }) => {
  return (
    <div className="hero_container">
      <video
        className="hero_video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default HeroVideo;