import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Building, FileText } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      title: "Equity",
      description: "Ensuring all students have access to AI education opportunities.",
    },
    {
      title: "Responsibility",
      description: "Promoting ethical and thoughtful implementation of AI technologies.",
    },
    {
      title: "Community",
      description: "Building strong partnerships and collaborative relationships.",
    },
    {
      title: "Innovation",
      description: "Embracing creative solutions and continuous learning.",
    },
  ];

  const boardMembers = [
    {
      name: "Sandesh Gubbi Virupaksha",
      role: "President",
      initials: "SG",
    },
    {
      name: "Sameer Naik",
      role: "Treasurer",
      initials: "SN",
    },
    {
      name: "Patrick Walsh",
      role: "Clerk",
      initials: "PW",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn more about CRAIE's mission, vision, and the dedicated team working to advance 
            responsible AI in education.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To advance responsible and equitable adoption of artificial intelligence in education by 
                providing training, resources, and volunteer support to schools and nonprofits, especially 
                in underserved communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that artificial intelligence has the power to transform education for the better, but only 
                when implemented thoughtfully, ethically, and with equity at the forefront. Our work focuses on 
                ensuring that all students, regardless of their background or school resources, have access to the 
                benefits of AI-enhanced learning.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Key Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Educator training and professional development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Ethical AI implementation guidelines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Community partnership development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Resource accessibility and equity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These core principles guide everything we do at CRAIE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-semibold text-lg">{value.title[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Board of Directors & Officers
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated leaders guiding CRAIE's mission and strategic direction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-primary text-white text-xl font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">Board of Directors</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Information */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Organization Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Legal Name</h3>
              <p className="text-primary-foreground/80">
                Center for Responsible AI in Education, Inc.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-primary-foreground/80">
                Boston, Massachusetts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">EIN</h3>
              <p className="text-primary-foreground/80">
                99-4455282
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
