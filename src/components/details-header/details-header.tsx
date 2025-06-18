import React from "react";
import { Link } from "react-router";
import Button from "../button";
import Badge from "../badge";
import Separator from "../separator";

interface Feature {
  category: string;
  complexity: string;
  categoryColor: string;
  complexityColor: string;
}

interface DetailsHeaderProps {
  feature: Feature;
}

const DetailsHeader: React.FC<DetailsHeaderProps> = ({ feature }) => {
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
            <Separator orientation="vertical" className="h-3" />
            <div className="flex items-center space-x-2">
              <span className="mdi mdi-table text-blue-500 text-2xl" />
              <span className="font-medium">DataTable Pro</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={feature?.categoryColor}>
              {feature?.category}
            </Badge>
            <Badge className={feature?.complexityColor} variant="secondary">
              <span className="mdi mdi-clock h-3 w-3 mr-1" />
              {feature?.complexity}
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DetailsHeader;
