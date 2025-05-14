
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
}: HeroProps) => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Corporate background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-2xl mb-8 text-gray-200">{subtitle}</p>
        <Link to={ctaLink}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
