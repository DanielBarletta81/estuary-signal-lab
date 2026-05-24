export function Hero({ status }) {
  return (
    <section className="hero-card">
      <p className="eyebrow">Estuary Signal Lab</p>
      <h1 className="hero-title">
        Understanding estuary health through live environmental signals
      </h1>
      <p className="subhead">
        Translating water-quality data into clear ecological insight.
      </p>

      <div className="connection-pill">
        {status === "connected" ? "Live Stream Active" : "Connecting..."}
      </div>
    </section>
  );
}