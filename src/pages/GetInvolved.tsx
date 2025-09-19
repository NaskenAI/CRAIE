import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Building, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const GetInvolved = () => {
  const { toast } = useToast();
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    availability: "",
    interests: "",
    captcha: ""
  });

  const [partnerForm, setPartnerForm] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    organizationType: "",
    partnershipInterest: "",
    description: "",
    captcha: ""
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon.",
    });
    setVolunteerForm({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      availability: "",
      interests: "",
      captcha: ""
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Thank you for your partnership interest. We'll contact you within 2 business days.",
    });
    setPartnerForm({
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      organizationType: "",
      partnershipInterest: "",
      description: "",
      captcha: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our mission to advance responsible AI in education. Whether you want to volunteer, 
            partner with us, or support our cause, there's a place for you at CRAIE.
          </p>
        </div>
      </section>

      {/* Ways to Make a Difference */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              There are many ways to support our mission and help bring responsible AI education to 
              underserved communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Share your expertise and passion by volunteering to train educators, develop resources, or support 
                  our programs.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Volunteer Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Partner</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Organizations can partner with us to expand our reach and impact by providing AI education in their 
                  communities.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Become a Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Donate</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Financial support helps us develop programs, provide resources, and reach more schools and 
                  communities.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Volunteer Sign-Up */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Volunteer Sign-Up</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="volunteer-name">Full Name *</Label>
                    <Input
                      id="volunteer-name"
                      type="text"
                      value={volunteerForm.fullName}
                      onChange={(e) => setVolunteerForm({...volunteerForm, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="volunteer-email">Email Address *</Label>
                    <Input
                      id="volunteer-email"
                      type="email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="volunteer-phone">Phone Number</Label>
                    <Input
                      id="volunteer-phone"
                      type="tel"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="volunteer-experience">Relevant Experience</Label>
                    <Textarea
                      id="volunteer-experience"
                      placeholder="Tell us about your background in education, AI, or related fields"
                      value={volunteerForm.experience}
                      onChange={(e) => setVolunteerForm({...volunteerForm, experience: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="volunteer-availability">Availability</Label>
                    <Input
                      id="volunteer-availability"
                      placeholder="e.g., Weekends, 10-15 hours per week"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="volunteer-interests">Areas of Interest</Label>
                    <Textarea
                      id="volunteer-interests"
                      placeholder="What aspects of our mission are you most interested in supporting?"
                      value={volunteerForm.interests}
                      onChange={(e) => setVolunteerForm({...volunteerForm, interests: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="volunteer-captcha">CAPTCHA</Label>
                    <Input
                      id="volunteer-captcha"
                      placeholder="Simple math: What is 5 + 3?"
                      value={volunteerForm.captcha}
                      onChange={(e) => setVolunteerForm({...volunteerForm, captcha: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Partnership Request */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Partnership Request</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="partner-org">Organization Name *</Label>
                    <Input
                      id="partner-org"
                      type="text"
                      value={partnerForm.organizationName}
                      onChange={(e) => setPartnerForm({...partnerForm, organizationName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-contact">Contact Name *</Label>
                    <Input
                      id="partner-contact"
                      type="text"
                      value={partnerForm.contactName}
                      onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-email">Email Address *</Label>
                    <Input
                      id="partner-email"
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-phone">Phone Number</Label>
                    <Input
                      id="partner-phone"
                      type="tel"
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-type">Organization Type</Label>
                    <Select 
                      value={partnerForm.organizationType} 
                      onValueChange={(value) => setPartnerForm({...partnerForm, organizationType: value})}
                    >
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
                  </div>
                  <div>
                    <Label htmlFor="partner-interest">Partnership Interest</Label>
                    <Input
                      id="partner-interest"
                      placeholder="e.g., Training Partnership, Resource Sharing, Funding"
                      value={partnerForm.partnershipInterest}
                      onChange={(e) => setPartnerForm({...partnerForm, partnershipInterest: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-description">Description</Label>
                    <Textarea
                      id="partner-description"
                      placeholder="Tell us about your organization and how you'd like to partner with CRAIE"
                      value={partnerForm.description}
                      onChange={(e) => setPartnerForm({...partnerForm, description: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-captcha">CAPTCHA</Label>
                    <Input
                      id="partner-captcha"
                      placeholder="Simple math: What is 7 + 2?"
                      value={partnerForm.captcha}
                      onChange={(e) => setPartnerForm({...partnerForm, captcha: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;