import Badge from "../badge";
import { Card, CardContent } from "../card/card";

export interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  complexity: string;
  color: string;
  icon?:string
}

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
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
    <Card className="feature-card-hover cursor-pointer border border-slate-200 hover:border-blue-500/30 min-h-50">
      <CardContent className="p-4">
        <div className="flex items-start justify-between py-2">
          <div className={`p-1 bg-${feature.color}-100 rounded-full w-7 h-7 flex items-center justify-center`}>
            <i className={`${feature.icon} text-${feature.color}-600`}></i>
          </div>
          <Badge className={categoryColor} variant="secondary">
            {feature.category}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {feature.title}
        </h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {feature.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <Badge className={complexityColor} variant="outline">
            <span className="mdi mdi-clock text-blue-500" />
            {feature.complexity}
          </Badge>
          <span className="mdi mdi-arrow-right text-blue-500 space-x-2" />
        </div>
      </CardContent>
    </Card>
  );
}
