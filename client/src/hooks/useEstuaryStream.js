import { useEffect, useState } from "react";

export function useEstuaryStream() {
  const [status, setStatus] = useState("connecting");
  const [latest, setLatest] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4100");

    socket.onopen = () => setStatus("connected");
    socket.onclose = () => setStatus("disconnected");
    socket.onerror = () => setStatus("error");

    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      if (data.type === "ESTUARY_EVENT") {
        setLatest(data.event);
        setEvents((prev) => [data.event, ...prev].slice(0, 30));
      }
    };

    return () => socket.close();
  }, []);

  return { status, latest, events };
}