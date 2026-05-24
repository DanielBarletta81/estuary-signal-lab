export function TimePlayback({
  events,
  isPlaybackMode,
  setIsPlaybackMode,
  playbackIndex,
  setPlaybackIndex,
}) {
  const maxIndex = Math.max(events.length - 1, 0);
  const selectedEvent = events[playbackIndex];

  function togglePlayback() {
    setIsPlaybackMode((prev) => !prev);
    setPlaybackIndex(0);
  }

  return (
    <section className="card">
      <p className="eyebrow">Time Playback</p>
      <h2>Replay Estuary Signals</h2>
      <p>
        Scrub through recent samples to see how habitat signals shift through
        time.
      </p>

      <div className="playback-controls">
        <button type="button" onClick={togglePlayback}>
          {isPlaybackMode ? "Return to Live Stream" : "Enter Playback Mode"}
        </button>

        <span className={isPlaybackMode ? "playback-live paused" : "playback-live"}>
          {isPlaybackMode ? "Playback Mode" : "Live Mode"}
        </span>
      </div>

      {isPlaybackMode && (
        <>
          <input
            className="time-slider"
            type="range"
            min="0"
            max={maxIndex}
            value={playbackIndex}
            onChange={(e) => setPlaybackIndex(Number(e.target.value))}
          />

          <div className="playback-meta">
            <span>
              Sample {playbackIndex + 1} of {events.length}
            </span>
            <span>
              {selectedEvent
                ? new Date(selectedEvent.processedAt).toLocaleTimeString()
                : "Waiting for samples"}
            </span>
          </div>
        </>
      )}
    </section>
  );
}