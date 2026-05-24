export function MultiSitePanel({ events }) {
  const latestBySite = getLatestBySite(events);

  return (
    <section className="card">
      <p className="eyebrow">Multi-Site Comparison</p>
      <h2>Bay Gradient Snapshot</h2>
      <p>
        Comparing upper, mid, and lower bay stations reveals how habitat signals
        shift across the estuary.
      </p>

      <div className="site-grid">
        {["PROVIDENCE_RIVER", "CONIMICUT_POINT", "DUTCH_ISLAND"].map((siteId) => {
          const event = latestBySite[siteId];

          return (
            <SiteCard key={siteId} event={event} fallbackId={siteId} />
          );
        })}
      </div>
    </section>
  );
}

function SiteCard({ event, fallbackId }) {
  const sample = event?.sample;
  const assessment = event?.assessment;

  return (
    <div className={`site-card ${assessment?.stressLevel || ""}`}>
      <span>{sample?.region || fallbackId}</span>
      
        <h3>{sample?.siteName || formatFallback(fallbackId)}</h3>
            <p className="site-description">
                {sample?.profile || "Estuary monitoring station"}
            </p>

      <div className="site-score">
        {assessment?.habitatScore ?? "—"}
      </div>

      <p className="site-status">
        {assessment?.stressLevel || "waiting for data"}
      </p>

      <dl>
        <div>
          <dt>Oxygen</dt>
          <dd>{sample?.dissolvedOxygenMgL ?? "—"} mg/L</dd>
        </div>
        <div>
          <dt>Salinity</dt>
          <dd>{sample?.salinityPpt ?? "—"} ppt</dd>
        </div>
        <div>
          <dt>Turbidity</dt>
          <dd>{sample?.turbidityNTU ?? "—"} NTU</dd>
        </div>
      </dl>
    </div>
  );
}

function getLatestBySite(events) {
  return events.reduce((acc, event) => {
    const siteId = event?.sample?.siteId;
    if (siteId && !acc[siteId]) {
      acc[siteId] = event;
    }
    return acc;
  }, {});
}

function formatFallback(id) {
  return id
    .toLowerCase()
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}