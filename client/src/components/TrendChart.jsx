import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function TrendChart({ events }) {
  const data = events.map((e) => ({
    time: new Date(e.processedAt).toLocaleTimeString(),
    oxygen: e.sample.dissolvedOxygenMgL,
  }));

  return (
    <section className="card">
      <p className="eyebrow">Oxygen Trend</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="oxygen" stroke="#60a5fa" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}