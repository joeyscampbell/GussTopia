import React, { useState } from 'react';
import './GamesSection.css';

const initialGames = [];

const GamesSection = () => {
  const [games, setGames] = useState(initialGames);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', cover: '', comment: '' });

  const addGame = e => {
    e.preventDefault();
    setGames([...games, { ...formData, id: Date.now() }]);
    setFormData({ title: '', cover: '', comment: '' });
    setShowForm(false);
  };

  return (
    <section className="games">
      <h2>Games</h2>
      <button onClick={() => setShowForm(true)}>Add Game</button>
      {showForm && (
        <form onSubmit={addGame} className="game-form">
          <input
            placeholder="Title"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <input
            placeholder="Cover URL"
            value={formData.cover}
            onChange={e => setFormData({ ...formData, cover: e.target.value })}
            required
          />
          <textarea
            placeholder="Comment"
            value={formData.comment}
            onChange={e => setFormData({ ...formData, comment: e.target.value })}
          />
          <button type="submit">Save</button>
        </form>
      )}
      <div className="game-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.cover} alt={game.title} loading="lazy" />
            <h3>{game.title}</h3>
            {game.comment && <p>{game.comment}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
