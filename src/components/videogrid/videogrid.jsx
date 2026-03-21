import { useState } from "react";
import "./style.css";

const VideoItem = ({ videoId }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
  };

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      {/* Placeholder con thumbnail */}
      <div className="video_item" onClick={handleClick}>
        <div
          className="video_placeholder"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <button className="zoom_button">▶</button>
        </div>
      </div>

      {/* Modal con YouTube */}
      {isZoomed && (
        <div className="video_modal" onClick={handleClose}>
          <div
            className="ratio ratio-16x9 video_zoom_container"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

const VideoGrid = ({ videos }) => (
  <div className="video_grid">
    {videos.map((v, i) => (
      <VideoItem key={i} videoId={v.videoId} />
    ))}
  </div>
);

export default VideoGrid;