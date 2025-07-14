import React, { useState, useEffect } from 'react';
import './MusicSection.css';

const MusicSection = () => {
  const [tracks, setTracks] = useState([]);
  const [form, setForm] = useState({ url: '', artist: '', song: '', album: '', length: '' });

  useEffect(() => {
    const saved = localStorage.getItem('music');
    if (saved) setTracks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('music', JSON.stringify(tracks));
  }, [tracks]);

  const addTrack = e => {
    e.preventDefault();
    if (!form.url) return;
    setTracks([...tracks, { ...form, id: Date.now() }]);
    setForm({ url: '', artist: '', song: '', album: '', length: '' });
  };

  return (
    <section className="music" data-aos="fade-up">
      <h2>Music</h2>
      <form onSubmit={addTrack} className="music-form">
        <input
          placeholder="Embed URL"
          value={form.url}
          onChange={e => setForm({ ...form, url: e.target.value })}
          required
        />
        <input
          placeholder="Artist"
          value={form.artist}
          onChange={e => setForm({ ...form, artist: e.target.value })}
        />
        <input
          placeholder="Song Name"
          value={form.song}
          onChange={e => setForm({ ...form, song: e.target.value })}
        />
        <input
          placeholder="Album Name"
          value={form.album}
          onChange={e => setForm({ ...form, album: e.target.value })}
        />
        <input
          placeholder="Length"
          value={form.length}
          onChange={e => setForm({ ...form, length: e.target.value })}
        />
        <button type="submit">Add Track</button>
      </form>
      <table className="track-table">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Song Name</th>
            <th>Album Name</th>
            <th>Length</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(t => (
            <tr key={t.id}>
              <td>{t.artist}</td>
              <td>{t.song}</td>
              <td>{t.album}</td>
              <td>{t.length}</td>
              <td>
                <button onClick={() => setTracks(tracks.filter(x => x.id !== t.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MusicSection;
