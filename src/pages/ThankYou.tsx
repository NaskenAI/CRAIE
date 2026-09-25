import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const ThankYou = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center shadow-card">
            <CardContent className="pt-10 pb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Thank you</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We've received your submission and will be in touch.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
