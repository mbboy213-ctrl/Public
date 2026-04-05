# SmmS Backend - Smart Monitoring & Maintenance System

Node.js + Express API server with PostgreSQL database and PLC Modbus simulator.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=smms_db
DB_PASSWORD=your_password
DB_PORT=5432
FRONTEND_URL=http://localhost:8080
```

### 3. Initialize Database
```bash
psql -U postgres -f db/init.sql
```

### 4. Start Server
```bash
node server.js
```

The backend runs on **http://localhost:3000**

## API Routes

- `POST /api/login` - User authentication
- `POST /api/register` - Register new user
- `GET /api/users` - List all users
- `POST /api/machines` - Create machine
- `GET /machines` - List all machines
- `POST /send_fault` - Submit operator fault
- `PUT /ticket/:id` - Update ticket status
- `GET /tickets` - List maintenance tickets
- `GET /api/plc/latest` - Latest PLC data
- `GET /api/plc/machine/:machineId` - Machine-specific PLC data
- `GET /api/plc/alerts` - PLC alerts

## Real-time Features (Socket.IO)

- `factory_live_data` - Live factory metrics broadcast
- `notify_maintenance` - Maintenance notifications
- `ticket_updated` - Ticket status updates

## PLC Modbus Simulator

The `plc-modbus-sim/` folder contains a Python simulator for testing:

```bash
cd plc-modbus-sim
python plc-simulator/plc_simulator.py
```

In another terminal:
```bash
cd plc-modbus-sim/data-collector
python collector.py
```

This feeds realistic data into the backend for development/testing.
