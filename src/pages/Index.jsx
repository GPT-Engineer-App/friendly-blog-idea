import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Journey in Learning Programming</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Write about your experiences, challenges, and milestones in learning programming..." className="w-full h-64" />
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] mt-4" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Insights about Finances</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Share your insights, tips, and advice on managing finances..." className="w-full h-64" />
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] mt-4" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;