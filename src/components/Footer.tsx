import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-navy section-padding pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-primary mb-6 block">
              LOLITER TRAVELS
            </span>
            <p className="font-body text-foreground/70 text-sm leading-relaxed">
              Your trusted partner for international travel and education support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="font-body text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-body text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-body text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground/70">
                  London, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground/70">
                  info@lolitertravels.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground/70">
                  +44 (0) 20 XXXX XXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 pt-8">
          {/* Disclaimer */}
          <p className="font-body text-xs text-foreground/50 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Loliter Travels Ltd does not provide legal advice. 
            All visa decisions are made solely by the relevant immigration authorities.
          </p>

          {/* Copyright */}
          <p className="font-body text-xs text-foreground/40 text-center">
            © {new Date().getFullYear()} Loliter Travels Ltd. All rights reserved. 
            Registered in England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
