import React, { useState } from 'react';
import './MusicSection.css';

const MusicSection = () => {
  const [tracks, setTracks] = useState([]);
  const [url, setUrl] = useState('');

  const addTrack = e => {
    e.preventDefault();
    setTracks([...tracks, { url, id: Date.now() }]);
    setUrl('');
  };

  return (
    <section className="music">
      <h2>Music</h2>
      <form onSubmit={addTrack} className="music-form">
        <input
          placeholder="Musico URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
        <button type="submit">Add Track</button>
      </form>
      <div className="track-list">
        {tracks.map(t => (
          <iframe
            key={t.id}
            src={t.url}
            title="Music Track"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
