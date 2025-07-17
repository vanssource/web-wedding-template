import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import bg1 from "./assets/image/home.jpg";
import bg2 from "./assets/image/home1.jpg";
import bg3 from "./assets/image/home2.jpg";
import bg4 from "./assets/image/home3.jpg";

const backgroundImages = [bg1, bg2, bg3, bg4];

const weddingPhotos = [];
const preweddingPhotos = [];

export default function App() {
  const [currentBg, setCurrentBg] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentPrewedding, setCurrentPrewedding] = useState(0);

  const intervalRef = useRef(null);
  const photoIntervalRef = useRef(null);
  const preweddingIntervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
  };

  const startPhotoAutoSlide = () => {
    clearInterval(photoIntervalRef.current);
    photoIntervalRef.current = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % weddingPhotos.length);
    }, 4000);
  };

  const startPreweddingAutoSlide = () => {
    clearInterval(preweddingIntervalRef.current);
    preweddingIntervalRef.current = setInterval(() => {
      setCurrentPrewedding((prev) => (prev + 1) % preweddingPhotos.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    startPhotoAutoSlide();
    startPreweddingAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(photoIntervalRef.current);
      clearInterval(preweddingIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.querySelectorAll(".navbar a");
    const closeMenu = () => {
      if (toggle) toggle.checked = false;
    };
    links.forEach((link) => link.addEventListener("click", closeMenu));
    return () => {
      links.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  const handleNext = () => {
    setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    startAutoSlide();
  };

  const handlePrev = () => {
    setCurrentBg((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
    startAutoSlide();
  };

  const handleNextPrewedding = () => {
    setCurrentPrewedding((prev) => (prev + 1) % preweddingPhotos.length);
    startPreweddingAutoSlide();
  };

  const handlePrevPrewedding = () => {
    setCurrentPrewedding((prev) =>
      prev === 0 ? preweddingPhotos.length - 1 : prev - 1
    );
    startPreweddingAutoSlide();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            transition: "background-image 5s ease-in-out",
          }}
        >
          <h2 className="text-4xl font-bold mb-4">You're Invited!</h2>
          <p className="text-lg">Join us in celebrating our wedding day</p>
          <p className="mt-2 font-medium">
            Saturday, August 30th, 2025 | Jakarta, Indonesia
          </p>
          <div className="slider-nav-container">
            <button onClick={handlePrev} className="slider-nav-button">
              ❮
            </button>
            <button onClick={handleNext} className="slider-nav-button">
              ❯
            </button>
          </div>
        </section>

        <section id="our-story" className="p-8 bg-pink-50">
          <h2 className="text-3xl text-pink-700 font-semibold text-center mb-6">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <p>It all began with a swipe, a smile, and a spark...</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur recusandae vitae delectus at voluptatum, voluptatibus
              laborum nobis, exercitationem ratione tenetur voluptate ullam
              aperiam quam. Ullam consectetur modi qui quos quibusdam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur recusandae vitae delectus at voluptatum, voluptatibus
              laborum nobis, exercitationem ratione tenetur voluptate ullam
              aperiam quam. Ullam consectetur modi qui quos quibusdam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur recusandae vitae delectus at voluptatum, voluptatibus
              laborum nobis, exercitationem ratione tenetur voluptate ullam
              aperiam quam. Ullam consectetur modi qui quos quibusdam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur recusandae vitae delectus at voluptatum, voluptatibus
              laborum nobis, exercitationem ratione tenetur voluptate ullam
              aperiam quam. Ullam consectetur modi qui quos quibusdam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur recusandae vitae delectus at voluptatum, voluptatibus
              laborum nobis, exercitationem ratione tenetur voluptate ullam
              aperiam quam. Ullam consectetur modi qui quos quibusdam!
            </p>
            <p className="mt-4">
              We've grown together, laughed, cried, and now we're ready to take
              the next step — forever.
            </p>
          </div>
        </section>

        <section id="wedding-video" className="p-8 bg-white text-center">
          <h2 className="text-3xl text-pink-700 font-semibold mb-6">
            Prewedding Video
          </h2>
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
          <div className="prewedding-overlay">
            <h2 className="text-3xl text-pink-700 font-semibold mb-4">
              Prewedding Photos
            </h2>
            <p className="text-gray-700">
              This section is currently under development.
            </p>
            <p className="text-sm text-gray-500">
              Stay tuned to view our precious prewedding moments ✨
            </p>
            <div className="coming-soon-badge">Coming Soon</div>
          </div>
        </section>

        {/* <section id="prewedding-photos" className="relative text-white w-full h-screen overflow-hidden">
          <h2 className="absolute top-10 left-10 text-3xl font-bold z-20 text-pink-700 drop-shadow-xl">Prewedding Photos</h2>

          <img
            src={preweddingPhotos[currentPrewedding]}
            alt={`Prewedding ${currentPrewedding + 1}`}
            className="w-full h-full object-cover transition duration-700 ease-in-out"
          />

          {/* Tombol navigasi */}
        {/* <button
            onClick={handlePrevPrewedding}
            className="slider-nav-button left"
            aria-label="Previous Photo"
          >
            ❮
          </button>
          <button
            onClick={handleNextPrewedding}
            className="slider-nav-button right"
            aria-label="Next Photo"
          >
            ❯ */}
        {/* </button>
        </section> */}

        <section id="location">
          <h2>Lokasi Acara</h2>
          <p>The Ritz-Carlton Jakarta, Kuningan</p>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
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
    </div>
  );
}
