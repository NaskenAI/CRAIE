import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { School, FileText, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Programs = () => {
  const programAreas = [
    {
      title: "School pilot projects",
      description:
        "Working with schools to assess how they currently use AI, identify gaps, recommend suitable tools and practices, and provide hands-on support with implementation.",
      icon: School,
    },
    {
      title: "Policy development",
      description:
        "Drafting and advising on school-level AI policies aligned with Massachusetts education guidance and broader ethical frameworks.",
      icon: FileText,
    },
    {
      title: "Research and publications",
      description:
        "White papers, toolkits and academic collaborations that support responsible AI adoption in education and inform wider policy discussion.",
      icon: BookOpen,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Programs</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            How CRAIE supports schools and nonprofits in adopting AI responsibly.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">What we do</h2>
            <p className="text-lg text-muted-foreground">
              Our work is organized into three program areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programAreas.map((area) => (
              <Card
                key={area.title}
                className="text-center shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Current work</h2>
          </div>
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-accent">
            <CardContent className="p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
                    Advisory engagement: New York City–based education nonprofit
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    CRAIE is advising a New York City–based education nonprofit on responsible AI
                    adoption across three workstreams: operations, grant writing and funding, and an
                    AI-driven learning and resource center planned with a university student
                    engineering team. Work delivered so far includes AI tool recommendations for staff,
                    an analysis of a staff AI-use survey, and a practical prompting guide for staff.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Work with us</h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Schools and nonprofits interested in responsible AI adoption are welcome to get in touch.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant" asChild>
            <Link to="/get-involved">
              Work with us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
