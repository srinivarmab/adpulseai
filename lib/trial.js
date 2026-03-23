export function getTrialStatus(start) {
  if (!start) return { active: false, daysLeft: 0 };
  const startMs = new Date(start).getTime();
  const diff = Date.now() - startMs;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const daysLeft = 15 - days;
  return { active: days < 15, daysLeft: Math.max(0, daysLeft) };
}
