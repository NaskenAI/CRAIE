import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, FileText } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with CRAIE. We'd love to hear from you and discuss how we can work 
            together to advance responsible AI in education.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/sandeshgv@craie.org"
                method="POST"
                className="space-y-4"
              >
                {/* Redirect on success */}
                <input type="hidden" name="_next" value="https://www.craie.org/thank-you" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <Label htmlFor="contact-name">Full Name *</Label>
                  <Input id="contact-name" type="text" name="fullName" required />
                </div>

                <div>
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input id="contact-email" type="email" name="email" required />
                </div>

                <div>
                  <Label htmlFor="contact-subject">Subject *</Label>
                  <Input id="contact-subject" type="text" name="subject" required />
                </div>

                <div>
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help you or how you'd like to get involved."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Boston Headquarters</h3>
                <p className="text-muted-foreground text-sm">
                  867 Boylston St, 5th Floor<br />
                  Boston, MA 02116
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-4">Organization Info</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-center items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Center for Responsible AI in Education, Inc.</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>A 501(c)(3) nonprofit organization</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-6 border-t pt-4">
                  We typically respond within 2 business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
