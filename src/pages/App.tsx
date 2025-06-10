import Hero from "../components/hero";
import SearchAndFilterBar from "../components/search-filter-bar";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchAndFilterBar />
      </main>
    </div>
  );
};

export default App;
