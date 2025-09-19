import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">CRAIE</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-sm">
              Center for Responsible AI in Education, Inc. - Advancing responsible and equitable adoption of artificial intelligence in education.
            </p>
            <p className="text-xs text-primary-foreground/60">
              CRAIE © 2024 | EIN: 99-4455282
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Boston, MA</p>
              <p>EIN: 99-4455282</p>
              <div className="pt-4">
                <p className="text-xs text-primary-foreground/60">
                  <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
                  {" | "}
                  <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Use</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/60">
            Made with Readdy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;