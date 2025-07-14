import React, { useState } from 'react';
import './JoeysWedding.css';

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_MAPS_EMBED_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

const JoeysWedding = () => {
  const [ideas, setIdeas] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', cost: '', location: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const addIdea = () => {
    if (!form.name) return;
    setIdeas([...ideas, form]);
    setForm({ name: '', cost: '', location: '' });
    setShow(false);
  };

  const mapSrc = form.location
    ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}&q=${encodeURIComponent(form.location)}`
    : '';

  return (
    <section className="wedding-section">
      <h2>Joey’s Wedding</h2>
      <button className="add-idea-button" onClick={() => setShow(true)}>
        + Add Idea
      </button>
      <div className="ideas-grid">
        {ideas.map((idea, idx) => (
          <div key={idx} className="idea-card">
            <h3>{idea.name}</h3>
            {idea.cost && <p>Cost per person: ${idea.cost}</p>}
            {idea.location && (
              <iframe
                title={idea.location}
                width="300"
                height="200"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}&q=${encodeURIComponent(idea.location)}`}
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
      {show && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="close-button" aria-label="Close" onClick={() => setShow(false)}>
              &times;
            </button>
            <h3>Add Idea</h3>
            <label>
              Business Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Estimated Cost Per Person
              <div className="input-prefix">
                <span>$</span>
                <input
                  type="number"
                  name="cost"
                  value={form.cost}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label>
              Map Location
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </label>
            {form.location && (
              <iframe
                title="preview"
                width="300"
                height="200"
                src={mapSrc}
                allowFullScreen
                loading="lazy"
              />
            )}
            <button className="save-button" onClick={addIdea}>
              Save
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoeysWedding;
