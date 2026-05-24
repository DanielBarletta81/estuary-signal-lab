export function createInsight(sample, assessment) {
  const factor = assessment.limitingFactor;

  if (assessment.stressLevel === "severe") {
    return `${sample.siteName} is showing severe habitat stress. The main limiting factor is ${factor}. Prolonged exposure at this level can reduce feeding, growth, and survival.`;
  }

  if (assessment.stressLevel === "moderate") {
    return `${sample.siteName} remains biologically viable, but ${factor} is approaching a stress threshold. Continued monitoring matters because estuary conditions can shift quickly.`;
  }

  if (assessment.stressLevel === "watch") {
    return `${sample.siteName} is mostly stable, with early warning signs around ${factor}. This is a good example of why single measurements need ecological context.`;
  }

  return `${sample.siteName} is currently within a healthy habitat range across the major water-quality signals in this educational model.`;
}