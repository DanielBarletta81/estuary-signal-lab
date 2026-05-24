import { useState } from "react";
import { TimePlayback } from "./components/TimePlayback";
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
const [isPlaybackMode, setIsPlaybackMode] = useState(false);
const [playbackIndex, setPlaybackIndex] = useState(0);

const playbackEvent = events[playbackIndex];

const displayedLatest = isPlaybackMode ? playbackEvent : latest;
const displayedEvents = isPlaybackMode ? events.slice(playbackIndex) : events;

  return (
    <main className="app-shell">
      <Hero connectionStatus={status} />

      <TimePlayback
        events={events}
        isPlaybackMode={isPlaybackMode}
        setIsPlaybackMode={setIsPlaybackMode}
        playbackIndex={playbackIndex}
        setPlaybackIndex={setPlaybackIndex}
      />  
     <HabitatScore event={displayedLatest} />
<InsightPanel event={displayedLatest} />

<MultiSitePanel events={displayedEvents} />

<EstuaryMap events={displayedEvents} />

<SignalCards event={displayedLatest} />

<TrendChart events={displayedEvents} />
    </main>
  );
}