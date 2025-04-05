// script.js

// Mock flight booking action
function bookFlight() {
    alert("Redirecting to flight booking system...");
  }
  
  // Load destinations from JSON
  async function loadDestinations() {
    const res = await fetch('data.json');
    const data = await res.json();
    const container = document.getElementById('destinations-list');
    data.destinations.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${dest.name}</h3>
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" style="width:100%; border-radius:10px;" />
        <p>${dest.description}</p>
        `;
      container.appendChild(card);
    });
  }
  
  // Load hotels from JSON
  async function loadHotels() {
    const res = await fetch('data.json');
    const data = await res.json();
    const container = document.getElementById('hotel-list');
    data.hotels.forEach(hotel => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${hotel.name}</h3>
        
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" style="width:100%; border-radius:10px;" />
        <p>${hotel.type} - ${hotel.city}</p>
        `;
      container.appendChild(card);
    });
  }
  
  // Load reviews
  async function loadReviews() {
    const res = await fetch('data.json');
    const data = await res.json();
    const container = document.getElementById('reviews-list');
    data.reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'review';
      div.innerHTML = `
        <strong>${review.user}</strong> ⭐${review.rating}/5
        <p>${review.comment}</p>
      `;
      container.appendChild(div);
    });
  }
  
  // Weather API
  async function loadWeather() {
    const apiKey = '472e8e382646ca5ee8b2e776f0b59145'; 
    const city = 'Brazzaville';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const res = await fetch(url);
      const weather = await res.json();
      const info = `
        <h3>${weather.name}, ${weather.sys.country}</h3>
        <p>${weather.weather[0].description}</p>
        <p>Temperature: ${weather.main.temp}°C</p>
        <p>Humidity: ${weather.main.humidity}%</p>
      `;
      document.getElementById('weather-info').innerHTML = info;
    } catch (error) {
      document.getElementById('weather-info').textContent = 'Weather info unavailable.';
    }
  }
  
  // Form submit
  document.getElementById('tripForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Searching for flights... (Feature coming soon)");
  });
  
  // Init
  window.addEventListener('DOMContentLoaded', () => {
    loadDestinations();
    loadHotels();
    loadReviews();
    loadWeather();
  });