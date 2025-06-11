import { useState } from "react";
import Features from "../components/features/features";
import Hero from "../components/hero";
import SearchAndFilterBar from "../components/search-filter-bar";

import features from "../services/features";
import { matchesCategoryCriteria, matchesSearchCriteria } from "../lib";

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFeatures = features.filter(
    (feature) =>
      matchesSearchCriteria(feature, search) &&
      matchesCategoryCriteria(feature, selectedCategory)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchAndFilterBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Features filteredFeatures={filteredFeatures} />
      </main>
    </div>
  );
};

export default App;
