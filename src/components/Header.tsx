
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="blog-container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blog-accent" />
          <span className="text-xl font-bold text-blog-primary">BlogNest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-posts">All Posts</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blog-primary"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[57px] bg-white border-b border-gray-200 z-50 transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="py-4 px-6 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/all-posts" onClick={() => setIsMenuOpen(false)}>All Posts</MobileNavLink>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    to={to}
    className={cn(
      "text-blog-primary hover:text-blog-accent transition-colors font-medium",
      className
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-blog-primary hover:text-blog-accent transition-colors text-lg font-medium block py-2"
  >
    {children}
  </Link>
);

export default Header;
