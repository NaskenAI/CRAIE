import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, FileText, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    captcha: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setContactForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
      captcha: ""
    });
  };

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

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground">Boston, Massachusetts</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Organization</h3>
                <p className="text-muted-foreground text-sm">Center for Responsible AI in Education, Inc.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">EIN</h3>
                <p className="text-muted-foreground">99-4455282</p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 shadow-card">
            <CardContent className="pt-8 pb-6">
              <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Our Mission</h3>
              <p className="text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                To advance responsible and equitable adoption of artificial intelligence in education by 
                providing training, resources, and volunteer support to schools and nonprofits, especially 
                in underserved communities.
              </p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-6">Quick Actions</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/get-involved'}
              >
                Get Involved
              </Button>
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.location.href = '/donate'}
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Location */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input
                      id="contact-subject"
                      type="text"
                      placeholder="What's this about?"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us how we can help you or how you'd like to get involved."
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-captcha">CAPTCHA</Label>
                    <Input
                      id="contact-captcha"
                      placeholder="Simple math: What is 4 + 6?"
                      value={contactForm.captcha}
                      onChange={(e) => setContactForm({...contactForm, captcha: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    Based in Boston, Massachusetts, serving communities nationwide
                  </p>
                  <div className="bg-gradient-primary/10 rounded-lg p-6 text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">Boston Metropolitan Area</h3>
                    <p className="text-muted-foreground text-sm">
                      While we're based in Boston, our impact reaches schools and communities across the United States.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4 text-center">Connect With Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Building className="h-4 w-4 flex-shrink-0" />
                      <span>Center for Responsible AI in Education, Inc.</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>Boston, Massachusetts</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4 flex-shrink-0" />
                      <span>EIN: 99-4455282</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-xs text-muted-foreground text-center">
                      We typically respond to inquiries within 2 business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;