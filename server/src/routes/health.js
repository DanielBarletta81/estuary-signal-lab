import express from "express";

export function createHealthRouter({ broadcaster }) {
  const router = express.Router();

  router.get("/health", (req, res) => {
    res.json({
      status: "ok",
      connectedClients: broadcaster.clientCount(),
      timestamp: new Date().toISOString(),
    });
  });

  return router;
}