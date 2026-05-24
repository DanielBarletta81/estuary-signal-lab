export function SignalCards({ event }) {
  const s = event?.sample;
  const limiting = event?.assessment?.limitingFactor;

  return (
    <section className="grid-4">
      <Signal
        className={`signal-oxygen ${limiting === "oxygen" ? "limiting" : ""}`}
        label="Dissolved Oxygen"
        value={s?.dissolvedOxygenMgL}
        unit="mg/L"
        note="Low oxygen can stress feeding and survival."
      />
      <Signal
        className={`signal-salinity ${limiting === "salinity" ? "limiting" : ""}`}
        label="Salinity"
        value={s?.salinityPpt}
        unit="ppt"
        note="Oysters tolerate brackish gradients."
      />
      <Signal
        className={`signal-temperature ${limiting === "temperature" ? "limiting" : ""}`}
        label="Temperature"
        value={s?.temperatureC}
        unit="°C"
        note="Heat increases metabolic stress."
      />
      <Signal
        className={`signal-turbidity ${limiting === "turbidity" ? "limiting" : ""}`}
        label="Turbidity"
        value={s?.turbidityNTU}
        unit="NTU"
        note="Suspended particles affect clarity and feeding."
      />
    </section>
  );
}

function Signal({ className, label, value, unit, note }) {
  return (
    <div className={`signal-card ${className} pulse`}>
      <span>{label}</span>
      <strong>{value !== undefined ? `${value} ${unit}` : "—"}</strong>
      <small>{note}</small>
    </div>
  );
}