import Hero from "../components/hero";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
        hello World!
      </div>
    </div>
  );
};

export default App;
