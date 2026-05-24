import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const STATION_ORDER = [
  "PROVIDENCE_RIVER",
  "CONIMICUT_POINT",
  "DUTCH_ISLAND",
];

function getLatestBySite(events) {
  return events.reduce((acc, event) => {
    const siteId = event?.sample?.siteId;
    if (siteId && !acc[siteId]) acc[siteId] = event;
    return acc;
  }, {});
}

function stressColor(stress) {
  if (stress === "healthy") return "#22c55e";
  if (stress === "watch") return "#84cc16";
  if (stress === "moderate") return "#f59e0b";
  if (stress === "severe") return "#ef4444";
  return "#7dd3fc";
}

export function EstuaryMap({ events }) {
  const latestBySite = getLatestBySite(events);

  return (
    <section className="card">
      <p className="eyebrow">Map Layer</p>
      <h2>Narragansett Bay Monitoring Stations</h2>
      <p>
        Station markers are colored by current habitat stress level in the live
        educational model.
      </p>

      <div className="map-shell">
        <MapContainer
          center={[41.65, -71.37]}
          zoom={10}
          scrollWheelZoom={false}
          className="estuary-map"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {STATION_ORDER.map((siteId) => {
            const event = latestBySite[siteId];
            if (!event?.sample) return null;

            const sample = event.sample;
            const assessment = event.assessment;
            const color = stressColor(assessment?.stressLevel);

            return (
              <CircleMarker
                key={siteId}
                center={[sample.latitude, sample.longitude]}
                radius={12}
                pathOptions={{
                  color,
                  fillColor: color,
                  fillOpacity: 0.72,
                  weight: 2,
                }}
              >
                <Popup>
                  <strong>{sample.siteName}</strong>
                  <br />
                  Score: {assessment?.habitatScore}
                  <br />
                  Stress: {assessment?.stressLevel}
                  <br />
                  Oxygen: {sample.dissolvedOxygenMgL} mg/L
                  <br />
                  Salinity: {sample.salinityPpt} ppt
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
}