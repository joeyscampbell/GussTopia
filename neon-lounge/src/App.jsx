import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeInteractions from './components/HomeInteractions';
import GamesSection from './components/GamesSection';
import VideosSection from './components/VideosSection';
import MusicSection from './components/MusicSection';
import FriendsFeed from './components/FriendsFeed';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<HomeInteractions />} />
        <Route path="/games" element={<GamesSection />} />
        <Route path="/videos" element={<VideosSection />} />
        <Route path="/music" element={<MusicSection />} />
        <Route path="/friends" element={<FriendsFeed />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
