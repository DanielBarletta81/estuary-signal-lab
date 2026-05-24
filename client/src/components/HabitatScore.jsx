export function HabitatScore({ event }) {
  const assessment = event?.assessment;
  const score = assessment?.habitatScore;
  const stress = assessment?.stressLevel || "waiting";


const scoreColor =
  stress === "healthy"
    ? "var(--healthy)"
    : stress === "watch"
    ? "var(--watch)"
    : stress === "moderate"
    ? "var(--moderate)"
    : stress === "severe"
    ? "var(--severe)"
    : "#ccc";

  return (
    <section className="card">
      <p className="eyebrow">Habitat Health</p>
      <h2>Current Site Score</h2>

      <div className="score-number">{score ?? "—"}</div>

      <div className={`stress-badge ${stress}`}>
        {stress === "waiting" ? "Waiting for data" : stress}
      </div>
      <div className="score-number" style={{ color: scoreColor }}>
        {score ?? "—"}
      </div>

      <p>
        Limiting factor:{" "}
        <strong>{assessment?.limitingFactor || "not enough data yet"}</strong>
      </p>
    </section>
  );
}