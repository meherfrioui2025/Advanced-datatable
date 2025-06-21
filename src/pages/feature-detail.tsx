import { Card, CardContent } from "../components/card/card";
import DetailsHeader from "../components/details-header";
import Container from "../components/container";
import featuresData from "../services/features";
import { Link, useParams } from "react-router";
import Button from "../components/button";
import Badge from "../components/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";

const FeatureDetail = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const feature = featuresData.find((f) => f.id === featureId);

  if (!feature) {
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
            className={`w-8 h-8 rounded-full bg-${feature.category}-200`}
          />
          <h1 className="text-4xl">{feature.title}</h1>
        </div>
        <div className="mt-2">
          <p className="text-gray-400">{feature.description}</p>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="example" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="example">Live Example</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default FeatureDetail;
