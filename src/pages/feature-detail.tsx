import { Link, useParams } from "react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import featuresData, { featureDetails } from "../services/features";
import DetailsHeader from "../components/details-header";
import ServerSideTable from "./example-data-table/server-side-table";
import Container from "../components/container";
import Button from "../components/button";
import Badge from "../components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/card/card";
import ComplexHeadersTable from "./example-data-table/complex-headers-table";
import PaginationTable from "./example-data-table/pagination-table";

const tabs = [
  {
    label: "Live Example",
    value: "example",
  },
  {
    label: "Overview",
    value: "overview",
  },
  {
    label: "Implementation",
    value: "implementation",
  },
  {
    label: "Best Practices",
    value: "best-practices",
  },
];
const FeatureDetail = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const feature = featuresData.find((f) => f.id === featureId);
  const details = featureDetails[featureId || ""];
  const featureComponents: Record<string, React.ComponentType> = {
    "server-side-processing": ServerSideTable,
    "complex-headers": ComplexHeadersTable,
    pagination: PaginationTable,
  };
  const FeatureComponent = featureComponents[featureId || ""];

  if (!feature || !details) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Feature Not Found</h2>
            <p className="text-slate-600 mb-4">
              The requested feature could not be found.
            </p>
            <Link to="/">
              <Button>
                <span className="mdi mdi-arrow-left-bold" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <DetailsHeader feature={feature} />
      <Container>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={`border-none w-8 h-8 rounded-full bg-${feature.color}-600`}
          >
            <i className={`${feature.icon} text-${feature.color}-800`}></i>
          </Badge>
          <h1 className="text-4xl">{feature.title}</h1>
        </div>
        <div className="mt-2">
          <p className="text-gray-400">{feature.description}</p>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="example">
            <TabsList className="flex flex-col md:grid w-full md:grid-cols-4">
              {tabs.map(({ label, value }) => (
                <TabsTrigger key={value} value={value}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="example" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    {FeatureComponent ? (
                      <FeatureComponent />
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-slate-600">
                          Interactive example coming soon...
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed p-2">
                    {details.overview}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-6 mt-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mt-2">
                    <code>test</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="best-practices" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-green-700">
                      <span className="mdi mdi-checkbox-marked-circle" />
                      <span>Best Practices</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-red-700">
                      <span className="mdi mdi-bomb" />
                      <span>Common Pitfalls</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Related Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <h1>Coming Soon</h1>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default FeatureDetail;
