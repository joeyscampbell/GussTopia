import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';
import './styles/variables.css';

const Init = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return <App />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Init />);
