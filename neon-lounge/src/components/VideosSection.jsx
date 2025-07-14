import React, { useState, useEffect } from 'react';
import './VideosSection.css';

const placeholder = 'https://via.placeholder.com/320x180?text=Video';

const parseYouTubeId = link => {
  const regex = /(?:v=|\.be\/|embed\/)([A-Za-z0-9_-]+)/;
  const match = link.match(regex);
  return match ? match[1] : null;
};

const VideosSection = () => {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({ url: '', title: '' });

  useEffect(() => {
    const saved = localStorage.getItem('videos');
    if (saved) setVideos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  const addVideo = e => {
    e.preventDefault();
    if (!form.url) return;
    setVideos([...videos, { ...form, id: Date.now() }]);
    setForm({ url: '', title: '' });
  };

  const embedUrl = link => {
    if (link.includes('youtube.com/watch') || link.includes('youtu.be/')) {
      const id = parseYouTubeId(link);
      return id ? `https://www.youtube.com/embed/${id}` : link;
    }
    return link;
  };

  return (
    <section className="videos" data-aos="fade-up">
      <h2>Videos</h2>
      <form onSubmit={addVideo} className="video-form">
        <input
          placeholder="Video URL"
          value={form.url}
          onChange={e => setForm({ ...form, url: e.target.value })}
          required
        />
        <input
          placeholder="Title (optional)"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <button type="submit">Share Video</button>
      </form>
      <div className="video-grid">
        {videos.map(v => (
          <div key={v.id} className="video-item">
            <div className="video-thumb">
              <img
                src={parseYouTubeId(v.url) ? `https://img.youtube.com/vi/${parseYouTubeId(v.url)}/0.jpg` : placeholder}
                alt={v.title || 'Video thumbnail'}
              />
            </div>
            {v.title && <h3>{v.title}</h3>}
            <iframe src={embedUrl(v.url)} title="video" loading="lazy" />
            <button onClick={() => setVideos(videos.filter(x => x.id !== v.id))}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosSection;
