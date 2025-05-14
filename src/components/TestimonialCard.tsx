
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  position,
  company,
  content,
  rating,
  image,
  className,
}: TestimonialProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md border border-gray-100",
        className
      )}
    >
      <div className="flex items-center mb-4">
        {/* Stars based on rating */}
        <div className="flex mr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              )}
            />
          ))}
        </div>
      </div>

      <blockquote className="text-gray-700 mb-6 italic">"{content}"</blockquote>

      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
