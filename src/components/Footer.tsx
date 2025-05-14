
import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-5 w-5 text-blue-400" />
              <span className="text-xl font-bold">CorpSolutions</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing innovative business solutions since 2010. We help businesses transform and grow in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">123 Business Ave, Suite 100<br />Corporate City, CO 10101</span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">(555) 123-4567</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">info@corpsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} CorpSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
