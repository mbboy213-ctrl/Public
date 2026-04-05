# SmmS Frontend - Smart Monitoring & Maintenance System

Professional web UI for factory monitoring, maintenance management, and operator terminals.

## Pages

- **login.html** - Unified login for operators, maintenance, and managers
- **manager.html** - Management dashboard (admin access control)
- **dashboard.html** - Maintenance center (maintenance operator view)
- **Presse.html, Broyeur.html, Atomiseur.html, Four.html, Imprimante.html, Marpack.html, Séchoir.html** - Machine-specific operator terminals

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run serve
```

The frontend runs on **http://localhost:8080**

### Configuration

The frontend automatically connects to the backend at `http://localhost:3000` (local development).

To change the backend URL, edit `config.js`:
```javascript
const API_BASE_URL = 'http://your-backend-url:3000';
```

## Features

- **Professional Design**: Modern, responsive UI with consistent branding
- **Real-time Updates**: Socket.IO connection for live metrics and notifications
- **Role-Based Access**: Operators, maintenance technicians, and managers
- **Machine Monitoring**: Live PLC data and historical alerts
- **Fault Reporting**: Operators can report equipment faults
- **Maintenance Tickets**: Track and manage maintenance tasks
- **Admin Controls**: Add users, machines, and configure access

## Architecture

- Pure HTML/CSS/JavaScript (no build step required)
- Vanilla JavaScript with Socket.IO for real-time features
- Responsive grid layouts with CSS custom properties
- Sora + JetBrains Mono typography system

## Deployment

Simply serve the HTML files from any static web server:
```bash
npx http-server -p 8080
```

Or use any CDN/static hosting service. Ensure the `FRONTEND_URL` env var in the backend matches your deployment URL.
