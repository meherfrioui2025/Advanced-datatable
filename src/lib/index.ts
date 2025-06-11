import type { Feature } from "../components/feature-card/feature-card";

function matchesSearchCriteria(feature: Feature, searchTerm: string) {
  if (!searchTerm) return true;

  const normalizedSearch = searchTerm.toLowerCase();
  return (
    feature.title.toLowerCase().includes(normalizedSearch) ||
    feature.description.toLowerCase().includes(normalizedSearch)
  );
}

function matchesCategoryCriteria(feature: Feature, category: string) {
  return category === "all" || feature.category === category;
}

export { matchesCategoryCriteria, matchesSearchCriteria };
