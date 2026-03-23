export function getDaysLeft(planEnd) {
  if (!planEnd) return 0;
  const now = new Date();
  const end = new Date(planEnd);
  return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function isExpired(planEnd) {
  if (!planEnd) return true;
  return new Date(planEnd).getTime() < Date.now();
}
