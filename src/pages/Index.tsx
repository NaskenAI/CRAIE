import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Lightbulb, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-classroom.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Students and educators in a classroom"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
              IRS 501(c)(3) approved
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Center for Responsible AI in Education
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              We advance responsible and equitable adoption of artificial intelligence in education
              through educator training, open resources, and volunteer support for schools and
              nonprofits, with a focus on underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
                asChild
              >
                <Link to="/get-involved">
                  Get involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/about">About CRAIE</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/90 text-primary hover:bg-white" asChild>
                <Link to="/programs">Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Advance responsible and equitable AI in education by equipping educators, sharing
            evidence-based resources, and mobilizing volunteers to support schools and nonprofits.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Training & education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practical workshops and curricula to help educators integrate AI responsibly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Community support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Volunteer networks and open resources to expand equitable access.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Innovation & ethics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evidence-informed guidance for ethical AI practices that benefit all learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Making AI Education Accessible */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Making AI education accessible
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every student deserves quality AI learning opportunities. We help bridge resource
                gaps and support responsible adoption.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Training for educators in underserved communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Open resources and curriculum guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Ethical implementation support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Sustainable school and nonprofit partnerships</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Team collaboration on AI education"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join our mission</h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Educators, volunteers, and partner organizations are welcome to collaborate with CRAIE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/get-involved">Volunteer with us</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Become a partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
