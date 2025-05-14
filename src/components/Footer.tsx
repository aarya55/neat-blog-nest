
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="blog-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-5 w-5 text-blog-accent" />
            <span className="text-lg font-bold text-blog-primary">BlogNest</span>
          </div>

          <div className="flex space-x-6">
            <Link to="/" className="text-blog-muted hover:text-blog-primary transition-colors">
              Home
            </Link>
            <Link to="/all-posts" className="text-blog-muted hover:text-blog-primary transition-colors">
              All Posts
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-blog-muted text-sm">
          <p>© {currentYear} BlogNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
