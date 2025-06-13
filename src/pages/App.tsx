import { useState } from "react";
import Features from "../components/features/features";
import Hero from "../components/hero";
import SearchAndFilterBar from "../components/search-filter-bar";

import features from "../services/features";
import { matchesCategoryCriteria, matchesSearchCriteria } from "../lib";
import Stats from "../components/stats";

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
        <SearchAndFilterBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Features filteredFeatures={filteredFeatures} />
        <Stats/>
    </div>
  );
};

export default App;
