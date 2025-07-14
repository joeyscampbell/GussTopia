import React, { useState } from 'react';
import './FriendsFeed.css';

const FriendsFeed = () => {
  const [posts, setPosts] = useState([]);

  const loadMore = () => {
    const more = Array.from({ length: 3 }, (_, i) => ({ id: Date.now() + i, content: 'New post' }));
    setPosts([...posts, ...more]);
  };

  return (
    <section className="friends-feed">
      <h2>Friends Feed</h2>
      <button onClick={loadMore}>Load More</button>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.content}</li>
        ))}
      </ul>
    </section>
  );
};

export default FriendsFeed;
