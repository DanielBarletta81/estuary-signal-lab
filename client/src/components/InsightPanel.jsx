export function InsightPanel({ event }) {
  return (
    <section className="card insight-card">
      <p className="eyebrow">What This Means</p>
        <h2>Ecological Interpretation</h2>
            <p className="insight-label">System Interpretation</p>
<p className="insight-text">{event?.insight}</p>
         
    </section>
  );
}