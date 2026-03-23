export const PLANS = {
  trial: { name: "Trial", days: 7, features: ["campaign", "adgroup"], alerts: false, price: 0 },
  basic: { name: "Basic", days: 7, features: ["campaign", "adgroup"], alerts: false, price: 999 },
  pro: { name: "Professional", days: 30, features: ["campaign", "adgroup", "searchTerms", "products", "ai", "alerts"], alerts: true, price: 1999 },
  growth: { name: "Growth", days: 90, features: ["all"], alerts: true, price: 4999 },
  agency: { name: "Agency", days: 180, features: ["all", "whitelabel"], alerts: true, price: 14999 }
};

export function hasFeature(plan, feature) {
  const item = PLANS[plan] || PLANS.basic;
  return item.features.includes("all") || item.features.includes(feature);
}
