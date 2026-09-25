import { ReactNode } from "react";
import Layout from "@/components/Layout";

interface LegalPageProps {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}

const LegalPage = ({ title, effectiveDate, children }: LegalPageProps) => {
  return (
    <Layout>
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-white/90">Effective {effectiveDate}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline">
          {children}
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
