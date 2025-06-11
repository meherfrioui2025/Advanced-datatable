import type { FC } from "react";
import { Link } from "react-router";

import FeatureCard, { type Feature } from "../feature-card/feature-card";
import { Card, CardContent } from "../card/card";
import Skeleton from "../skeleton";

interface FeaturesProps {
  filteredFeatures: Array<Feature>;
}

const Features: FC<FeaturesProps> = ({ filteredFeatures }) => {
  const isLoading = false;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {isLoading
        ? Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="feature-card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-16 w-full mb-4" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))
        : filteredFeatures.map((feature, index) => (
            <Link key={feature.id + index} to={`/feature/${feature.id}`}>
              <FeatureCard feature={feature} />
            </Link>
          ))}
    </div>
  );
};

export default Features;
