import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import IntroDoor from './IntroDoor'; // 🔑 animasi pintu
import bg1 from './assets/image/home.jpg';
import bg2 from './assets/image/home1.jpg';
import bg3 from './assets/image/home2.jpg';
import bg4 from './assets/image/home3.jpg';

const backgroundImages = [bg1, bg2, bg3, bg4];
const preweddingPhotos = [bg1, bg2, bg3, bg4];

export default function App() {
  const [showIntro, setShowIntro] = useState(true); // kontrol pintu
  const [currentBg, setCurrentBg] = useState(0);
  const [currentPrewedding, setCurrentPrewedding] = useState(0);

  const intervalRef = useRef(null);
  const preweddingIntervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
  };

  const startPreweddingAutoSlide = () => {
    clearInterval(preweddingIntervalRef.current);
    preweddingIntervalRef.current = setInterval(() => {
      setCurrentPrewedding((prev) => (prev + 1) % preweddingPhotos.length);
    }, 4000);
  };

  useEffect(() => {
    if (!showIntro) {
      startAutoSlide();
      startPreweddingAutoSlide();
    }
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(preweddingIntervalRef.current);
    };
  }, [showIntro]);

  useEffect(() => {
    const toggle = document.getElementById('menu-toggle');
    const links = document.querySelectorAll('.navbar a');
    const closeMenu = () => {
      if (toggle) toggle.checked = false;
    };
    links.forEach((link) => link.addEventListener('click', closeMenu));
    return () => {
      links.forEach((link) => link.removeEventListener('click', closeMenu));
    };
  }, []);

  const handleNext = () => {
    setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    startAutoSlide();
  };

  const handlePrev = () => {
    setCurrentBg((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
    startAutoSlide();
  };

  const handleNextPrewedding = () => {
    setCurrentPrewedding((prev) => (prev + 1) % preweddingPhotos.length);
    startPreweddingAutoSlide();
  };

  const handlePrevPrewedding = () => {
    setCurrentPrewedding((prev) => (prev === 0 ? preweddingPhotos.length - 1 : prev - 1));
    startPreweddingAutoSlide();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 🔑 Pintu muncul di atas website */}
      {showIntro && <IntroDoor onFinish={() => setShowIntro(false)} />}

      {/* 🔑 Website tetap dirender di belakang pintu */}
      <>
        <header className="header">
          <h1 className="site-title">Wedding Invitation</h1>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#our-story">Our Story</a>
            <a href="#wedding-video">Prewedding Video</a>
            <a href="#prewedding-photos">Prewedding Photos</a>
            <a href="#location">Location</a>
          </nav>
        </header>

        <main className="flex-grow">
          <section
            id="home"
            className="text-center p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImages[currentBg]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'white',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
              transition: 'background-image 5s ease-in-out',
            }}
          >
            <h2 className="text-4xl font-bold mb-4">You're Invited!</h2>
            <p className="text-lg">Join us in celebrating our wedding day</p>
            <p className="mt-2 font-medium">Saturday, August 30th, 2025 | Jakarta, Indonesia</p>
            <div className="slider-nav-container">
              <button onClick={handlePrev} className="home-slider-nav-button left">❮</button>
              <button onClick={handleNext} className="home-slider-nav-button right">❯</button>
            </div>
          </section>

          <section id="our-story" className="p-8 bg-pink-50">
            <h2 className="text-3xl text-pink-700 font-semibold text-center mb-6">Our Story</h2>
            <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
              <p>It all began with a swipe, a smile, and a spark...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <p>We've grown together, laughed, cried, and now we're ready to take the next step — forever.</p>
            </div>
          </section>

          <section id="wedding-video" className="p-8 bg-white text-center">
            <h2 className="text-3xl text-pink-700 font-semibold mb-6">Prewedding Video</h2>
            <div className="max-w-2xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Wedding Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section id="prewedding-photos" className="prewedding-section">
            <h2 className="prewedding-title">Prewedding Photos</h2>
            <div className="prewedding-slider">
              {preweddingPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Prewedding ${index + 1}`}
                  className={`prewedding-photo ${index === currentPrewedding ? 'active' : ''}`}
                />
              ))}

              <button className="slider-nav-button left" onClick={handlePrevPrewedding}>❮</button>
              <button className="slider-nav-button right" onClick={handleNextPrewedding}>❯</button>
            </div>
          </section>

          <section id="location">
            <h2>Location</h2>
            <p>The Ritz-Carlton Jakarta, Kuningan</p>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.532126493885!2d106.827139!3d-6.228611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e53dc5171b%3A0x27a868ad3cd40c7d!2sThe%20Ritz-Carlton%20Jakarta%2C%20Mega%20Kuningan!5e0!3m2!1sen!2sid!4v1752808639051!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pernikahan"
              ></iframe>
            </div>
          </section>
        </main>

        <footer className="bg-pink-200 text-center text-sm p-4 text-pink-800">
          © 2025 Wedding Invitation. All rights reserved.
        </footer>
      </>
    </div>
  );
}
