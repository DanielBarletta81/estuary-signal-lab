import { nanoid } from "nanoid";
import { createInsight } from "./insightEngine.js";

function oxygenScore(value) {
  if (value >= 6) return 100;
  if (value >= 4) return 75;
  if (value >= 2) return 45;
  return 15;
}

function salinityScore(value) {
  if (value >= 20 && value <= 32) return 100;
  if (value >= 10 && value < 20) return 65;
  if (value > 32 && value <= 36) return 65;
  return 30;
}

function temperatureScore(value) {
  if (value >= 10 && value <= 24) return 100;
  if (value > 24 && value <= 28) return 70;
  return 40;
}

function turbidityScore(value) {
  if (value <= 8) return 100;
  if (value <= 18) return 70;
  return 40;
}

export function processHabitatSample(sample) {
  const signals = {
    oxygen: oxygenScore(sample.dissolvedOxygenMgL),
    salinity: salinityScore(sample.salinityPpt),
    temperature: temperatureScore(sample.temperatureC),
    turbidity: turbidityScore(sample.turbidityNTU),
  };

  const entries = Object.entries(signals);
  const habitatScore = Math.round(
    entries.reduce((sum, [, score]) => sum + score, 0) / entries.length
  );

  const [limitingFactor] = entries.sort((a, b) => a[1] - b[1])[0];

  const stressLevel =
    habitatScore < 40
      ? "severe"
      : habitatScore < 65
      ? "moderate"
      : habitatScore < 80
      ? "watch"
      : "healthy";

  const assessment = {
    habitatScore,
    stressLevel,
    limitingFactor,
    signalScores: signals,
  };

  return {
    id: nanoid(),
    type: "HABITAT_SAMPLE",
    sample,
    assessment,
    insight: createInsight(sample, assessment),
    processedAt: new Date().toISOString(),
  };
}