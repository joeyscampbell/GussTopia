import React, { useState } from 'react';
import './VideosSection.css';

const VideosSection = () => {
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState('');

  const addVideo = e => {
    e.preventDefault();
    setVideos([...videos, { url, id: Date.now() }]);
    setUrl('');
  };

  const isEmbed = link => link.includes('embed');

  return (
    <section className="videos">
      <h2>Videos</h2>
      <form onSubmit={addVideo} className="video-form">
        <input
          placeholder="Video URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
        <button type="submit">Share Video</button>
      </form>
      <div className="video-grid">
        {videos.map(v => (
          <div key={v.id} className="video-item">
            {isEmbed(v.url) ? (
              <iframe src={v.url} title="Video" loading="lazy" />
            ) : (
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                {v.url}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosSection;
