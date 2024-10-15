import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a nuestra tienda online</h1>
      <p>¡Explora nuestros productos!</p>
      <a href="/products">Ver productos</a>
    </div>
  );
}

export default Home;
