# Estuary Signal Lab

A real-time scientific data visualization platform for exploring estuary health through environmental signals, ecological scoring, and interactive interpretation.

---

## 🌊 Overview

Estuary Signal Lab transforms water-quality data into clear, actionable insight.

Using a real-time event-driven architecture, the system simulates monitoring stations across Narragansett Bay and translates environmental signals into ecological meaning.

Rather than presenting raw data alone, the platform focuses on:

- understanding habitat health  
- identifying environmental stressors  
- communicating scientific signals in plain language  

---

## 🧠 Core Concept

Estuaries are dynamic systems where small changes in environmental conditions can have significant biological impacts.

This project models that relationship:

```txt
environmental signals
→ ecological stress
→ habitat health
→ human-understandable insight

⚙️ Features

🌍 Multi-Site Monitoring

Providence River (upper bay, urban stress zone)
Conimicut Point (mid-bay transition zone)
Dutch Island, Jamestown (lower bay, high-salinity system)

Visual comparison highlights how conditions shift across the estuary gradient.

⚡ Real-Time Data Stream

Simulated water-quality sampling events
Continuous updates via WebSockets
Event-driven backend architecture


🧪 Environmental Signals
Dissolved Oxygen (mg/L)
Salinity (ppt)
Temperature (°C)
Turbidity (NTU)
Chlorophyll (µg/L)

📊 Habitat Health Scoring

Translates raw data into a composite habitat score
Identifies limiting environmental factors
Classifies system state:
Healthy
Watch
Moderate stress
Severe stress

🧠 Insight Engine
Converts data into plain-English ecological explanations
Highlights biological implications (feeding, survival, stress)
Emphasizes interpretation over raw metrics

🗺 Map Layer
Interactive monitoring stations across Narragansett Bay
Marker color reflects habitat stress level
Click to explore site-specific conditions

🔍 Multi-Site Comparison
Side-by-side station analysis
Highlights environmental gradients across the bay
Supports spatial reasoning and pattern recognition

🏗 Architecture
Water Quality Generator
      ↓
Habitat Processor (scoring logic)
      ↓
Insight Engine (interpretation layer)
      ↓
WebSocket Broadcaster
      ↓
React Dashboard (UI + interaction)

🛠 Tech Stack

Frontend

React (Vite)
Recharts (data visualization)
Leaflet (mapping)

Backend

Node.js
Express
WebSockets (ws)

Design

Signal-driven UI
Scientific color system
Interpretation-first layout

🧪 Data Model (Example)

{
  siteName: "Providence River",
  temperatureC: 24.3,
  salinityPpt: 22.1,
  dissolvedOxygenMgL: 3.8,
  turbidityNTU: 18.4,
  chlorophyllUgL: 20.2,
  habitatScore: 58,
  stressLevel: "moderate",
  limitingFactor: "oxygen"
}
🎯 Design Goals
Make complex environmental data intuitive
Emphasize interpretation over raw values
Reflect real-world estuary dynamics
Build reusable real-time data architecture
Bridge science and interactive systems
🔄 Reusability

This project shares a common architecture with:

Creator engagement systems (Twitch Drops Simulator)
Sports telemetry pipelines (MLB Event Simulation)
Future ecological and genetic modeling tools

🔬 Scientific Context

This project is an educational simulation based on commonly monitored estuarine variables.

It is designed to reflect realistic environmental dynamics, but does not represent live or authoritative monitoring data.

🔮 Future Work

Time-based playback and seasonal simulation
Expanded site network and real data integration
Genetic diversity modeling (microsatellite data)
Advanced ecological scoring models
User-driven scenario simulation


👤 Author

D.C. Barletta

Software engineer focused on real-time systems, data visualization, and translating complex scientific data into meaningful user experiences.