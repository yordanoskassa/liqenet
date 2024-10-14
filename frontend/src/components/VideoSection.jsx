// VideoSection.js
import React from "react";
import "./VideoSection.css"; // Import the CSS file

// Importing videos from the assets folder
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

const VideoSection = () => {
  const videos = [
    { id: 1, src: video1, title: "Learning Amharic", description: "Learn Amharic in a fun and engaging way!" },
    { id: 2, src: video2, title: "Language Practice", description: "Practice common phrases with native speakers." },
    { id: 3, src: video3, title: "Cultural Insights", description: "Discover cultural insights while learning the language." },
  ];

  return (
    <section className="video-section">
      <h2 className="video-title">Our Language Learning Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video src={video.src} controls className="video-element" />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
