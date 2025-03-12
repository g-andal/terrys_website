// src/components/Hero.js
import React from "react";

function Hero() {
  return (
    <div class="hero-container">
        <h1 class="hero-title bodoni">A SIP OF COMFORT, A BITE OF HOME</h1>
        <p class="p1">Enjoy the warmth of freshly brewed coffee and the comfort of a homemade breakfast, all served with a touch of love.</p>
        <img src="/pancakes.jpg" alt="All American Breakfast Spread" class="hero-oval" />
        <p class="p2">Dish of the day</p>
        <div class="p3">
            <h2>8+</h2>
            <p>variety of food available</p>
        </div>
        <div class="p4">
            <h2>2k+</h2>
            <p>Happy Customers</p>
        </div>
        
    </div>
  );
}

export default Hero;