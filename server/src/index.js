import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws";
import { config } from "./config.js";
import { generateWaterQualitySample } from "./simulator/waterQualityGenerator.js";
import { processHabitatSample } from "./pipeline/habitatProcessor.js";
import { Broadcaster } from "./websocket/broadcaster.js";
import { createHealthRouter } from "./routes/health.js";

const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(config.port, () => {
  console.log(`Estuary Signal Lab server running at http://localhost:${config.port}`);
});

const wss = new WebSocketServer({ server });
const broadcaster = new Broadcaster(wss);

app.use("/api", createHealthRouter({ broadcaster }));

wss.on("connection", (socket) => {
  socket.send(
    JSON.stringify({
      type: "SYSTEM",
      message: "Connected to Estuary Signal Lab stream.",
      timestamp: new Date().toISOString(),
    })
  );
});

setInterval(() => {
  const sample = generateWaterQualitySample();
  const processed = processHabitatSample(sample);

  broadcaster.broadcast({
    type: "ESTUARY_EVENT",
    event: processed,
  });
}, config.tickMs);