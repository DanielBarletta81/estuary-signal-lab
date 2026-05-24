import { sites } from "../data/sites.js";

function randomBetween(min, max) {
  return Number((min + Math.random() * (max - min)).toFixed(2));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function generateWaterQualitySample() {
  const site = sites[Math.floor(Math.random() * sites.length)];
  const stress = site.stressBias;
  const salinityBias = site.salinityBias;

  return {
    ...site,
    temperatureC: randomBetween(17, 29 + stress),
    salinityPpt: clamp(randomBetween(21, 30) + salinityBias, 12, 36),
    dissolvedOxygenMgL: clamp(randomBetween(6.5 - stress * 2.4, 8.2), 0.8, 9),
    turbidityNTU: clamp(randomBetween(4, 12 + stress * 14), 1, 38),
    chlorophyllUgL: clamp(randomBetween(4, 12 + stress * 12), 1, 36),
    timestamp: new Date().toISOString(),
  };
}