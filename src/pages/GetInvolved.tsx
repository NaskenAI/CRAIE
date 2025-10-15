import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Building, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";

const GetInvolved = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our mission to advance responsible AI in education. Whether you want to volunteer, 
            partner with us, or support our cause, there's a place for you at CRAIE.
          </p>
        </div>
      </section>

      {/* Ways to Make a Difference */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Ways to Make a Difference</h2>
          <p className="text-lg text-muted-foreground mb-12">
            There are many ways to support our mission and help bring responsible AI education to underserved communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Share your expertise and passion by volunteering to train educators, develop resources, or support our programs.
                </p>
                <a href="#volunteer" className="inline-block">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Volunteer Now</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Partner</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Organizations can collaborate with us to expand our reach and impact by providing AI education in their communities.
                </p>
                <a href="#partner" className="inline-block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Become a Partner
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Donate</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Financial support helps us develop programs, provide resources, and reach more schools and communities.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Volunteer Form */}
          <Card id="volunteer" className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Volunteer Sign-Up</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/sandeshgv@craie.org"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New Volunteer Sign-Up - CRAIE" />
                <input type="hidden" name="_next" value="https://www.craie.org/thank-you" />
                <input type="hidden" name="_captcha" value="false" />

                <Label>Full Name *</Label>
                <Input name="fullName" required />

                <Label>Email Address *</Label>
                <Input type="email" name="email" required />

                <Label>Phone Number</Label>
                <Input type="tel" name="phone" />

                <Label>Relevant Experience</Label>
                <Textarea name="experience" placeholder="Tell us about your background" />

                <Label>Availability</Label>
                <Input name="availability" placeholder="e.g., Weekends, 10 hrs/week" />

                <Label>Areas of Interest</Label>
                <Textarea name="interests" placeholder="What parts of our mission interest you most?" />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Partner Form */}
          <Card id="partner" className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Partnership Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/sandeshgv@craie.org"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New Partnership Request - CRAIE" />
                <input type="hidden" name="_next" value="https://www.craie.org/thank-you" />
                <input type="hidden" name="_captcha" value="false" />

                <Label>Organization Name *</Label>
                <Input name="organizationName" required />

                <Label>Contact Name *</Label>
                <Input name="contactName" required />

                <Label>Email Address *</Label>
                <Input type="email" name="email" required />

                <Label>Phone Number</Label>
                <Input type="tel" name="phone" />

                <Label>Organization Type</Label>
                <Select name="organizationType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school">School / District</SelectItem>
                    <SelectItem value="nonprofit">Nonprofit</SelectItem>
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Label>Partnership Interest</Label>
                <Input name="partnershipInterest" placeholder="e.g., Training, Funding, Resource Sharing" />

                <Label>Description</Label>
                <Textarea name="description" placeholder="Tell us about your organization and goals" />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
