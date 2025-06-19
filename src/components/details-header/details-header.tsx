import React from "react";
import { Link } from "react-router";

import type { Feature } from "../feature-card/feature-card";
import Separator from "../separator";
import Button from "../button";
import Badge from "../badge";

interface DetailsHeaderProps {
  feature: Feature;
}

const DetailsHeader: React.FC<DetailsHeaderProps> = ({ feature }) => {
  const complexityColor =
    {
      beginner: "bg-green-100 text-green-700",
      intermediate: "bg-yellow-100 text-yellow-700",
      advanced: "bg-red-100 text-red-700",
    }[feature.complexity] || "bg-gray-100 text-gray-700";

  const categoryColor =
    {
      data: "bg-blue-100 text-blue-700",
      ui: "bg-purple-100 text-purple-700",
      performance: "bg-orange-100 text-orange-700",
      accessibility: "bg-green-100 text-green-700",
    }[feature.category] || "bg-gray-100 text-gray-700";

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="none"
                size="sm"
                className="flex items-center space-x-2"
              >
                <span className="h-4 w-4 mdi mdi-arrow-left" />
                <span>Back to Features</span>
              </Button>
            </Link>
            <Separator orientation="vertical" />
            <div className="flex items-center space-x-2">
              <span className="mdi mdi-table text-2xl text-blue-600" />
              <span className="font-medium">DataTable Pro</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={categoryColor}>{feature.category}</Badge>
            <Badge className={complexityColor} variant="secondary">
              <span className={`mdi ${feature.icon}`} />
              <span>{feature.complexity}</span>
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DetailsHeader;
