// Frontend API Configuration
// This file defines the backend API URL for all frontend applications

const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : window.location.origin.replace(/:\d+$/, ':3000');

const SOCKET_URL = API_BASE_URL;

console.log('API Configuration loaded:', { API_BASE_URL, SOCKET_URL });
