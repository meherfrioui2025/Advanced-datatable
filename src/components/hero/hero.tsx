import React from "react";

import Button from "../button";

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Advanced DataTable
            <span className="text-gradient block">Features Guide</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Comprehensive resource for senior developers featuring 50+ advanced
            datatable capabilities with interactive examples, detailed
            documentation, and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              className="flex items-center"
            >
              <span className="mdi mdi-rocket" />
              <span>Explore Features</span>
            </Button>
            <Button variant="secondary" className="flex items-center">
              <span className="mdi mdi-github-circle" />
              <span>View Source</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
