import { useEstuaryStream } from "./hooks/useEstuaryStream";
import { Hero } from "./components/Hero";
import { HabitatScore } from "./components/HabitatScore";
import { SignalCards } from "./components/SignalCards";
import { InsightPanel } from "./components/InsightPanel";
import { TrendChart } from "./components/TrendChart";
import { MultiSitePanel } from "./components/MultiSitePanel";
import { EstuaryMap } from "./components/EstuaryMap";
import "./styles.css";

export default function App() {
  const { status, latest, events } = useEstuaryStream();

  return (
    <main className="app-shell">
      <Hero status={status} />

      <section className="dashboard-grid">
        <HabitatScore event={latest} />
        <InsightPanel event={latest} />
      </section>

      <SignalCards event={latest} />
      <MultiSitePanel events={events} />
      <EstuaryMap events={events} />
      <TrendChart events={events} />
    </main>
  );
}