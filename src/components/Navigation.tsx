
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Building2 } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">CorpSolutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/about" isActive={location.pathname === "/about"}>About Us</NavLink>
          <NavLink to="/services" isActive={location.pathname === "/services"}>Services</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 z-50 transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="py-4 px-6 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} isActive={location.pathname === "/"}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)} isActive={location.pathname === "/about"}>About Us</MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)} isActive={location.pathname === "/services"}>Services</MobileNavLink>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
  to,
  children,
  isActive,
  className,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}) => (
  <Link
    to={to}
    className={cn(
      "text-gray-800 hover:text-blue-600 transition-colors font-medium",
      isActive && "text-blue-600 font-semibold",
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
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "text-gray-800 hover:text-blue-600 transition-colors text-lg font-medium block py-2",
      isActive && "text-blue-600 font-semibold"
    )}
  >
    {children}
  </Link>
);

export default Navigation;
